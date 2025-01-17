import { createContext, useContext, useEffect, useState } from "react";

const Productcontext = createContext();

const ProductProvider = ({ children }) => {
  const [cartData, setCartdata] = useState(() => {
    return JSON.parse(localStorage.getItem("key1")) || [];
  });

  const [mode, setMode] = useState(() => {
    return JSON.parse(localStorage.getItem("key2")) || "Light";
  });

  useEffect(() => {
    const container = document.querySelector(".product-container");
    if (mode === "Dark") {
      if (container) container.style.backgroundColor = "black";
    } else {
      if (container) container.style.backgroundColor = "white";
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("key1", JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    localStorage.setItem("key2", JSON.stringify(mode));
    const container = document.querySelector(".product-container");
    if (mode === "Dark") {
      if (container) container.style.backgroundColor = "black";
    } else {
      if (container) container.style.backgroundColor = "white";
    }
  }, [mode]);

  const Adddata = (e) => {
    const checkalready = cartData.some((d) => d === e);
    if (checkalready) return;
    setCartdata([...cartData, e]);
  };

  const Removedata = (id) => {
    const newArr = cartData.filter((e) => e.id !== id);
    setCartdata(newArr);
  };

  return (
    <Productcontext.Provider
      value={{ cartData, setCartdata, Adddata, Removedata, setMode, mode }}
    >
      {children}
    </Productcontext.Provider>
  );
};

export default ProductProvider;
export const useProduct = () => {
  return useContext(Productcontext);
};
