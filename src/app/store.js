// Import the configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the userReducer from the userSlice file
import userReducer from "../features/userSlice";

// Create a Redux store using the configureStore function
// The store is configured with a single reducer, userReducer, which is assigned to the 'user' key in the state
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
