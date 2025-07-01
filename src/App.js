import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth, onAuthStateChanged } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }),
        );
      } else {
        dispatch(logout()); // logged out
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
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
