import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const registerService = async (
  nome,
  email,
  telefone,
  endereco,
  cpf,
  senha
) => {
  try {
    const response = await axios.post(
      `${API_URL}contratante/`,
      {
        nome,
        email,
        telefone,
        endereco,
        cpf,
        senha,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Erro ao registrar");
  }
};
