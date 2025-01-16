import "./App.css";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductProvider from "./contexts/product.context.jsx";
function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
