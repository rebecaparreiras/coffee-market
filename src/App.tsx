import { CartProvider } from "./hooks/useCart";

import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

