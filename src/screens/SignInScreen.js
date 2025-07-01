import React, { useRef } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./SignInScreen.css";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value,
    )
      .then((authUser) => {
        console.log(authUser);
        navigate("/profile");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix_logo"
        />
        <div className="loginScreen__gradient" />
        <div className="signUpScreen">
          <form onSubmit={signIn}>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
            <h4>
              <span className="signUpScreen__gray">New to Netflix? </span>
              <span
                className="signUpScreen__link"
                onClick={() => navigate("/signup")}
              >
                Sign up now.
              </span>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
