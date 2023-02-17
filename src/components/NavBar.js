import React from "react";
import logo from "../images/W3Schools_logo.svg.png";

const NavBar = () => {
  return (
    <div style={{ display: "flex", height: "100px", backgroundColor: "red" }}>
      <div className="bg-info">
        <img
          src={logo}
          className="img-fluid"
          style={{ height: "80px", marginLeft: "30px", marginTop: "10px" }}
          alt="logo"
        />
      </div>
      <div>How are you</div>
    </div>
  );
};

export default NavBar;
