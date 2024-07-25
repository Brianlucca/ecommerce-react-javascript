import axios from "axios";

const baseURL = "https://api.mercadolibre.com";

const mercadoLivreApi = axios.create({
  baseURL,
});

export const fetchProducts = async () => {
  try {
    const response = await mercadoLivreApi.get("/sites/MLB/search?q=games");
    return response.data.results;
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
    return [];
  }
};
