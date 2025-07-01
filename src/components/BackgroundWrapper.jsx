import React from "react";
import PropTypes from "prop-types";
import "./BackgroundWrapper.css";

const BackgroundWrapper = ({ children }) => (
  <div
    className="backgroundWrapper"
    style={{
      backgroundImage: "url(/netflix_login_background.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      width: "100%",
    }}
  >
    {children}
  </div>
);

BackgroundWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundWrapper;
