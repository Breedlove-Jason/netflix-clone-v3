import React, { useState, useEffect } from "react";
import "./PlansScreen.css";
import db from "../firebase";

const PlansScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
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
  console.log(products);

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        // add some logic to check if user's subscription is active
        return (
          <div key={productId} className="plansScreen__plan">
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
