import React, { createContext, useContext, useReducer } from 'react';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

interface CartContextType {
  state: CartState;
  addToCart: (product: Product, color: string, quantity?: number) => void;
  removeFromCart: (productId: string, color: string) => void;
  updateQuantity: (productId: string, color: string, quantity: number) => void;
  clearCart: () => void;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: { product: Product; color: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; color: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; color: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, color, quantity } = action.payload;
      const existingItem = state.items.find(
        item => item.product.id === product.id && item.selectedColor === color
      );

      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === product.id && item.selectedColor === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        };
      }

      const newItems = [...state.items, { product, selectedColor: color, quantity }];
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        item => !(item.product.id === action.payload.productId && item.selectedColor === action.payload.color)
      );
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, color, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { productId, color } });
      }

      const updatedItems = state.items.map(item =>
        item.product.id === productId && item.selectedColor === color
          ? { ...item, quantity }
          : item
      );
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addToCart = (product: Product, color: string, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, color, quantity } });
  };

  const removeFromCart = (productId: string, color: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, color } });
  };

  const updateQuantity = (productId: string, color: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, color, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = {
    state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};