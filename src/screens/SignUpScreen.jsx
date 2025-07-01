// src/pages/SignUpPage.js
import React, { useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "../firebase";
import "./SignInScreen.css";
import { useNavigate } from "react-router-dom";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("Signup success:", userCredential.user);
      navigate("/profile"); // or redirect as needed
    } catch (error) {
      console.error("Signup error:", error.code, error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signUpScreen">
      <form onSubmit={register}>
        <h1>Sign Up</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
        <h4>
          <span className="signUpScreen__gray">Already have an account?</span>{" "}
          <span
            className="signUpScreen__link"
            onClick={() => navigate("/login")}
          >
            Sign in.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
