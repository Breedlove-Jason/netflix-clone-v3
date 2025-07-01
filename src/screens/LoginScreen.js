import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (!email) return;
    navigate("/signup", { state: { email } });
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
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>

        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          <h1>See what's next!</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="loginScreen__input">
            <form onSubmit={handleGetStarted}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="loginScreen__getStarted" type="submit">
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
