import React from "react";
import useCartStore from "../../shared/contexts/carrinhoContext";

const products = [
  { id: 1, name: "Produto 1", price: 10 },
  { id: 2, name: "Produto 2", price: 20 },
  { id: 3, name: "Produto 3", price: 30 },
];

const ProductList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Preço: R${product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
