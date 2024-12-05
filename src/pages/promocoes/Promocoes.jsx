const Promocoes = () => {
  const produtos = [
    {
      id: 1,
      nome: "Cadeira Dobrável",
      imagem: "https://via.placeholder.com/300",
      descricao: "Cadeira leve e confortável para eventos.",
      precoPromocional: 59.99,
      numeroContato: "5581912345678",
    },
    {
      id: 2,
      nome: "Mesa Redonda",
      imagem: "https://via.placeholder.com/300",
      descricao: "Mesa perfeita para festas e eventos.",
      precoPromocional: 120.0,
      numeroContato: "5581987654321",
    },
    {
      id: 3,
      nome: "Iluminação LED",
      imagem: "https://via.placeholder.com/300",
      descricao: "Iluminação profissional para eventos noturnos.",
      precoPromocional: 299.99,
      numeroContato: "5581998876655",
    },
    {
      id: 4,
      nome: "Kit Lembrancinhas",
      imagem: "https://via.placeholder.com/300",
      descricao: "Lembrancinhas personalizadas para festas.",
      precoPromocional: 79.99,
      numeroContato: "5581934567890",
    },
    {
      id: 5,
      nome: "Decoração de Balões",
      imagem: "https://via.placeholder.com/300",
      descricao: "Decorações com balões de alta qualidade.",
      precoPromocional: 149.99,
      numeroContato: "5581965432109",
    },
    {
      id: 6,
      nome: "Bolo Decorado",
      imagem: "https://via.placeholder.com/300",
      descricao: "Bolo temático decorado para festas.",
      precoPromocional: 199.99,
      numeroContato: "5581945678901",
    },
    {
      id: 7,
      nome: "Arranjos Florais",
      imagem: "https://via.placeholder.com/300",
      descricao: "Arranjos florais elegantes para decoração.",
      precoPromocional: 129.99,
      numeroContato: "5581923456789",
    },
    {
      id: 8,
      nome: "Painel Temático",
      imagem: "https://via.placeholder.com/300",
      descricao: "Painéis decorativos personalizados.",
      precoPromocional: 99.99,
      numeroContato: "5581911122233",
    },
    {
      id: 9,
      nome: "Som e Iluminação",
      imagem: "https://via.placeholder.com/300",
      descricao: "Equipamentos para som e luz de alta qualidade.",
      precoPromocional: 399.99,
      numeroContato: "5581900987654",
    },
    {
      id: 10,
      nome: "Serviço de Buffet",
      imagem: "https://via.placeholder.com/300",
      descricao: "Buffet completo para eventos e festas.",
      precoPromocional: 499.99,
      numeroContato: "5581944433221",
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
    backgroundColor: '#e53935',
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
      <h1 style={{ textAlign: 'center' }}>Promoções para sua Festa</h1>
      <div style={containerStyle}>
        {produtos.map((produto) => (
          <div key={produto.id} style={cardStyle}>
            <img src={produto.imagem} alt={produto.nome} style={imageStyle} />
            <div style={{ padding: '10px' }}>
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                R${produto.precoPromocional.toFixed(2)}
              </p>
              <button
                style={buttonStyle}
                onClick={() =>
                  window.open(`https://wa.me/${produto.numeroContato}`, '_blank')
                }
              >
                FALE CONOSCO
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promocoes;
