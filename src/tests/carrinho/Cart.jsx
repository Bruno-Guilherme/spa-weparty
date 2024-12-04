import React from "react";
import useCartStore from "../../shared/contexts/carrinhoContext";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x R${item.price} = R${item.price * item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R${total}</h3>
      {cart.length > 0 && <button onClick={clearCart}>Limpar Carrinho</button>}
    </div>
  );
};

export default Cart;
