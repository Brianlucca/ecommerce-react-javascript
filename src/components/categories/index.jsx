import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../service/categoriesApi";
import { renderIconByName } from "../../utils/icons";

function Categories() {
  const [categorias, setCategorias] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const allCategories = await fetchCategories();
        const filteredCategories = allCategories.filter(
          (categoria) =>
            categoria.name !== "Serviços" &&
            categoria.name !== "Mais Categorias",
        );
        setCategorias(filteredCategories.slice(0, 6));
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategorias();
  }, []);

  const handleCategories = async (categoryName) => {
    navigate(`/search?q=${encodeURIComponent(categoryName)}`);
  };

  const handleViewMoreClick = async () => {
    try {
      const allCategories = await fetchCategories();
      const filteredCategories = allCategories.filter(
        (categoria) =>
          categoria.name !== "Serviços" && categoria.name !== "Mais Categorias",
      );
      setCategorias(filteredCategories);
      setShowAll(true);
    } catch (error) {
      console.error("Erro ao buscar mais categorias:", error);
    }
  };

  const handleViewLessClick = () => {
    const filteredCategories = categorias.slice(0, 6);
    setCategorias(filteredCategories);
    setShowAll(false);
  };

  return (
    <section aria-labelledby="categories-title">
      <header className="ml-12 pr-1 mt-10">
        <h2
          id="categories-title"
          className="text-base mb-3 text-gray-800 font-semibold"
        >
          Categorias
        </h2>
        <p className="text-4xl font-bold text-gray-800">
          Buscar Por Categorias
        </p>
      </header>
      <ul className="flex justify-center m-5 p-3 flex-wrap">
        {categorias.map((categoria) => (
          <li
            key={categoria.id}
            onClick={() => handleCategories(categoria.name)}
            className="border border-slate-500 rounded-lg p-4 flex flex-col items-center justify-center m-2 text-center w-44 hover:bg-gray-500 hover:text-white text-gray-800 cursor-pointer"
            role="button"
            aria-label={`Buscar por ${categoria.name}`}
          >
            {renderIconByName(categoria.name)}
            <span className="mt-2 font-semibold">{categoria.name}</span>
          </li>
        ))}
      </ul>
      {!showAll ? (
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            onClick={handleViewMoreClick}
            aria-label="Ver mais categorias"
          >
            Ver Mais Categorias
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            onClick={handleViewLessClick}
            aria-label="Ver menos categorias"
          >
            Ver Menos Categorias
          </button>
        </div>
      )}
    </section>
  );
}

export default Categories;
