import React, { useState, useEffect } from "react";
import "./PlansScreen.css";
import db from "../../firebase";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const PlansScreen = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    // Fetch user's subscription data from Firestore
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    // Fetch available products and prices from Firestore
    const fetchProducts = async () => {
      const products = {};
      const querySnapshot = await db
        .collection("products")
        .where("active", "==", true)
        .get();

      for (const productDoc of querySnapshot.docs) {
        const productData = productDoc.data();
        const priceSnap = await productDoc.ref.collection("prices").get();
        const prices = priceSnap.docs.map((price) => ({
          priceId: price.id,
          priceData: price.data(),
        }));
        products[productDoc.id] = { ...productData, prices };
      }
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const loadCheckout = async (priceId) => {
    // Create a new checkout session in Firestore
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    // Listen for changes in the checkout session
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occurred: ${error.message}`);
      }
      if (sessionId) {
        // Redirect to Stripe Checkout when session is ready
        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
        await stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plansScreen">
      {subscription && (
        <p>
          Renewal Date:{" "}
          {new Date(
            subscription?.current_period_end * 1000,
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);
        return (
          <div
            key={productId}
            className={`${isCurrentPackage && "plansScreen__plan--disabled"} plansScreen__plan`}
          >
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            {productData.prices.map((price) => (
              <button
                key={price.priceId}
                onClick={() => !isCurrentPackage && loadCheckout(price.priceId)}
              >
                {isCurrentPackage ? "Current Package" : "Subscribe"}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
