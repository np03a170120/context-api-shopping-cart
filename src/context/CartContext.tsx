import { ReactNode } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";
import { Products } from "../types/Products";

type CartContextProps = {
  children: ReactNode;
};

type CartContextType = {
  addToCart: (product: Products) => void;
  removeFromCart: (product: Products) => void;
  cartItems: Products[];
  cartQuantity: number;
  emptyCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  const addToCart = (product: Products) => {
    const isInTheCart = cartItems.find((item) => item.id === product.id);

    if (isInTheCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      return setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Products) => {
    const isInTheCart = cartItems.find((item) => item.id === product.id);
    if (isInTheCart?.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, emptyCart, cartQuantity, cartItems, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
