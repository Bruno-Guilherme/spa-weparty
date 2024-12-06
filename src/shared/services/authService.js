import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginService = async (email, senha) => {
  try {
    const response = await axios.post(
      `${API_URL}contratante/login`,
      { email, senha },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Erro ao autenticar");
  }
};
