import axios from "axios";

const baseURL = "https://api.mercadolibre.com";

const mercadoLivreApi = axios.create({
  baseURL,
});

export const fetchSearch = async (searchTerm) => {
  try {
    const response = await mercadoLivreApi.get(`/sites/MLB/search?q=${searchTerm}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
