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
    
      return (
        <div>
          <h1>Promoções para sua Festa</h1>
          <ul>
            {produtos.map(produto => (
              <li key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
                <p style={{ textDecoration: 'line-through', color: 'red' }}>
                R${produto.precoOriginal}
                </p>
                <p>Agora por: R${produto.precoPromocional}</p>
                <p>Para contato: {produto.numeroContato}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
export default Promocoes;