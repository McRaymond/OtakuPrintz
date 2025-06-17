// /data/products.ts

export const featuredProducts = [
  {
    id: 1,
    name: "Naruto Uzumaki Figure",
    price: 45.99,
    image: "/img/naruto.webp",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Goku Super Saiyan",
    price: 52.99,
    image: "/img/Goku Super Saiyan.webp",
    rating: 4.9,
    reviews: 89,
    badge: "New",
  },
  {
    id: 3,
    name: "Demon Slayer Tanjiro",
    price: 48.99,
    image: "/img/Demon-Slayer-Tanjiro.webp",
    rating: 4.7,
    reviews: 156,
    badge: "Popular",
  },
]

export const allProducts = [
  ...featuredProducts,
  {
    id: 4,
    name: "Attack on Titan Eren",
    price: 49.99,
    image: "/img/Attack-on-Titan-Eren.webp",
    rating: 4.6,
    reviews: 98,
    category: "Attack on Titan",
    badge: "",
  },
  {
    id: 5,
    name: "One Piece Luffy",
    price: 46.99,
    image: "/img/One-Piece-Luffy.webp",
    rating: 4.8,
    reviews: 142,
    category: "One Piece",
    badge: "",
  },
  {
    id: 6,
    name: "My Hero Academia Deku",
    price: 44.99,
    image: "/img/My-Hero-Academia-Deku.webp",
    rating: 4.7,
    reviews: 87,
    category: "My Hero Academia",
    badge: "",
  },
]
