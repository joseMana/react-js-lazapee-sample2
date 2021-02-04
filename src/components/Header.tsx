import "../components/Header.css";
import React, { PropsWithChildren } from "react";

const Header: React.FC<PropsWithChildren<{}>> = (props) => {
  return <header>{props.children}</header>;
};

export default Header;
