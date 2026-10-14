// export const featuredProducts = [
//   {
//     id: "silk-draped-saree",
//     name: "Silk Draped Saree",
//     category: "Sarees",
//     price: 8900,
//     image:
//       "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
//     secondImage:
//       "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=85",
//     badge: "New",
//   },
//   {
//     id: "midnight-lehenga",
//     name: "Midnight Embroidered Lehenga",
//     category: "Lehengas",
//     price: 14900,
//     image:
//       "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=85",
//     secondImage:
//       "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=85",
//   },
//   {
//     id: "linen-kurti",
//     name: "Linen Relaxed Kurti",
//     category: "Kurtis",
//     price: 4200,
//     image:
//       "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=85",
//     badge: "New",
//   },
//   {
//     id: "silk-midi-dress",
//     name: "Silk Midi Dress",
//     category: "Dresses",
//     price: 6800,
//     image:
//       "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
//     secondImage:
//       "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85",
//   },
// ];

export type Product = {
  id: string;
  name: string;
  category: string;
  designer?: string;
  price: number;
  image: string;
  secondImage?: string;
  badge?: string;
};

export const featuredProducts: Product[] = [
  {
    id: "silk-draped-saree",
    name: "Silk Draped Saree",
    category: "Sarees",
    designer: "Kaveri Studio",
    price: 8900,
    image:
      "https://images.pexels.com/photos/29105316/pexels-photo-29105316.jpeg?auto=format&fit=crop&w=1000&q=85",
    secondImage:
      "https://images.pexels.com/photos/29105322/pexels-photo-29105322.jpeg?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "midnight-lehenga",
    name: "Midnight Embroidered Lehenga",
    category: "Lehengas",
    designer: "The Atelier",
    price: 14900,
    image:
      "https://images.pexels.com/photos/16803130/pexels-photo-16803130.jpeg?auto=format&fit=crop&w=1000&q=85",
    badge: "New",
  },
  // {
  //   id: "midnight-lehenga",
  //   name: "Midnight Embroidered Lehenga",
  //   category: "Lehengas",
  //   designer: "The Atelier",
  //   price: 14900,
  //   image:
  //     "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=85",
  //   secondImage:
  //     "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=85",
  // },
  {
    id: "linen-kurti",
    name: "Linen Relaxed Kurti",
    category: "Kurtis",
    designer: "House of Kaveri",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1705921267925-f08fb9747dad?auto=format&fit=crop&w=1200&q=85",
    badge: "New",
  },
  {
    id: "silk-midi-dress",
    name: "Silk Midi Dress",
    category: "Dresses",
    designer: "Contemporary",
    price: 6800,
    image:
      "https://images.pexels.com/photos/14108017/pexels-photo-14108017.jpeg?auto=format&fit=crop&w=1000&q=85",
    secondImage:
      "https://images.pexels.com/photos/14108023/pexels-photo-14108023.jpeg?auto=format&fit=crop&w=1000&q=85",
  },
  // {
  //   id: "silk-midi-dress",
  //   name: "Silk Midi Dress",
  //   category: "Dresses",
  //   designer: "Contemporary",
  //   price: 6800,
  //   image:
  //     "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
  //   secondImage:
  //     "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85",
  // },
];
