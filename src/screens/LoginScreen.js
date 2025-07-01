import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginScreen.css";
import BackgroundWrapper from "../components/BackgroundWrapper";

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <BackgroundWrapper>
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix_logo"
        />
        <button
          className={"loginScreen__button"}
          onClick={() => navigate("/profile")}
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          <h1>See what's next</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className={"loginScreen__input"}>
            <form>
              <input type="email" placeholder="Email Address" />
              <Link to="/signup" className="loginScreen__getStarted">
                GET STARTED
              </Link>
            </form>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default LoginScreen;
