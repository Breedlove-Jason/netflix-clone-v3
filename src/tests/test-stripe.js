// Test script to verify Stripe integration

import { loadStripe } from "@stripe/stripe-js";
import { db, collection, doc } from "../firebase.js";

// Get Stripe public key from environment variables
const STRIPE_PUBLIC_KEY =
  process.env.REACT_APP_STRIPE_PUBLIC_KEY ||
  "pk_test_51PFnMI01foXv66KIhbVeWG24hWrFBnmaiIVcJkEp93TFWYqngYdLp84GGxdeEAbDEHIJwd69vGz4Lhys2K2mcftV00EVE4CCOc";

// Test Stripe loading
const testStripeLoading = async () => {
  try {
    console.log("Testing Stripe loading with public key:", STRIPE_PUBLIC_KEY);
    const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
    console.log("Stripe loaded successfully:", !!stripe);
    return stripe;
  } catch (error) {
    console.error("Stripe loading failed:", error.message);
    return null;
  }
};

// Test Firestore products collection
const testFirestoreProducts = async () => {
  try {
    console.log("Testing Firestore products collection");
    const productsRef = collection(db, "products");
    console.log("Products collection reference created successfully");
    return productsRef;
  } catch (error) {
    console.error("Firestore products collection failed:", error.message);
    return null;
  }
};

// Test checkout session creation (simulation only, won't create actual session)
const testCheckoutSessionCreation = async (userId) => {
  try {
    console.log("Testing checkout session creation (simulation)");
    // This is just a test to verify the code structure, not actually creating a session
    const checkoutSessionsRef = collection(
      doc(collection(db, "customers"), userId || "test-user-id"),
      "checkout_sessions",
    );
    console.log("Checkout sessions reference created successfully");
    return checkoutSessionsRef;
  } catch (error) {
    console.error("Checkout session reference creation failed:", error.message);
    return null;
  }
};

// Run tests
const runTests = async () => {
  console.log("Starting Stripe integration tests...");

  // Test Stripe loading
  const stripe = await testStripeLoading();

  // Test Firestore products collection
  const productsRef = await testFirestoreProducts();

  // Test checkout session creation
  const checkoutSessionsRef = await testCheckoutSessionCreation();

  console.log("Stripe integration tests completed");

  // Return test results
  return {
    stripeLoaded: !!stripe,
    productsRefCreated: !!productsRef,
    checkoutSessionsRefCreated: !!checkoutSessionsRef,
  };
};

// Export the test function
export { runTests };

// Execute tests if this script is run directly
if (require.main === module) {
  runTests().then((results) => {
    console.log("Test results:", results);
  });
}
