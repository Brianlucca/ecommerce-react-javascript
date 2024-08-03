import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";

function PageNotFound() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-9xl font-extrabold text-gray-900 animate-bounce">
          404
        </h1>
        <p className="mt-4 text-2xl text-gray-700 font-bold animate-pulse">
          Página não encontrada
        </p>
        <Link
          to="/"
          className="mt-10 px-6 py-3 bg-gray-500 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Retorne ao início
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default PageNotFound;
