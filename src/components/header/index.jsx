import { Heart, Search, ShoppingCart } from "lucide-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import { CartContext } from "../../context/cartContext";
import { FavoriteContext } from "../../context/favoriteContext";

function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { totalItems } = useContext(CartContext);
  const { favorites } = useContext(FavoriteContext);

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  const handleBuyNowClick = () => {
    setSearchTerm("maiôs");
    navigate(`/search?q=${encodeURIComponent("maiôs")}`);
  };

  const handleNavigateCart = () => {
    navigate(`/cartproducts`);
  };

  const handleNavigateFavorites = () => {
    navigate(`/favorites`);
  };

  return (
    <header className="bg-gray-800">
      <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <p>
            Venda de verão para todos os maiôs e entrega expressa gratuita - OFF
            50%!
            <span
              className="underline ml-2 cursor-pointer"
              onClick={handleBuyNowClick}
            >
              Compre Agora
            </span>
          </p>
        </div>
      </div>
      <nav className="bg-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4 sm:px-3 lg:px-8">
          <div className="flex items-center mb-3 md:mb-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-auto mr-6 cursor-pointer"
              onClick={() => navigate("/")}
            />
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="border border-gray-900 bg-gray-800 text-white w-full md:w-96 rounded-md py-2 px-3 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <Search
                className="absolute top-2 right-3 cursor-pointer text-blue-300 hover:text-blue-500"
                onClick={handleSearch}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="relative mr-6 cursor-pointer"
              onClick={handleNavigateFavorites}
            >
              <Heart className="text-blue-300 hover:text-blue-500" />
              {favorites.length > 0 && (
                <span className="absolute -top-2 left-3 bg-blue-800 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </div>
            <div
              className="relative cursor-pointer"
              onClick={handleNavigateCart}
            >
              <ShoppingCart className="text-blue-300 hover:text-blue-500" />
              {totalItems() > 0 && (
                <span className="absolute -top-2 left-3 bg-blue-800 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems()}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-gray-900 w-full h-1"></div>
    </header>
  );
}

export default Header;
