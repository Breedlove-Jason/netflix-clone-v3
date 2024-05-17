import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import SignUpScreen from "../sign-up-screen/SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  // Handler for initiating the sign in process
  const handleSignIn = () => {
    setSignIn(true);
    // Placeholder for any additional login logic
    navigate("/profile"); // Redirect to profile page after sign in
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          onClick={() => navigate("/")} // Navigate to home screen on logo click
        />
        <button className="loginScreen__button" onClick={handleSignIn}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>See what's next.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSignIn();
                  }}
                >
                  <input type="email" placeholder="Email Address" />
                  <button type="submit" className="loginScreen__getStarted">
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
