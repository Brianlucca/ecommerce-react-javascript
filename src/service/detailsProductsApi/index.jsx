import axios from "axios";

const baseURL = "https://api.mercadolibre.com";

const mercadoLivreApi = axios.create({
  baseURL,
});

export const fetchProductDetailsById = async (id) => {
  try {
    const response = await mercadoLivreApi.get(`/items/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter produto:", error);
    return null;
  }
};
