import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import ManageProduct from "./components/ManageProduct";
import { Product } from "./models/Product";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="app-logo" />
        <div className="navbar">
          <Header>
            <NavLink exact to="/" activeClassName="active">HOME</NavLink>
            <NavLink to="/products" activeClassName="active">PRODUCTS</NavLink>
            <NavLink to="/about" activeClassName="active">ABOUT</NavLink>
          </Header>
        </div>
      </div>
      <div className="App">
        <section className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about" component={About}></Route>
            <Route path="/products" component={ProductList}></Route>
            <Route path="/manageProduct/:productId" component={ManageProduct} />

            <Route path="/pagenotfound"component={PageNotFound}></Route>
            <Redirect from='*' to='/pagenotfound' />
          </Switch>
        </section>
      </div>
    </div>
  );
}
export default App;
