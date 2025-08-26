import { coffeesDb } from "../mocks/coffeesDb";
import type { ApiList } from "../types/coffee";
import type { Coffee, CartItem } from "../types/coffee";

const LATENCY_MS = 600;
const FAILURE_RATE = 0.08;

function simulate<T>(data: T): Promise<T> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() < FAILURE_RATE ? rej(new Error("Network error (mock)")) : res(structuredClone(data));
    }, LATENCY_MS);
  });
}

// in-memory cart
let cart: Record<string, CartItem> = {};

export async function getCoffees(params?: {
  q?: string;
  roast?: string[];
  origin?: string[];
  notes?: string[];
  sort?: "price_asc" | "price_desc" | "rating";
  page?: number;
  pageSize?: number;
}): Promise<ApiList<Coffee>> {
  const page = params?.page ?? 1;
  const pageSize = params?.pageSize ?? 12;

  let list = coffeesDb.slice();

  if (params?.q) {
    const q = params.q.toLowerCase();
    list = list.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.origin.toLowerCase().includes(q) ||
        c.notes.some(n => n.includes(q))
    );
  }
  if (params?.roast?.length) list = list.filter(c => params.roast!.includes(c.roast));
  if (params?.origin?.length) list = list.filter(c => params.origin!.includes(c.origin));
  if (params?.notes?.length) list = list.filter(c => params.notes!.some(n => c.notes.includes(n)));

  if (params?.sort === "price_asc") list.sort((a, b) => a.price - b.price);
  if (params?.sort === "price_desc") list.sort((a, b) => b.price - a.price);
  if (params?.sort === "rating") list.sort((a, b) => b.rating - a.rating);

  const total = list.length;
  const start = (page - 1) * pageSize;
  const data = list.slice(start, start + pageSize);

  return simulate({ data, page, pageSize, total });
}

export async function addToCart(item: CartItem) {
  const existing = cart[item.id];
  cart[item.id] = existing ? { ...existing, qty: existing.qty + item.qty } : item;
  return simulate({ ok: true, items: Object.values(cart) });
}
