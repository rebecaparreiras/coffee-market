import type { Coffee } from "../types/coffee";
import useCart from "../hooks/useCart";

type Props = {
  coffee: Coffee;
};

const ProductCard = ({ coffee }: Props) => {
  const { add } = useCart();

  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <img 
        src={coffee.images[0]} 
        alt={coffee.name} 
        className="aspect-square w-full rounded-xl object-cover" 
      />

      <div className="mt-3">
        <h3 className="font-semibold">{coffee.name}</h3>
        <p className="text-sm text-gray-500">{coffee.origin} • {coffee.roast}</p>
        <p className="mt-1 font-medium">R$ {coffee.price.toFixed(2)}</p>
      </div>
      
      <button
        className="mt-3 w-full rounded-xl bg-coffee px-4 py-2 text-white hover:opacity-90"
        onClick={() => add({ id: coffee.id, name: coffee.name, price: coffee.price, qty: 1, image: coffee.images[0] })}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;