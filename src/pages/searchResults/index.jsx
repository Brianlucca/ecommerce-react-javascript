import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { fetchSearch } from "../../service/searchProductsApi";

function SearchResults() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const query = params.get("q");
        setSearchTerm(query);

        const results = await fetchSearch(query);
        setSearchResults(results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar resultados da pesquisa:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <div className="bg-gray-300">
      <Header />
      <div className="mt-10 m-5 flex justify-center ">
        <p className="text-2xl font-semibold">{searchTerm.toUpperCase()}</p>
      </div>
      <div className="flex justify-center flex-wrap p-5 m-10 bg-white border rounded-xl">
        {loading ? (
          <p>Carregando resultados...</p>
        ) : (
          searchResults.map((result) => (
            <Link to={`/${result.title}/${result.id}`}>
              <div key={result.id} className="relative m-2">
                <div className="h-56 flex justify-center items-center rounded-md">
                  <img
                    src={result.thumbnail}
                    alt={result.title}
                    title={result.title}
                    className="w-32 h-auto object-cover"
                  />
                </div>
                {result.shipping.free_shipping === true && (
                  <div className="absolute top-0 left-0 bg-green-500 px-2 py-1 rounded-sm m-2">
                    <p className="text-xs font-medium text-white">
                      Frete Grátis
                    </p>
                  </div>
                )}
                <div className="p-2">
                  <p className="text-gray-800 font-semibold w-60">
                    {result.title}
                  </p>
                  <div className="mt-2">
                    <p className="text-gray-800 font-bold">{`R$ ${result.price}`}</p>
                    {result && result.installments && (
                      <p className="text-green-700 font-medium text-sm">{`em ${result.installments.quantity}x  R$ ${result.installments.amount}`}</p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SearchResults;
