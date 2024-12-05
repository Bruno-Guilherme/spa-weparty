import React from 'react';

const Promocoes = () => {
    const produtos = [
        {
          id: 1,
          nome: "Decoração de Balões",
          descricao: "Decoração com balões para festas de todos os tipos.",
        },
        {
          id: 2,
          nome: "Kit Lembrancinhas Personalizadas",
          descricao: "Kit com 10 lembrancinhas personalizadas para convidados.",
        },
        {
          id: 3,
          nome: "Buffet Completo para Festas",
          descricao: "Buffet completo para festas com até 50 convidados.",
        },
      ];
    
      return (
        <div>
          <h1>Promoções para sua Festa</h1>
          <ul>
            {produtos.map(produto => (
              <li key={produto.id}>
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
export default Promocoes;