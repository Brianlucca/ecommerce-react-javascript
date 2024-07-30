import axios from "axios";
import { generateRandomName } from "../../utils/randomNames"; 

const baseURL = "https://api.mercadolibre.com";

const mercadoLivreApi = axios.create({
  baseURL,
});

export const fetchProducts = async () => {
  const randomName = generateRandomName();
  try {
    const response = await mercadoLivreApi.get(`/sites/MLB/search?q=${randomName}`);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
    return [];
  }
};
