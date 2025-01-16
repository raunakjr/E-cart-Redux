import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../contexts/product.context";

export default function Navbar() {
  const { cartData } = useProduct();
  return (
    <nav className="navbar">
      <h1>ShopEasy</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Bag {cartData.length} </Link>
      </div>
    </nav>
  );
}
