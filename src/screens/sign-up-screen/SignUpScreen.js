import React, { useRef } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  // References for email and password inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Function to handle user registration
  const register = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Attempt to create a new user with email and password
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value,
    )
      .then((authUser) => {
        console.log("User created:", authUser);
      })
      .catch((error) => {
        alert("Failed to create user:", error.message);
      });
  };

  // Function to handle user login
  const signIn = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Attempt to sign in the user with email and password
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value,
    )
      .then((authUser) => {
        console.log("User signed in:", authUser);
      })
      .catch((error) => {
        alert("Failed to sign in:", error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signUpScreen__gray">New to Netflix?</span>{" "}
          <span className="signUpScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
