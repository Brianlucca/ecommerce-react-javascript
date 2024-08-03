import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../service/productsApi";
import Carousel from "../carousel";

function LightningProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsData = await fetchProducts(null);
        setProducts(productsData.slice(0, 10));
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <section aria-labelledby="lightning-deals">
      <header className="ml-12 pr-1 mt-10">
        <h2
          id="lightning-deals"
          className="text-base mb-3 text-gray-800 font-semibold"
        >
          Promoção
        </h2>
        <p className="text-4xl font-bold text-gray-800">Promoção Relâmpago</p>
      </header>
      <div className="flex justify-center p-5 m-10 shadow-sm bg-white border rounded-xl">
        <Carousel>
          {products.map((product) => (
            <article key={product.id} className="flex justify-center p-4">
              <Link
                to={`/${product.title}/${product.id}`}
                className="block w-full"
              >
                <div className="relative rounded-md shadow-md p-4 m-5">
                  <div className="h-56 flex justify-center items-center rounded-md mb-4">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      title={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {product.shipping &&
                    product.shipping.free_shipping === true && (
                      <div className="absolute top-0 left-0 bg-green-500 px-2 py-1 rounded-sm m-2">
                        <p className="text-xs font-medium text-white">
                          Frete Grátis
                        </p>
                      </div>
                    )}
                  <div className="p-2 text-center">
                    <h3 className="text-gray-700 font-semibold">
                      {product.title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-gray-800 font-bold">{`R$ ${product.price}`}</p>
                      {product.installments && (
                        <p className="text-green-700 font-medium text-sm">{`em ${product.installments.quantity}x R$ ${product.installments.amount}`}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default LightningProducts;
