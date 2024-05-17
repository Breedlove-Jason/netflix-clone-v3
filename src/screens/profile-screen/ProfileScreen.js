import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Nav from "../../components/nav/Nav";
import "./ProfileScreen.css";
import PlansScreen from "../plans-screen/PlansScreen";

const ProfileScreen = () => {
  // Fetch the currently logged-in user details from Redux store
  const user = useSelector(selectUser);

  // Function to handle user sign-out
  const handleSignOut = () => {
    auth.signOut().catch((error) => {
      console.error("Failed to sign out:", error);
      alert("Sign out failed, please try again.");
    });
  };

  return (
    <div className="profileScreen">
      {/* Include navigation bar at the top of the profile screen*/}
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User Avatar" // Descriptive alt text for accessibility
            className="profileScreen__avatar"
          />
          <div className="profileScreen__details">
            {/*Display the user's email for identification*/}
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              {/* Section for displaying subscription plans*/}
              <h3>Plans</h3>
              {/*// Embed the PlansScreen component to manage subscriptions*/}
              <PlansScreen />

              <button
                className="profileScreen__signOut"
                onClick={handleSignOut} // Button to sign out the user
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
