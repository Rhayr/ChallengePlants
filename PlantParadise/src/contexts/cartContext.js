import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((i) => i.id === item.id);

      if (itemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[itemIndex].quantity += 1;
        return newCart;
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === id);
      if (itemIndex === -1) return prevCart;
      const newCart = [...prevCart];
      newCart[itemIndex].quantity += 1;
      return newCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === id);
      if (itemIndex === -1) return prevCart;
      if (prevCart[itemIndex].quantity > 1) {
        const newCart = [...prevCart];
        newCart[itemIndex].quantity -= 1;
        return newCart;
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
