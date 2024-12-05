import React from 'react';

const FornecedorCard = ({ imagem, nome, descricao, telefone }) => {
    return (
      <div
        style={{
          margin: '10px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          width: '200px',
          padding: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}
      >
        <img
          src={imagem}
          alt={nome}
          style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
        <h2>{nome}</h2>
        <p>{descricao}</p>
        <p>{telefone}</p>
      </div>
    );
  };
  
  export default FornecedorCard;