import "./App.css";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="products">
            <Route path=":category" element={<ProductList />} />
          </Route>
          <Route path="product">
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
