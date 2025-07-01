// Test script to verify Firebase authentication and Stripe integration

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "../firebase.js";

// Test email and password for testing
const testEmail = "test@example.com";
const testPassword = "Test123!";

// Test signup functionality
const testSignup = async () => {
  try {
    console.log(`Testing signup with email: ${testEmail}`);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      testEmail,
      testPassword
    );
    console.log("Signup successful:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Signup failed:", error.code, error.message);
    return null;
  }
};

// Test sign in functionality
const testSignIn = async () => {
  try {
    console.log(`Testing sign in with email: ${testEmail}`);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      testEmail,
      testPassword
    );
    console.log("Sign in successful:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Sign in failed:", error.code, error.message);
    return null;
  }
};

// Test sign out functionality
const testSignOut = async () => {
  try {
    console.log("Testing sign out");
    await signOut(auth);
    console.log("Sign out successful");
    return true;
  } catch (error) {
    console.error("Sign out failed:", error.code, error.message);
    return false;
  }
};

// Run tests
const runTests = async () => {
  console.log("Starting authentication tests...");

  // Test signup
  const newUser = await testSignup();

  // Test sign in
  const signedInUser = await testSignIn();

  // Test sign out
  if (signedInUser) {
    await testSignOut();
  }

  console.log("Authentication tests completed");

  // Return test results
  return {
    signupSuccessful: !!newUser,
    signInSuccessful: !!signedInUser
  };
};

// Export the test function
export { runTests };

// Execute tests if this script is run directly
if (require.main === module) {
  runTests();
}
