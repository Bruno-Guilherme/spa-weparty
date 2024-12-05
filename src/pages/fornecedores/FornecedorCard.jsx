import React from 'react';

const FornecedorCard = ({ imagem, nome, descricao, numeroContato }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '10px',
      }}
    >
      <img
        src={imagem}
        alt={nome}
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
      />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <button
        style={{
          backgroundColor: '#25d366',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => window.open(`https://wa.me/55${numeroContato}`, '_blank')}
      >
        Fale Conosco
      </button>
    </div>
  );
};

export default FornecedorCard;