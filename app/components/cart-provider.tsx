"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  img: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  total: number;
  openMiniCart: boolean;
  setOpenMiniCart: (value: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [openMiniCart, setOpenMiniCart] = useState(false);

  function addToCart(item: CartItem) {
    setItems((current) => {
      const existing = current.find((x) => x.id === item.id);

      if (existing) {
        return current.map((x) =>
          x.id === item.id
            ? {
                ...x,
                quantity: x.quantity + 1,
              }
            : x,
        );
      }

      return [
        ...current,
        {
          ...item,
          quantity: 1,
        },
      ];
    });

    setOpenMiniCart(true);
  }

  function removeFromCart(id: string) {
    setItems(items.filter((x) => x.id !== id));
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        total,
        openMiniCart,
        setOpenMiniCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) throw new Error("useCart must be inside CartProvider");

  return ctx;
}
