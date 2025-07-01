import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, auth } from "../firebase";
import "./LoginScreen.css"; // ✅ reuse background style
import "./SignInScreen.css"; // form styling

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Pre-populate email if passed from LoginScreen
  useEffect(() => {
    if (location.state?.email && emailRef.current) {
      emailRef.current.value = location.state.email;
    }
  }, [location]);

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
      navigate("/profile");
    } catch (error) {
      console.error("Signup error:", error.code, error.message);
      alert(error.message);
    }
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
          <form onSubmit={register}>
            <h1>Sign Up</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
            <h4>
              <span className="signUpScreen__gray">
                Already have an account?
              </span>{" "}
              <span
                className="signUpScreen__link"
                onClick={() => navigate("/signin")}
              >
                Sign in now.
              </span>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
