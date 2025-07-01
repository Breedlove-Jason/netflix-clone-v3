# Testing the Netflix Clone Application

This document provides instructions on how to test the Netflix Clone application to ensure that signup, sign in, and Stripe integration are all working correctly.

## Prerequisites

Before testing, make sure you have:

1. Set up the `.env` file with the correct API keys:
   - Firebase configuration
   - TMDB API key
   - Stripe public key

2. Installed all dependencies:
   ```bash
   npm install
   ```

3. Started the development server:
   ```bash
   npm start
   ```

## Manual Testing

### 1. Testing Signup

1. Open the application in your browser
2. If you're already logged in, sign out by going to the profile page and clicking "Sign Out"
3. On the login screen, enter a new email and password
4. Click "Sign up now" at the bottom of the form
5. You should be redirected to the home page if signup is successful

### 2. Testing Sign In

1. Open the application in your browser
2. If you're already logged in, sign out by going to the profile page and clicking "Sign Out"
3. On the login screen, enter your email and password
4. Click "Sign In"
5. You should be redirected to the home page if sign in is successful

### 3. Testing Stripe Integration

1. Sign in to the application
2. Go to the profile page by clicking on your avatar in the top right corner
3. You should see a list of subscription plans
4. Click "Subscribe" on one of the plans
5. You should be redirected to the Stripe checkout page
6. Complete the checkout process with the test card details:
   - Card number: 4242 4242 4242 4242
   - Expiration date: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits
7. After successful payment, you should be redirected back to the application
8. The plan you subscribed to should now show as "Current Package"

## Automated Testing

We've created some test scripts to help verify the functionality:

1. To test authentication (signup and sign in):
   ```bash
   node src/test-auth.js
   ```

2. To test Stripe integration:
   ```bash
   node src/test-stripe.js
   ```

3. To run all tests:
   ```bash
   node src/test-all.js
   ```

Note: These tests are for verification purposes only and don't perform actual operations like creating users or making payments.

## Troubleshooting

If you encounter any issues during testing:

1. Check the browser console for error messages
2. Verify that your Firebase project has Email/Password authentication enabled
3. Make sure your Stripe account is properly set up with test mode enabled
4. Check that your Firebase project has the Stripe extension installed and configured
5. Verify that the Firebase and Stripe API keys in your `.env` file are correct

## Next Steps

After verifying that signup, sign in, and Stripe integration are working correctly, you can:

1. Customize the application to your needs
2. Deploy the application to Firebase Hosting
3. Set up a production Stripe account for real payments