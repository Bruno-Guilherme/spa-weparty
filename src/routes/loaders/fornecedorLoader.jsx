import { getFornecedores } from "../../shared/services/fornecedorAPI";

export async function fornecedorLoader () {
    return await getFornecedores();
}