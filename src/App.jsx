import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPg/Page";
import AllProducts from "./pages/allProducts/AllProducts";
import EachProduct from "./pages/eachProductPreview/EachProduct";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import CartPage from "./pages/cart/CartPage";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route element={<AllProducts />} path="/all-products"></Route>
      <Route element={<EachProduct />} path="/all-products/:productid" />
      <Route element={<Login/>} path="/login"/>
      <Route element={<SignUp/>} path="/signup"/>
      <Route element={<CartPage/>} path="/cart"/>
    </Routes>
  );
}

export default App;
