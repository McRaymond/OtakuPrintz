export const featuredProducts = [
  {
    id: 1,
    name: "Naruto Uzumaki Figure",
    price: 45.99,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    media: [
      { type: "image", src: "/img/naruto/naruto.webp" },
      { type: "image", src: "/img/naruto/naruto-gama.webp" },
    ]
  },
  {
    id: 2,
    name: "Goku Super Saiyan",
    price: 52.99,
    rating: 4.9,
    reviews: 89,
    badge: "New",
    media: [
      { type: "image", src: "/img/Goku Super Saiyan.webp" }
    ]
  },
  {
    id: 3,
    name: "Demon Slayer Tanjiro",
    price: 48.99,
    rating: 4.7,
    reviews: 156,
    badge: "Popular",
    media: [
      { type: "image", src: "/img/Demon-Slayer-Tanjiro.webp" }
    ]
  }
]

export const allProducts = [
  ...featuredProducts,
  {
    id: 4,
    name: "Attack on Titan Eren",
    price: 49.99,
    rating: 4.6,
    reviews: 98,
    category: "Attack on Titan",
    badge: "Best Seller",
    media: [
      { type: "image", src: "/img/Attack-on-Titan-Eren.webp" }
    ]
  },
  {
    id: 5,
    name: "One Piece Luffy",
    price: 46.99,
    rating: 4.8,
    reviews: 142,
    category: "One Piece",
    badge: "",
    media: [
      { type: "image", src: "/img/One-Piece-Luffy.webp" }
    ]
  },
  {
    id: 6,
    name: "My Hero Academia Deku",
    price: 44.99,
    rating: 4.7,
    reviews: 87,
    category: "My Hero Academia",
    badge: "",
    media: [
      { type: "image", src: "/img/My-Hero-Academia-Deku.webp" }
    ]
  },
  {
    id: 7,
    name: "IGRIS - Solo Leveling",
    price: 65.99,
    rating: 4.7,
    reviews: 87,
    category: "Solo Leveling",
    badge: "New",
    media: [
      { type: "image", src: "/img/igris/Igris_B_1.webp" },
      { type: "image", src: "/img/igris/Igris_B_2.webp" },
      { type: "image", src: "/img/igris/Igris_B_3.webp" },
      { type: "image", src: "/img/igris/Igris_B_4.webp" },
      { type: "image", src: "/img/igris/Igris_B_5.webp" },
      { type: "image", src: "/img/igris/Igris_B_6.webp" },



    ]
  },
  {
    id: 8,
    name: "Sekiro: Shadows Die Twice",
    price: 55.99,
    rating: 4.7,
    reviews: 87,
    category: "Sekiro",
    badge: "New",
    media: [
      { type: "image", src: "/img/sekiro.webp" }
    ]
  },
  {
    id: 9,
    name: "Kandiaru Solo Leveling",
    price: 65.99,
    rating: 4.7,
    reviews: 87,
    category: "Solo Leveling",
    badge: "New",
    media: [
      { type: "image", src: "/img/Kandiaru-Solo-Leveling.webp" }
    ]
  }
]
