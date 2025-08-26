import type { Coffee } from "../types/coffee";

export const coffeesDb: Coffee[] = [
  {
    id: "ethiopia-yirg",
    name: "Ethiopia Yirgacheffe",
    origin: "Ethiopia",
    roast: "light",
    notes: ["floral", "citrus"],
    price: 72.9,
    rating: 4.7,
    stock: 14,
    images: ["/img/ethiopia.jpg"],
    grindOptions: ["whole", "ground"],
    tags: ["fruity", "bright"]
  },
  {
    id: "brazil-cerrado",
    name: "Brazil Cerrado",
    origin: "Brazil",
    roast: "medium",
    notes: ["chocolate", "nutty"],
    price: 59.9,
    rating: 4.5,
    stock: 30,
    images: ["/img/brazil.jpg"],
    grindOptions: ["whole", "ground"]
  }
];
