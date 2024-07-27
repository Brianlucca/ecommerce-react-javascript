import { Heart, HeartCrack, Share2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import LightningProducts from "../../components/lightningProducts";
import { CartContext } from "../../context/cartContext";
import { FavoriteContext } from "../../context/favoriteContext";
import { fetchProductDetailsById } from "../../service/detailsProductsApi";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState("");
  const { addToCart } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(FavoriteContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchProductDetailsById(id);
        setProduct(productData);
        if (productData.pictures && productData.pictures.length > 0) {
          setCurrentImage(productData.pictures[0].url);
        }
      } catch (error) {
        console.error("Erro ao carregar detalhes do produto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/cartproducts");
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(product.id);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          image: currentImage,
          text:`${currentImage} Confira este produto na codex space: ${product.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Erro ao compartilhar o produto:", error);
      }
    }
  };

  const isFavorite = favorites.some((item) => item.id === product?.id);

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-gray-600">Carregando...</p>
        ) : product ? (
          <div className="flex flex-col lg:flex-row items-start gap-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="lg:w-1/2 flex flex-col items-center">
              <div className="w-full flex justify-center">
                <img
                  className="max-w-full h-96 object-contain rounded-md"
                  src={currentImage}
                  alt={product.title}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {product.pictures &&
                  product.pictures.map((pic, index) => (
                    <img
                      key={index}
                      className="w-20 h-20 object-cover cursor-pointer rounded-md"
                      src={pic.url}
                      alt={`Imagem ${index + 1}`}
                      onClick={() => setCurrentImage(pic.url)}
                    />
                  ))}
              </div>
            </div>
            <div className="lg:w-1/2 flex-wrap">
              <h2 className="text-2xl  lg:text-3xl font-semibold mb-4 text-gray-800">
                {product.title}
              </h2>
              <div>
                <p className="text-2xl mb-4 text-gray-800 font-bold">
                  R$ {product.price}
                </p>
              </div>
              {product.initial_quantity && (
                <p className="text-green-700 font-medium text-sm mb-2">{`Em estoque: ${product.initial_quantity} produtos`}</p>
              )}
              <p className="text-sm mb-4 text-gray-600">
                {product.warranty || "Garantia não informada"}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <button
                  className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-l"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="py-2 px-4 border-t border-b border-gray-300">
                  {quantity}
                </span>
                <button
                  className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-r"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
                <div className="flex items-center gap-4 ml-4">
                  <button
                    className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-1 text-xs rounded lg:px-4 lg:py-2 lg:text-base"
                    onClick={handleBuyNow}
                  >
                    Comprar agora
                  </button>
                  {isFavorite ? (
                    <HeartCrack
                      className="ml-2 text-gray-600 cursor-pointer hover:text-red-800 w-10 lg:w-6 lg:h-6 md:w-8 md:h-8"
                      onClick={handleRemoveFromFavorites}
                    />
                  ) : (
                    <Heart
                      className="ml-2 text-gray-600 cursor-pointer hover:text-red-800 w-10 lg:w-6 lg:h-6 md:w-8 md:h-8"
                      onClick={handleAddToFavorites}
                    />
                  )}
                  <Share2
                    className="cursor-pointer text-gray-600 hover:text-red-800"
                    onClick={handleShare}
                  />
                </div>
              </div>
              {product.shipping && product.shipping.free_shipping && (
                <div className="bg-green-500 text-white text-xs font-medium rounded-sm px-3 py-1 mt-4 inline-block">
                  Frete Grátis
                </div>
              )}
              <div className="justify-center border border-gray-100 max-h-48 overflow-y-auto whitespace-normal p-4 mt-4 rounded-lg shadow-lg bg-gray-50">
                <p className="font-medium mb-2 text-gray-800">
                  O que você precisa saber sobre o produto:
                </p>
                {product.attributes && product.attributes.length > 0 && (
                  <ul className="space-y-1">
                    {product.attributes.map((attribute, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        <strong>{attribute.name}:</strong>
                        <p className="break-words word-break break-all overflow-wrap overflow-hidden">
                          {attribute.value_name}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Produto não encontrado</p>
        )}
      </div>
      <LightningProducts />
      <Footer />
    </div>
  );
}

export default ProductDetails;
