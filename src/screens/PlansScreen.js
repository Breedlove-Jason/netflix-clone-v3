import React, { useState, useEffect } from "react";
import "./PlansScreen.css";
import { 
  db, 
  collection, 
  doc, 
  query, 
  where, 
  getDocs, 
  addDoc, 
  onSnapshot 
} from "../firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY || 
  "pk_test_51PFnMI01foXv66KIhbVeWG24hWrFBnmaiIVcJkEp93TFWYqngYdLp84GGxdeEAbDEHIJwd69vGz4Lhys2K2mcftV00EVE4CCOc";

const PlansScreen = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    if (!user?.uid) return;

    const fetchSubscriptions = async () => {
      try {
        const subscriptionsRef = collection(doc(collection(db, "customers"), user.uid), "subscriptions");
        const subscriptionsSnapshot = await getDocs(subscriptionsRef);

        subscriptionsSnapshot.forEach((subscription) => {
          const data = subscription.data();
          setSubscription({
            role: data.role,
            current_period_end: data.current_period_end.seconds,
            current_period_start: data.current_period_start.seconds,
          });
        });
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, [user?.uid]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const activeProductsQuery = query(productsRef, where("active", "==", true));
        const productsSnapshot = await getDocs(activeProductsQuery);

        const productsData = {};

        for (const productDoc of productsSnapshot.docs) {
          const productData = productDoc.data();
          const pricesRef = collection(doc(productsRef, productDoc.id), "prices");
          const pricesSnapshot = await getDocs(pricesRef);

          const prices = pricesSnapshot.docs.map((price) => ({
            priceId: price.id,
            priceData: price.data(),
          }));

          productsData[productDoc.id] = { ...productData, prices };
        }

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const loadCheckout = async (priceId) => {
    try {
      const checkoutSessionsRef = collection(
        doc(collection(db, "customers"), user.uid),
        "checkout_sessions"
      );

      const docRef = await addDoc(checkoutSessionsRef, {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

      const unsubscribe = onSnapshot(docRef, async (snap) => {
        const data = snap.data();
        if (!data) return;

        const { error, sessionId } = data;

        if (error) {
          alert(`An error occurred: ${error.message}`);
          unsubscribe();
          return;
        }

        if (sessionId) {
          const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
          await stripe.redirectToCheckout({ sessionId });
          unsubscribe();
        }
      });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("An error occurred while creating the checkout session.");
    }
  };

  return (
    <div className="plansScreen">
      <br />
      {subscription && (
        <p>
          Renewal Date:{" "}
          {new Date(
            subscription.current_period_end * 1000
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
            className={`plansScreen__plan ${isCurrentPackage ? "plansScreen__plan--disabled" : ""}`}
          >
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            {productData.prices.map((price, index) => (
              <button
                key={index}
                onClick={() => !isCurrentPackage && loadCheckout(price.priceId)}
                disabled={isCurrentPackage}
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
