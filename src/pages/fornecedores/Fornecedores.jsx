import React from 'react';
import FornecedorCard from '../fornecedores/FornecedorCard';

const fornecedores = [
  {
    id: 1,
    nome: "Aniel Flores",
    descricao: "Flores e Decorações",
    telefone: "81 99999-9999",
    imagem: "https://via.placeholder.com/150",
    numeroContato: "81 99999-9999",
  },
  {
    id: 2,
    nome: "RC Presentes",
    descricao: "Personalizados",
    telefone: "81 98888-8888",
    imagem: "https://via.placeholder.com/150",
    numeroContato: "81 98888-8888",
  },
  {
    id: 3,
    nome: "MD Store",
    descricao: "Multimarcas",
    telefone: "81 97777-7777",
    imagem: "https://via.placeholder.com/150",
    numeroContato: "81 97777-7777",
  },
  {
    id: 4,
    nome: "De Coração",
    descricao: "Buffet e Comidas",
    telefone: "81 96666-6666",
    imagem: "https://via.placeholder.com/150",
    numeroContato: "81 96666-6666",
  },
  {
    id: 5,
    nome: "Festa & Cia",
    descricao: "Decoração e Acessórios",
    telefone: "81 95555-5555",
    imagem: "https://via.placeholder.com/150",
    numeroContato: "81 95555-5555",
  },
  {
    id: 6,
    nome: "Bolo Decorado",
    descricao: "Bolos e Doces",
    telefone: "81 94444-4444",
    imagem: "https://via.placeholder.com/150",
    numeroContato: "81 94444-4444",
  },
];

const Fornecedores = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'left', padding: '20px 0', fontSize: '2rem' }}>Fornecedores</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '0 20px',
      }}>
        {fornecedores.map((fornecedor) => (
          <div
            key={fornecedor.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              padding: '10px',
            }}
          >
            <img
              src={fornecedor.imagem}
              alt={fornecedor.nome}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <h2>{fornecedor.nome}</h2>
            <p>{fornecedor.descricao}</p>
            <button
              style={{
                backgroundColor: '#25d366',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => window.open(`https://wa.me/55${fornecedor.numeroContato}`, '_blank')}
            >
              Fale Conosco
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fornecedores;