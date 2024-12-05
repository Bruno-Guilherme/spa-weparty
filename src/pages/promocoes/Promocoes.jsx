import React from 'react';

const Promocoes = () => {
    const produtos = [
        {
          id: 1,
          nome: "Decoração de Balões",
          imagem: "https://via.placeholder.com/250",
          descricao: "Decoração com balões para festas de todos os tipos.",
          precoOriginal: 500.00,
          precoPromocional: 399.00,
          numeroContato: "+55 81 91234-5678",
        },
        {
          id: 2,
          nome: "Kit Lembrancinhas Personalizadas",
          imagem: "https://via.placeholder.com/250",
          descricao: "Kit com 10 lembrancinhas personalizadas para convidados.",
          precoOriginal: 150.00,
          precoPromocional: 120.00,
          numeroContato: "+55 81 98765-4321",
        },
        {
          id: 3,
          nome: "Buffet Completo para Festas",
          imagem: "https://via.placeholder.com/250",
          descricao: "Buffet completo para festas com até 50 convidados.",
          precoOriginal: 2500.00,
          precoPromocional: 1999.00,
          numeroContato: "+55 81 99887-6655",
        },
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
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      };
    
      const buttonStyle = {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#25D366',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        marginTop: '10px',
      };
    
      return (
        <div>
          <h1 style={{ textAlign: 'center' }}>Promoções para sua Festa</h1>
          <div style={containerStyle}>
            {produtos.map((produto) => (
              <div key={produto.id} style={cardStyle}>
                <img src={produto.imagem} alt={produto.nome} style={{ width: '100%' }} />
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
                <p style={{ textDecoration: 'line-through', color: 'red' }}>
                  R${produto.precoOriginal}
                </p>
                <p style={{ fontWeight: 'bold' }}>Agora por: R${produto.precoPromocional}</p>
                <a
                  href={`https://wa.me/${produto.numeroContato}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={buttonStyle}
                >
                  Fale Conosco
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Promocoes;