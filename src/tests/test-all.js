// Main test script to verify all functionality

import { runTests as runAuthTests } from './test-auth.js';
import { runTests as runStripeTests } from './test-stripe.js';

// Run all tests
const runAllTests = async () => {
  console.log("=== STARTING ALL TESTS ===");

  // Test authentication
  console.log("\n=== AUTHENTICATION TESTS ===");
  try {
    const authResults = await runAuthTests();
    console.log("Authentication tests completed with results:", authResults);
  } catch (error) {
    console.error("Authentication tests failed:", error);
  }

  // Test Stripe integration
  console.log("\n=== STRIPE INTEGRATION TESTS ===");
  try {
    const stripeResults = await runStripeTests();
    console.log("Stripe tests completed with results:", stripeResults);
  } catch (error) {
    console.error("Stripe tests failed:", error);
  }

  console.log("\n=== ALL TESTS COMPLETED ===");
};

// Export the test function
export { runAllTests };

// Execute tests if this script is run directly
if (typeof require !== 'undefined' && require.main === module) {
  runAllTests();
}

// Note: This script is for testing purposes only.
// In a real application, you would need to:
// 1. Set up proper test environment
// 2. Use a testing framework like Jest
// 3. Mock external services
// 4. Clean up test data after tests
