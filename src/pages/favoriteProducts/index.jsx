import { HeartCrack } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { FavoriteContext } from "../../context/favoriteContext";

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoriteContext);

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        {favorites.length > 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Produtos Favoritos
            </h2>
            <div className="space-y-4">
              {favorites.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm"
                >
                  <div className="flex items-center mb-4 md:mb-0">
                    <img
                      className="w-16 h-16 object-cover rounded-md"
                      src={product.pictures[0]?.url || "default-image.jpg"}
                      alt={product.title}
                    />
                    <Link to={`/${product.title}/${product.id}`}>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800 hover:underline">
                          {product.title}
                        </h3>
                        <p className="text-gray-600">R$ {product.price}</p>
                      </div>
                    </Link>
                  </div>
                  <HeartCrack
                    className="text-gray-600 cursor-pointer hover:text-red-800"
                    onClick={() => removeFromFavorites(product.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Nenhum produto favoritado</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Favorites;
