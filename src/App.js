// firebase hosting: https://netflix-clone-d76c3.web.app/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth, onAuthStateChanged } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = null;
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          }),
        );
      } else {
        dispatch(logout); // logged out
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <>
            <Routes>
              <Route path={"profile"} element={<ProfileScreen />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/" element={<HomeScreen />}></Route>
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
