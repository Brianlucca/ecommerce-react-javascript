import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { CartContext } from "../../context/cartContext";

function CartProducts() {
  const { cart, updateCart, totalItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      const newCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      );
      updateCart(newCart);
    }
  };

  const handleRemoveProduct = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    updateCart(newCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleNavigateProducts = () => {
    navigate("/");
  };

  const isLoggedin = localStorage.getItem("login") === "true";
  useEffect(() => {
    if (!isLoggedin) {
      navigate("/signup");
    }
  }, [isLoggedin, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        {cart.length > 0 ? (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Carrinho de Compras
            </h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 mb-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
              >
                <img
                  src={item.pictures[0].url}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md mr-0 md:mr-4 mb-4 md:mb-0"
                />
                <div className="flex-grow text-center md:text-left">
                  <Link to={`/${item.title}/${item.id}`}>
                    <h3 className="text-xl font-semibold text-gray-800 hover:underline">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-gray-800 font-bold">R$ {item.price}</p>
                  <div className="flex items-center justify-center md:justify-start mt-2">
                    <button
                      className="bg-gray-700 hover:bg-gray-800 text-white px-2 py-1 rounded-l"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="bg-gray-700 hover:bg-gray-800 text-white px-2 py-1 rounded-r"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 text-gray-700 font-semibold">
                    Subtotal: R$ {item.price * item.quantity}
                  </p>
                </div>
                <button
                  className="bg-gray-500 text-white px-2 py-1 ml-0 md:ml-4 mt-4 md:mt-0 rounded"
                  onClick={() => handleRemoveProduct(item.id)}
                >
                  Excluir
                </button>
              </div>
            ))}
            <div className="bg-white p-4 mt-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-lg text-gray-800 font-semibold">
                  Total de produtos: {totalItems()}
                </p>
                <p className="text-xl font-bold text-gray-900">
                  Valor total: R$ {calculateSubtotal()}
                </p>
              </div>
              <div className="flex flex-col md:flex-row">
                <button
                  className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 md:mr-2"
                  onClick={handleNavigateProducts}
                >
                  Retornar às Compras
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                  Ir para Pagamento
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Nenhum produto no carrinho
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CartProducts;
