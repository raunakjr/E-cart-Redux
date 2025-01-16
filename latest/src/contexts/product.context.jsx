import { createContext, useContext, useEffect, useState } from "react";

const Productcontext = createContext();

const ProductProvider = ({ children }) => {
  const [cartData, setCartdata] = useState(() => {
    return JSON.parse(localStorage.getItem("key1")) || [];
  });

  useEffect(() => {
    localStorage.setItem("key1", JSON.stringify(cartData));
  }, [cartData]);

  const Adddata = (e) => {
    const checkalready = cartData.some((d) => d == e);
    if (checkalready) return;
    setCartdata([...cartData, e]);
  };

  const Removedata = (id) => {
    const newArr = cartData.filter((e) => e.id != id);
    setCartdata(newArr);
  };

  return (
    <Productcontext.Provider
      value={{ cartData, setCartdata, Adddata, Removedata }}
    >
      {children}
    </Productcontext.Provider>
  );
};
export default ProductProvider;
export const useProduct = () => {
  return useContext(Productcontext);
};
