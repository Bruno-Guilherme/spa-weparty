// useCartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
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
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),
  clearCart: () => set({ cart: [] }),
  getTotalItems: () => {
    return (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}));

export default useCartStore;
