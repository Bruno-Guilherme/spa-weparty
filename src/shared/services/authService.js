import axios from "axios";

const API_URL = "http://localhost:8000";

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Erro ao autenticar");
  }
};
