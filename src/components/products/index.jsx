import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../service/productsApi";

function Products() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData.slice(0, 20));
    };

    fetchAndSetProducts();

    const intervalId = setInterval(fetchAndSetProducts, 604800000);

    return () => clearInterval(intervalId);
  }, []);

  const handleViewMoreClick = async () => {
    const productsData = await fetchProducts();
    setProducts(productsData);
    setShowAll(true);
  };

  const handleViewLessClick = () => {
    const slicedProducts = products.slice(0, 20);
    setProducts(slicedProducts);
    setShowAll(false);
  };

  return (
    <section aria-labelledby="products-title">
      <header className="mt-10 m-5 flex justify-center">
        <h2 id="products-title" className="text-4xl font-bold text-gray-800">
          Explore Nossos Produtos
        </h2>
      </header>
      <div
        className="flex justify-center flex-wrap p-5 m-10 shadow-sm bg-white border rounded-xl"
        role="list"
        aria-label="Lista de produtos"
      >
        {products.map((product) => (
          <Link
            to={`/${product.title}/${product.id}`}
            key={product.id}
            role="listitem"
          >
            <article className="relative m-2">
              <div className="h-56 flex justify-center items-center rounded-md">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  title={product.title}
                  className="w-32 h-auto object-cover"
                />
              </div>
              {product.shipping?.free_shipping && (
                <div className="absolute top-0 left-0 bg-green-500 px-2 py-1 rounded-sm m-2">
                  <p className="text-xs font-medium text-white">Frete Grátis</p>
                </div>
              )}
              <div className="p-2">
                <h3 className="text-gray-800 font-semibold w-60">
                  {product.title}
                </h3>
                <div className="mt-2">
                  <p className="text-gray-800 font-bold">{`R$ ${product.price}`}</p>
                  {product.installments && (
                    <p className="text-green-700 font-medium text-sm">{`em ${product.installments.quantity}x R$ ${product.installments.amount}`}</p>
                  )}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {showAll ? (
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-5"
            onClick={handleViewLessClick}
            aria-label="Ver menos produtos"
          >
            Ver Menos Produtos
          </button>
        ) : (
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-10"
            onClick={handleViewMoreClick}
            aria-label="Ver mais produtos"
          >
            Ver Mais Produtos
          </button>
        )}
      </div>
    </section>
  );
}

export default Products;
