# Netflix Clone v3

Netflix Clone v3 is a web application that mimics the core features of Netflix. It utilizes the TMDB API to gather real-time movie data and provides functionalities like user authentication, subscription management, and payment processing using the Stripe API.
![netflix-screenshot.png](netflix-screenshot.png)

## Features

- Real-time movie data from TMDB API
- User authentication with Firebase
- Subscription management
- Payment processing with Stripe API
- State management with Redux

## Technologies Used

- React 18
- Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- Firebase 10 (with modular SDK)
- Stripe (`@stripe/stripe-js`)
- Axios
- Normalize.css
- React Router DOM v6
- Prettier (for development)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Breedlove-Jason/netflix-clone-v3.git
   cd netflix-clone-v3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env`
   - Fill in your Firebase, TMDB, and Stripe API keys

4. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

The following environment variables are required:

- `REACT_APP_FIREBASE_API_KEY`: Your Firebase API key
- `REACT_APP_FIREBASE_AUTH_DOMAIN`: Your Firebase auth domain
- `REACT_APP_FIREBASE_PROJECT_ID`: Your Firebase project ID
- `REACT_APP_FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID
- `REACT_APP_FIREBASE_APP_ID`: Your Firebase app ID
- `REACT_APP_TMDB_API_KEY`: Your TMDB API key
- `REACT_APP_STRIPE_PUBLIC_KEY`: Your Stripe public key

See `.env.example` for a template.

## Recent Updates

- Updated to Firebase v10 modular SDK
- Fixed React Router v6 implementation
- Improved error handling
- Added environment variable support for API keys
- Fixed memory leaks in components
- Optimized Firestore queries
