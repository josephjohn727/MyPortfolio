import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Developer</h1>
        <Typed
          className="typed-text"
          strings={["HTML", "CSS", "JavaScript", "React.js"]}
          typeSpeed={30}
          backSpeed={40}
          loop
        />
        <a href="#" className="main-btn">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
