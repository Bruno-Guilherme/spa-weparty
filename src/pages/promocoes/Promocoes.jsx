import React from 'react';

const Promocoes = () => {
    const produtos = [
        {
          id: 1,
          nome: "Decoração de Balões",
          imagem: "https://via.placeholder.com/250",
          descricao: "Decoração com balões para festas de todos os tipos.",
        },
        {
          id: 2,
          nome: "Kit Lembrancinhas Personalizadas",
          imagem: "https://via.placeholder.com/250",
          descricao: "Kit com 10 lembrancinhas personalizadas para convidados.",
        },
        {
          id: 3,
          nome: "Buffet Completo para Festas",
          imagem: "https://via.placeholder.com/250",
          descricao: "Buffet completo para festas com até 50 convidados.",
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
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
export default Promocoes;