import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleAddItemToCart(item) {
    const newCart = cart;
    let itemInCart = newCart.find((i) => i.id === item.id);

    if (!itemInCart) {
      item.qty = 1;
      newCart.push(item);
      setCart([...newCart]);
    } else {
      itemInCart.qty++;
      setCart([...newCart, { ...itemInCart, qty: itemInCart.qty++ }]);
    }
    console.log(cart);
  }

  function handleRemoveItemFromCart(item) {
    let newCart = cart;
    const exist = newCart.find((item) => item);
    if (exist.qty > 1) {
      exist.qty = exist.qty - 1;
      setCart([...newCart]);
    } else {
      newCart = cart.filter((i) => i !== item);
      setCart([...newCart]);
    }
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
