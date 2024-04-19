import Header from "./Component/Fatch Data/Hrader";
import Home from "./Component/Pages/Home";
import Categories from "./Component/Pages/Categories";
import Product from "./Component/Pages/Prodect";
import Details from "./Component/Pages/ProdectDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route
          path="/product-details/:productID?"
          element={<ProductDetails />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
