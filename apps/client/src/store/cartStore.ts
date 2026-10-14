// // "use client";

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// import type { Product } from "@/lib/products";

// export type CartItem = Product & {
//   size: string;
//   quantity: number;
// };

// type CartStore = {
//   items: CartItem[];
//   addItem: (product: Product, size: string, quantity: number) => void;
//   removeItem: (productId: string, size: string) => void;
//   updateQuantity: (productId: string, size: string, quantity: number) => void;
//   clearCart: () => void;
//   totalItems: () => number;
//   subtotal: () => number;
// };

// export const useCartStore = create<CartStore>()(
//   persist(
//     (set, get) => ({
//       items: [],

//       addItem: (product, size, quantity) => {
//         set((state) => {
//           const existingItem = state.items.find(
//             (item) => item.id === product.id && item.size === size,
//           );

//           if (existingItem) {
//             return {
//               items: state.items.map((item) =>
//                 item.id === product.id && item.size === size
//                   ? {
//                       ...item,
//                       quantity: item.quantity + quantity,
//                     }
//                   : item,
//               ),
//             };
//           }

//           return {
//             items: [
//               ...state.items,
//               {
//                 ...product,
//                 size,
//                 quantity,
//               },
//             ],
//           };
//         });
//       },

//       removeItem: (productId, size) => {
//         set((state) => ({
//           items: state.items.filter(
//             (item) => !(item.id === productId && item.size === size),
//           ),
//         }));
//       },

//       updateQuantity: (productId, size, quantity) => {
//         if (quantity < 1) return;

//         set((state) => ({
//           items: state.items.map((item) =>
//             item.id === productId && item.size === size
//               ? { ...item, quantity }
//               : item,
//           ),
//         }));
//       },

//       clearCart: () => {
//         set({ items: [] });
//       },

//       totalItems: () => {
//         return get().items.reduce((total, item) => total + item.quantity, 0);
//       },

//       subtotal: () => {
//         return get().items.reduce(
//           (total, item) => total + item.price * item.quantity,
//           0,
//         );
//       },
//     }),
//     {
//       name: "kaveri-cart",
//     },
//   ),
// );

// "use client";

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// import type { Product } from "@/lib/products";

// export type CartItem = Product & {
//   size: string;
//   quantity: number;
// };

// type CartStore = {
//   items: CartItem[];

//   hasHydrated: boolean;
//   setHasHydrated: (value: boolean) => void;

//   addItem: (product: Product, size: string, quantity: number) => void;
//   removeItem: (productId: string, size: string) => void;
//   updateQuantity: (productId: string, size: string, quantity: number) => void;
//   clearCart: () => void;
//   totalItems: () => number;
//   subtotal: () => number;
// };

// export const useCartStore = create<CartStore>()(
//   persist(
//     (set, get) => ({
//       items: [],
//       hasHydrated: false,

//       setHasHydrated: (value) => {
//         set({ hasHydrated: value });
//       },

//       addItem: (product, size, quantity) => {
//         set((state) => {
//           const existingItem = state.items.find(
//             (item) => item.id === product.id && item.size === size,
//           );

//           if (existingItem) {
//             return {
//               items: state.items.map((item) =>
//                 item.id === product.id && item.size === size
//                   ? {
//                       ...item,
//                       quantity: item.quantity + quantity,
//                     }
//                   : item,
//               ),
//             };
//           }

//           return {
//             items: [
//               ...state.items,
//               {
//                 ...product,
//                 size,
//                 quantity,
//               },
//             ],
//           };
//         });
//       },

//       removeItem: (productId, size) => {
//         set((state) => ({
//           items: state.items.filter(
//             (item) => !(item.id === productId && item.size === size),
//           ),
//         }));
//       },

//       updateQuantity: (productId, size, quantity) => {
//         if (quantity < 1) return;

//         set((state) => ({
//           items: state.items.map((item) =>
//             item.id === productId && item.size === size
//               ? { ...item, quantity }
//               : item,
//           ),
//         }));
//       },

//       clearCart: () => {
//         set({ items: [] });
//       },

//       totalItems: () => {
//         return get().items.reduce((total, item) => total + item.quantity, 0);
//       },

//       subtotal: () => {
//         return get().items.reduce(
//           (total, item) => total + item.price * item.quantity,
//           0,
//         );
//       },
//     }),

//     {
//       name: "kaveri-cart",

//       onRehydrateStorage: () => {
//         return (_state, error) => {
//           if (!error) {
//             useCartStore.getState().setHasHydrated(true);
//           }
//         };
//       },
//     },
//   ),
// );

import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "@/lib/products";

export type CartItem = Product & {
  size: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  addItem: (product: Product, size: string, quantity: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      hasHydrated: false,

      setHasHydrated: (value) => {
        set({ hasHydrated: value });
      },

      addItem: (product, size, quantity) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id && item.size === size,
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id && item.size === size
                  ? {
                      ...item,
                      quantity: item.quantity + quantity,
                    }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...product,
                size,
                quantity,
              },
            ],
          };
        });
      },

      removeItem: (productId, size) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === productId && item.size === size),
          ),
        }));
      },

      updateQuantity: (productId, size, quantity) => {
        if (quantity < 1) return;

        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId && item.size === size
              ? { ...item, quantity }
              : item,
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      totalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      subtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
    }),
    {
      name: "kaveri-cart",

      onRehydrateStorage: () => {
        return (state, error) => {
          if (!error) {
            state?.setHasHydrated(true);
          }
        };
      },
    },
  ),
);
