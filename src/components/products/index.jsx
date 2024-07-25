import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../service/productsApi";

function Products() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsData = await fetchProducts(null);
        setProducts(productsData.slice(0, 20));
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProductsData();
  }, []);

  const handleViewMoreClick = async () => {
    const productsData = await fetchProducts(null);
    setProducts(productsData);
    setShowAll(true);
  };

  const handleViewLessClick = () => {
    const slicedProducts = products.slice(0, 20);
    setProducts(slicedProducts);
    setShowAll(false);
  };

  return (
    <div>
      <div className="mt-10 m-5 flex justify-center">
        <p className="text-4xl font-bold text-gray-800 ">Explore Nossos Produtos</p>
      </div>
      <div className="flex justify-center flex-wrap p-5 m-10 shadow-sm bg-white border rounded-xl">
        {products.map((product) => (
          <Link to={`/${product.title}/${product.id}`}>
            <div key={product.id} className="relative m-2">
              <div className="h-56 flex justify-center items-center rounded-md">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  title={product.title}
                  className="w-32 h-auto object-cover"
                />
              </div>
              {product.shipping.free_shipping === true && (
                <div className="absolute top-0 left-0 bg-green-500 px-2 py-1 rounded-sm m-2">
                  <p className="text-xs font-medium text-white">Frete Grátis</p>
                </div>
              )}
              <div className="p-2">
                <p className="text-gray-800 font-semibold w-60 ">
                  {product.title}
                </p>
                <div className="mt-2">
                  <p className="text-gray-800 font-bold">{`R$ ${product.price}`}</p>
                  {product && product.installments && (
                    <p className="text-green-700 font-medium text-sm">{`em ${product.installments.quantity}x  R$ ${product.installments.amount}`}</p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {!showAll && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-10"
            onClick={handleViewMoreClick}
          >
            Ver Mais Produtos
          </button>
        </div>
      )}
      {showAll && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-5"
            onClick={handleViewLessClick}
          >
            Ver Menos Produtos
          </button>
        </div>
      )}
    </div>
  );
}

export default Products;
