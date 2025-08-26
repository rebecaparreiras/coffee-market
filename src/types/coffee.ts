export type Roast = "light" | "medium" | "dark";
export type Grind = "whole" | "ground";

export type Coffee = {
  id: string;
  name: string;
  origin: string;
  roast: Roast;
  notes: string[];
  price: number;
  rating: number;
  stock: number;
  images: string[];
  grindOptions: Grind[];
  tags?: string[];
};

export type ApiList<T> = {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
};

export type CartItem = {
  id: string;     
  name: string;
  price: number;
  qty: number;
  image?: string;
};
