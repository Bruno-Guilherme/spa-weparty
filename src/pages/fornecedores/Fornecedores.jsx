import React from 'react';
import FornecedorCard from '../fornecedores/FornecedorCard';

const Fornecedores = () => {
  const fornecedores = [
    {
      id: 1,
      nome: "Cadeira Dobrável",
      imagem: "https://via.placeholder.com/300",
      descricao: "Cadeira leve e confortável para eventos.",
      numeroContato: "5581912345678",
    },
    {
      id: 2,
      nome: "Mesa Redonda",
      imagem: "https://via.placeholder.com/300",
      descricao: "Mesa perfeita para festas e eventos.",
      numeroContato: "5581987654321",
    },
    {
      id: 3,
      nome: "Iluminação LED",
      imagem: "https://via.placeholder.com/300",
      descricao: "Iluminação profissional para eventos noturnos.",
      numeroContato: "5581998876655",
    },
    {
      id: 4,
      nome: "Kit Lembrancinhas",
      imagem: "https://via.placeholder.com/300",
      descricao: "Lembrancinhas personalizadas para festas.",
      numeroContato: "5581934567890",
    },
    // Adicione mais fornecedores conforme necessário
  ];

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    backgroundColor: '#f0f0f0',
  };

  const buttonStyle = {
    backgroundColor: '#e53935',  // Cor do botão vermelha igual à de promoções
    color: '#fff',
    border: 'none',
    padding: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '90%',
    margin: '10px 0',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'left', marginBottom: '1px' }}>Fornecedores</h1>
      <div style={containerStyle}>
        {fornecedores.map((fornecedor) => (
          <div key={fornecedor.id} style={cardStyle}>
            <img
              src={fornecedor.imagem}
              alt={fornecedor.nome}
              style={imageStyle}
            />
            <div style={{ padding: '10px' }}>
              <h3>{fornecedor.nome}</h3>
              <p>{fornecedor.descricao}</p>
              <button
                style={buttonStyle}
                onClick={() =>
                  window.open(`https://wa.me/55${fornecedor.numeroContato}`, '_blank')
                }
              >
                Fale Conosco
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fornecedores;