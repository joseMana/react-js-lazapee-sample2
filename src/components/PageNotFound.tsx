import React from "react";
import { NavLink } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
    <h1>Page not found.</h1>
    <NavLink exact to="/" activeClassName="active">Go back to Home</NavLink>
  </div>
  );
};

export default PageNotFound;
