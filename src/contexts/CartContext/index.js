import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleAddItemToCart(id, name) {
    const exist = cart.find((name) => name);

    if (exist) {
      const itemObject = { id, name, qty: exist.qty + 1 };
      setCart([...cart, itemObject]);
    } else {
      const itemObject = { id, name, qty: 1 };
      setCart([...cart, itemObject]);
    }
  }

  function handleRemoveItemFromCart(clickedItemIndex) {
    const filteredCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, handleAddItemToCart, handleRemoveItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
