import React from "react";
import "../components/Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="app-logo" />
      <div className="navbar">
        <a className="link" href="/">
          HOME
        </a>{" "}
        <a className="link" href="/products">
          PRODUCTS
        </a>{" "}
        <a className="link" href="/about">
          ABOUT
        </a>
      </div>
    </div>
  );
};

export default Header;
