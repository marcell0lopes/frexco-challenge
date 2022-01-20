import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const notifySuccess = (string) => toast.success(string);
  const notifyWarning = (string) => toast.warn(string);

  function handleAddItemToCart(item) {
    const newCart = cart;

    item.qty = 1;
    newCart.push(item);
    setCart([...newCart]);
    notifySuccess(`${item.name} added to cart`);
  }

  function sumItemQty(item) {
    const newCart = cart;
    item.qty++;
    setCart([...newCart]);
    notifySuccess(`Added one ${item.name} to cart`);
  }

  function handleRemoveItemFromCart(item) {
    let newCart = cart;
    const exist = newCart.find((i) => i.id === item.id);
    if (exist.qty > 1) {
      exist.qty = exist.qty - 1;
      setCart([...newCart]);
    } else {
      newCart = cart.filter((i) => i !== item);
      setCart([...newCart]);
    }
    notifyWarning(`Removed one ${item.name}`);
  }

  function clearCart() {
    setCart([]);
    notifyWarning('Shopping Cart is now empty');
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        clearCart,
        sumItemQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
