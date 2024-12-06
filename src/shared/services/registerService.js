import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/";

export const registerService = async (
  nome,
  email,
  telefone,
  endereco,
  cpf,
  password
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
        password,
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
