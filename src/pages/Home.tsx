import Header from "../components/Header";
import FiltersBar from "../components/FiltersBar";
import ProductGrid from "../components/ProductGrid";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="flex gap-6">
          <aside className="hidden w-64 shrink-0 lg:block">
            {/* <FiltersBar /> */}
          </aside>

          <section className="flex-1">
            {/* <ProductGrid /> */}
          </section>
        </div>
      </main>

      {/* <CartDrawer /> */}
    </div>
  );
}
