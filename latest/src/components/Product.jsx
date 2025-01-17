import React, { useEffect, useState } from "react";
import { Adddata } from "../Product Slice/CartSlice";
import { useDispatch } from "react-redux";

export default function Product() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((p) => {
        setData(p);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="product-container">
      {data.map((e) => (
        <div className="product-card" key={e.id}>
          <img
            className="product-image"
            src={e.image}
            alt={e.title || "Product"}
          />
          <p className="product-category">Category: {e.category}</p>
          <p className="product-description">Description: {e.description}</p>
          <p className="product-price">Price: ${e.price}</p>
          <button onClick={() => dispatch(Adddata(e))}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}
