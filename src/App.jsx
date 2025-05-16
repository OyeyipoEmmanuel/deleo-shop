import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPg/Page";
import AllProducts from "./pages/allProducts/AllProducts";
import EachProduct from "./pages/eachProductPreview/EachProduct";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route element={<AllProducts />} path="/all-products"></Route>
      <Route element={<EachProduct />} path="/all-products/:productid" />
    </Routes>
  );
}

export default App;
