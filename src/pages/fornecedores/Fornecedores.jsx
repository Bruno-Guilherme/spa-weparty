import React from 'react';
//import FornecedorCard from '../fornecedores/FornecedorCard';

const fornecedores = [
  {
    id: 1,
    nome: "Aniel Flores",
    descricao: "Flores e Decorações",
    telefone: "81 99999-9999",
    imagem: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    nome: "RC Presentes",
    descricao: "Personalizados",
    telefone: "81 98888-8888",
    imagem: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    nome: "MD Store",
    descricao: "Multimarcas",
    telefone: "81 97777-7777",
    imagem: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    nome: "De Coração",
    descricao: "Buffet e Comidas",
    telefone: "81 96666-6666",
    imagem: "https://via.placeholder.com/150"
  }
];

const Fornecedores = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'left' }}>Fornecedores</h1>
      <div>
        {fornecedores.map((fornecedor) => (
          <div key={fornecedor.id} style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <img src={fornecedor.imagem} alt={fornecedor.nome} style={{ width: '150px', height: '150px' }} />
            <h2>{fornecedor.nome}</h2>
            <p>{fornecedor.descricao}</p>
            <p>{fornecedor.telefone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fornecedores;