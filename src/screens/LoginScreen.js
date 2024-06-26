import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setSignIn(true);
    // Add any login logic you might have here

    navigate("/profile"); // Redirect to profile
  };

  return (
    <div className={"loginScreen"}>
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix_logo"
        />
        <button
          className={"loginScreen__button"}
          onClick={() => handleSignIn()}
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>See what's next</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className={"loginScreen__input"}>
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className={"loginScreen__getStarted"}
                  >
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
