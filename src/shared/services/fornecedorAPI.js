/* import Parse from "parse/dist/parse.min.js";

Parse.initialize(
  "NdRhReEWkw5qlw1rLVZ0q0ob0HE8TmMI06klzPt3",
  "VwKu5hsCgL74VzbndaO5V32FQhrSYua4SlrSpeWj"
);

async function saveNewUser() {
  const user = new Parse.User();
  user.set("username", "my name");
  user.set("password", "5991");
  user.set("email", "bubinho@email.com");

  try {
    const result = await user.signUp();
    console.log(result);
  } catch (error) {
    console.error("Error while creating user: ", error);
  }
}

saveNewUser(); */

import axios from 'axios';
import { baseURL } from './baseURL';


const url = baseURL('fornecedor');

export const getFornecedores = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Parse-Application-Id': 'NdRhReEWkw5qlw1rLVZ0q0ob0HE8TmMI06klzPt3',
        'X-Parse-REST-API-Key': 'r9aMDbTxqPaqlNHm7klC516ebZHeVS31QMrUPzxz'
      },
      params: {
        /* where: JSON.stringify({
          nome: 'A string',
          imagem_perfil: 'A string',
          banner: 'A string',
          descricao: 'A string',
          produtos: 'A string'
        }) */
      }
    });

    console.log(url)
    
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
