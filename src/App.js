import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomeScreen from "./screens/home-screen/HomeScreen";
import LoginScreen from "./screens/login-screen/LoginScreen";
import ProfileScreen from "./screens/profile-screen/ProfileScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";

// Main App component that handles routing and authentication
function App() {
  // Use Redux hook to access the current user state
  const user = useSelector(selectUser);
  // Use Redux hook to dispatch actions
  const dispatch = useDispatch();

  // Effect hook to manage authentication state changes
  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Dispatch login action if user is authenticated
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }),
        );
      } else {
        // Dispatch logout action if user is not authenticated
        dispatch(logout());
      }
    });

    // Cleanup function to unsubscribe from auth listener on component unmount
    return unsubscribe;
  }, [dispatch]);

  // Render UI based on user authentication status
  return (
    <div className="app">
      <Router>
        {!user ? (
          // Show login screen if no user is logged in
          <LoginScreen />
        ) : (
          // Routes configuration for logged-in users
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
