import "../components/Header.css";
import React, { PropsWithChildren } from "react";
import logo from "../assets/images/logo.png";

const Header: React.FC<PropsWithChildren<{}>> = (props) => {
  return <header>{props.children}</header>;
};

export default Header;
