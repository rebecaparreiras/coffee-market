import React, { createContext, useContext, useMemo, useState } from "react";
import type { CartItem } from "../types/coffee";
import { addToCart as apiAdd } from "../lib/mockApi";

type CartCtx = {
  items: CartItem[];
  add: (item: CartItem) => Promise<void>;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  async function add(item: CartItem) {
    const res = await apiAdd(item);
    setItems(res.items);
  }

  const subtotal = useMemo(() => items.reduce((acc, i) => acc + i.price * i.qty, 0), [items]);

  return <Ctx.Provider value={{ items, add, subtotal }}>{children}</Ctx.Provider>;
}

export default function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
