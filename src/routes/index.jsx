import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../components/pageNotFound";
import ScrollToTop from "../components/scrollToTop";
import CartProducts from "../pages/cartProducts";
import FavoriteProducts from "../pages/favoriteProducts";
import HomePage from "../pages/homePage";
import ProductDetails from "../pages/productDetails";
import SearchResults from "../pages/searchResults";
import SignUp from "../pages/signUp";
import SignIn from "../pages/signIn";

function RenderRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:title/:id" element={<ProductDetails />} />
        <Route path="/cartproducts" element={<CartProducts />} />
        <Route path="/favorites" element={<FavoriteProducts />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RenderRoutes;
