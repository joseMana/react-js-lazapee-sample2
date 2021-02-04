import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Home from "./components/Home";
import ManageProduct from "./components/ManageProduct";
import { Product } from "./models/Product";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/products") return <ProductList />;
    if (route === "/about") return <About />;
    if (route === "/manageProduct") return <ManageProduct />;
    return <Home />;
  }

  return (
    <div>
      <Header />
      <div className="App">{getPage()}</div>
    </div>
  );
}

export default App;
