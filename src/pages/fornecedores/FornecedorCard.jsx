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
          backgroundColor: '#FF4D4D', // Vermelho igual ao botão de promoções
          color: '#fff',
          border: 'none',
          padding: '12px 30px',  // Tamanho do botão
          borderRadius: '4px',
          fontSize: '1rem',  // Tamanho da fonte
          fontWeight: 'bold',  // Fonte mais pesada
          cursor: 'pointer',
          marginTop: '10px',  // Distância do texto
          textTransform: 'uppercase',  // Letras maiúsculas
        }}
        onClick={() => window.open(`https://wa.me/55${numeroContato}`, '_blank')}
      >
        Fale Conosco
      </button>
    </div>
  );
};

export default FornecedorCard;