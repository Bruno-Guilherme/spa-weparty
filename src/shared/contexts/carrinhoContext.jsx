// useCartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  
  // Adicionar um item ao carrinho
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    }),

  // Remover item do carrinho
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),

  // Limpar todo o carrinho
  clearCart: () => set({ cart: [] }),

  // Atualizar a quantidade de um item
  updateQuantity: (itemId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, quantity) } // Garante que a quantidade mínima seja 1
          : item
      ),
    })),

  // Obter o total de itens no carrinho
  getTotalItems: () => {
    return (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0);
  },
}));

export default useCartStore;
