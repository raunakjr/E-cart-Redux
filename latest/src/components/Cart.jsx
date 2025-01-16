import React, { useEffect, useState } from "react";
import { useProduct } from "../contexts/product.context";

export default function Cart() {
  const { cartData, Removedata } = useProduct();

  let data = cartData;
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };
  return data && data.length > 0 ? (
    <div className="product-container">
      {data.map((e, idx) => {
        return (
          <div className="product-card" key={idx}>
            <img className="product-image" src={e.image} alt={e.title} />
            <p className="product-category">Category: {e.category}</p>
            <p className="product-description">
              Description: {truncateText(e.description, 100)}
            </p>
            <p className="product-price">Price: ${e.price}</p>
            <button onClick={() => Removedata(e.id)}> Remove From Cart</button>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="product-card">Bag is Empty</div>
  );
}
