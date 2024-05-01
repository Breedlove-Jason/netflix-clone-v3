import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
