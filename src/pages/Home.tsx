import Header from "../components/Header";
import FiltersBar from "../components/FiltersBar";
import ProductGrid from "../components/ProductGrid";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* topo fixo */}
      <Header />

      {/* corpo da página */}
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="flex gap-6">
          {/* barra lateral com filtros */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <FiltersBar />
          </aside>

          {/* área principal */}
          <section className="flex-1">
            <ProductGrid />
          </section>
        </div>
      </main>

      {/* drawer do carrinho (fica "fora do fluxo") */}
      <CartDrawer />
    </div>
  );
}
