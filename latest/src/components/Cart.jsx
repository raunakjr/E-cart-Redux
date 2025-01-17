import React from "react";
import { Removedata } from "../Product Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const { cartData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return cartData && cartData.length > 0 ? (
    <div className="product-container">
      {cartData.map((e) => (
        <div className="product-card" key={e.id}>
          <img
            className="product-image"
            src={e.image}
            alt={e.title || "Product"}
          />
          <p className="product-category">Category: {e.category}</p>
          <p className="product-description">Description: {e.description}</p>
          <p className="product-price">Price: ${e.price}</p>
          <button onClick={() => dispatch(Removedata(e.id))}>
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
  ) : (
    <div className="empty-cart">Your cart is empty</div>
  );
}
