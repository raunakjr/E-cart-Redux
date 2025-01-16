import React, { useEffect, useState } from "react";
import { useProduct } from "../contexts/product.context";

export default function Product() {
  const [data, setData] = useState([]);

  const { Adddata } = useProduct();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((p) => setData(p))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="product-container">
      {data.map((e, idx) => {
        return (
          <div className="product-card" key={idx}>
            <img className="product-image" src={e.image} alt={e.title} />
            <p className="product-category">Category: {e.category}</p>
            <p className="product-description">Description: {e.description}</p>
            <p className="product-price">Price: ${e.price}</p>
            <button onClick={() => Adddata(e)}> Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
}
