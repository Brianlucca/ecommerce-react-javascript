
import axios from "axios";

const baseURL = "https://api.mercadolibre.com";

const mercadoLivreApi = axios.create({
  baseURL,
});

export const fetchCategories = async () => {
  try {
    const response = await mercadoLivreApi.get("/sites/MLB/categories");
    return response.data;
  } catch (error) {
    console.error("Erro ao obter categorias:", error);
    return [];
  }
};
