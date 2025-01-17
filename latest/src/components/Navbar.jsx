import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../contexts/product.context";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { mode, setMode } = useProduct();
  const { cartData } = useSelector((state) => state.cart);
  const handleclick = () => {
    console.log("clicked");
    if (mode == "Light") setMode("Dark");
    else setMode("Light");
  };
  return (
    <nav className="navbar">
      <h1>ShopEasy</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Bag {cartData.length} </Link>
        <button onClick={() => handleclick()}>Dark</button>
      </div>
    </nav>
  );
}
