import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../components/pageNotFound";
import SearchResults from "../pages/searchResults"; 
import HomePage from "../pages/homePage";
import SignUp from "../pages/signUp";
import ProductDetails from "../pages/productDetails";
import CartProducts from "../pages/cartProducts";
import FavoriteProducts from "../pages/favoriteProducts";

function RenderRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:title/:id" element={<ProductDetails />} />
        <Route path="/cartproducts" element={<CartProducts />} />
        <Route path="/favorites" element={<FavoriteProducts />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RenderRoutes;
