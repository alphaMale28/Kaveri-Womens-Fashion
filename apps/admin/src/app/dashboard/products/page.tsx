// // // "use client";

// // // import { useMemo, useState } from "react";
// // // import {
// // //   FiArrowDownRight,
// // //   FiArrowUpRight,
// // //   FiChevronDown,
// // //   FiDownload,
// // //   FiEdit2,
// // //   FiEye,
// // //   FiFilter,
// // //   FiMoreHorizontal,
// // //   FiPlus,
// // //   FiSearch,
// // //   FiShoppingBag,
// // //   FiTrash2,
// // //   FiX,
// // // } from "react-icons/fi";

// // // import type { Product } from "@/types/product";

// // // const getProductInitials = (name: string) =>
// // //   name
// // //     .split(" ")
// // //     .slice(0, 2)
// // //     .map((word) => word[0])
// // //     .join("")
// // //     .toUpperCase();

// // // const initialProducts: Product[] = [
// // //   {
// // //     id: "1",
// // //     name: "Ivory Embroidered Saree",
// // //     slug: "ivory-embroidered-saree",
// // //     description: "An elegant ivory saree with intricate embroidery.",
// // //     categoryId: "sarees",
// // //     designerId: "designer-001",
// // //     price: 12900,
// // //     images: [],
// // //     variants: [
// // //       {
// // //         id: "variant-1",
// // //         sku: "KAV-SAR-001-IVY-FS",
// // //         color: "Ivory",
// // //         stock: 18,
// // //       },
// // //     ],
// // //     status: "published",
// // //     featured: true,
// // //     material: "Silk blend",
// // //     careInstructions: "Dry clean recommended.",
// // //   },
// // //   {
// // //     id: "2",
// // //     name: "Rose Silk Lehenga",
// // //     slug: "rose-silk-lehenga",
// // //     description: "A rose-colored silk lehenga for special occasions.",
// // //     categoryId: "lehengas",
// // //     designerId: "designer-002",
// // //     price: 24500,
// // //     images: [],
// // //     variants: [
// // //       {
// // //         id: "variant-2",
// // //         sku: "KAV-LEH-002-ROS-S",
// // //         color: "Rose",
// // //         size: "S",
// // //         stock: 2,
// // //       },
// // //       {
// // //         id: "variant-3",
// // //         sku: "KAV-LEH-002-ROS-M",
// // //         color: "Rose",
// // //         size: "M",
// // //         stock: 2,
// // //       },
// // //     ],
// // //     status: "published",
// // //     featured: true,
// // //     material: "Silk",
// // //     careInstructions: "Dry clean only.",
// // //   },
// // //   {
// // //     id: "3",
// // //     name: "Classic Linen Kurti",
// // //     slug: "classic-linen-kurti",
// // //     description: "A comfortable linen kurti for everyday wear.",
// // //     categoryId: "kurtis",
// // //     designerId: "designer-001",
// // //     price: 3200,
// // //     images: [],
// // //     variants: [
// // //       {
// // //         id: "variant-4",
// // //         sku: "KAV-KUR-003-IVY-S",
// // //         color: "Ivory",
// // //         size: "S",
// // //         stock: 8,
// // //       },
// // //       {
// // //         id: "variant-5",
// // //         sku: "KAV-KUR-003-IVY-M",
// // //         color: "Ivory",
// // //         size: "M",
// // //         stock: 10,
// // //       },
// // //       {
// // //         id: "variant-6",
// // //         sku: "KAV-KUR-003-IVY-L",
// // //         color: "Ivory",
// // //         size: "L",
// // //         stock: 8,
// // //       },
// // //     ],
// // //     status: "published",
// // //     featured: false,
// // //     material: "Linen",
// // //     careInstructions: "Gentle machine wash.",
// // //   },
// // //   {
// // //     id: "4",
// // //     name: "Terracotta Evening Dress",
// // //     slug: "terracotta-evening-dress",
// // //     description: "A terracotta evening dress with a refined silhouette.",
// // //     categoryId: "dresses",
// // //     designerId: "designer-002",
// // //     price: 7800,
// // //     images: [],
// // //     variants: [
// // //       {
// // //         id: "variant-7",
// // //         sku: "KAV-DRE-004-TER-S",
// // //         color: "Terracotta",
// // //         size: "S",
// // //         stock: 0,
// // //       },
// // //       {
// // //         id: "variant-8",
// // //         sku: "KAV-DRE-004-TER-M",
// // //         color: "Terracotta",
// // //         size: "M",
// // //         stock: 0,
// // //       },
// // //     ],
// // //     status: "draft",
// // //     featured: false,
// // //     material: "Crepe",
// // //     careInstructions: "Hand wash gently or dry clean.",
// // //   },
// // //   {
// // //     id: "5",
// // //     name: "Soft Cotton Everyday Top",
// // //     slug: "soft-cotton-everyday-top",
// // //     description: "A versatile cotton top for everyday outfits.",
// // //     categoryId: "tops",
// // //     price: 1850,
// // //     images: [],
// // //     variants: [
// // //       {
// // //         id: "variant-9",
// // //         sku: "KAV-TOP-005-WHT-S",
// // //         color: "White",
// // //         size: "S",
// // //         stock: 12,
// // //       },
// // //       {
// // //         id: "variant-10",
// // //         sku: "KAV-TOP-005-WHT-M",
// // //         color: "White",
// // //         size: "M",
// // //         stock: 10,
// // //       },
// // //       {
// // //         id: "variant-11",
// // //         sku: "KAV-TOP-005-WHT-L",
// // //         color: "White",
// // //         size: "L",
// // //         stock: 10,
// // //       },
// // //     ],
// // //     status: "published",
// // //     featured: false,
// // //     material: "Cotton",
// // //     careInstructions: "Machine wash cold.",
// // //   },
// // //   {
// // //     id: "6",
// // //     name: "Tailored Beige Overcoat",
// // //     slug: "tailored-beige-overcoat",
// // //     description: "A tailored beige overcoat with a timeless design.",
// // //     categoryId: "outerwear",
// // //     price: 11200,
// // //     images: [],
// // //     variants: [
// // //       {
// // //         id: "variant-12",
// // //         sku: "KAV-OUT-006-BEI-S",
// // //         color: "Beige",
// // //         size: "S",
// // //         stock: 3,
// // //       },
// // //       {
// // //         id: "variant-13",
// // //         sku: "KAV-OUT-006-BEI-M",
// // //         color: "Beige",
// // //         size: "M",
// // //         stock: 4,
// // //       },
// // //       {
// // //         id: "variant-14",
// // //         sku: "KAV-OUT-006-BEI-L",
// // //         color: "Beige",
// // //         size: "L",
// // //         stock: 2,
// // //       },
// // //     ],
// // //     status: "published",
// // //     featured: true,
// // //     material: "Wool blend",
// // //     careInstructions: "Dry clean only.",
// // //   },
// // // ];

// // // type Category = {
// // //   id: string;
// // //   name: string;
// // // };

// // // const categories: Category[] = [
// // //   { id: "all", name: "All categories" },
// // //   { id: "cat-sarees", name: "Sarees" },
// // //   { id: "cat-lehengas", name: "Lehengas" },
// // //   { id: "cat-kurtis", name: "Kurtis" },
// // //   { id: "cat-dresses", name: "Dresses" },
// // //   { id: "cat-tops", name: "Tops" },
// // //   { id: "cat-bottoms", name: "Bottoms" },
// // //   { id: "cat-jumpsuits", name: "Jumpsuits" },
// // //   { id: "cat-outerwear", name: "Outerwear" },
// // // ];

// // // const formatPrice = (price: number) => `NPR ${price.toLocaleString("en-IN")}`;

// // // const ProductsPage = () => {
// // //   const [products, setProducts] = useState(initialProducts);
// // //   const [search, setSearch] = useState("");
// // //   const [category, setCategory] = useState("All categories");
// // //   const [stockFilter, setStockFilter] = useState("All stock");
// // //   const [isAddOpen, setIsAddOpen] = useState(false);
// // //   const [newName, setNewName] = useState("");
// // //   const [newCategory, setNewCategory] = useState("Sarees");
// // //   const [newPrice, setNewPrice] = useState("");
// // //   const [newStock, setNewStock] = useState("");
// // //   const [deleteId, setDeleteId] = useState<string | null>(null);

// // //   const filteredProducts = useMemo(() => {
// // //     return products.filter((product) => {
// // //       const matchesSearch = [
// // //         product.name,
// // //         product.slug,
// // //         ...product.variants.map((variant) => variant.sku),
// // //       ]
// // //         .join(" ")
// // //         .toLowerCase()
// // //         .includes(search.toLowerCase());

// // //       const matchesCategory =
// // //         category === "All categories" || product.categoryId === category;

// // //       const matchesStock =
// // //         stockFilter === "All stock" ||
// // //         (stockFilter === "In stock" && product.stock > 5) ||
// // //         (stockFilter === "Low stock" &&
// // //           product.stock > 0 &&
// // //           product.stock <= 5) ||
// // //         (stockFilter === "Out of stock" && product.stock === 0);

// // //       return matchesSearch && matchesCategory && matchesStock;
// // //     });
// // //   }, [products, search, category, stockFilter]);

// // //   const totalValue = products.reduce(
// // //     (total, product) => total + product.price * product.stock,
// // //     0,
// // //   );

// // //   const lowStockCount = products.filter(
// // //     (product) => product.stock > 0 && product.stock <= 5,
// // //   ).length;

// // //   const outOfStockCount = products.filter(
// // //     (product) => product.stock === 0,
// // //   ).length;

// // //   //   const addProduct = (event: React.FormEvent<HTMLFormElement>) => {
// // //   //     event.preventDefault();

// // //   //     const price = Number(newPrice);
// // //   //     const stock = Number(newStock);

// // //   //     if (
// // //   //       !newName.trim() ||
// // //   //       !Number.isFinite(price) ||
// // //   //       price <= 0 ||
// // //   //       !Number.isInteger(stock) ||
// // //   //       stock < 0
// // //   //     ) {
// // //   //       return;
// // //   //     }

// // //   //     const id = Math.max(0, ...products.map((product) => product.id)) + 1;

// // //   //     const product: Product = {
// // //   //       id,
// // //   //       name: newName.trim(),
// // //   //       sku: `KAV-${String(id).padStart(3, "0")}`,
// // //   //       category: newCategory,
// // //   //       price,
// // //   //       stock,
// // //   //       color: "bg-[#eeeae2]",
// // //   //       initials: newName
// // //   //         .trim()
// // //   //         .split(/\s+/)
// // //   //         .slice(0, 2)
// // //   //         .map((word) => word[0])
// // //   //         .join("")
// // //   //         .toUpperCase(),
// // //   //     };

// // //   //     setProducts((current) => [product, ...current]);
// // //   //     setSearch("");
// // //   //     setCategory("All categories");
// // //   //     setStockFilter("All stock");
// // //   //     setNewName("");
// // //   //     setNewPrice("");
// // //   //     setNewStock("");
// // //   //     setIsAddOpen(false);
// // //   //   };

// // //   const addProduct = (event: React.FormEvent<HTMLFormElement>) => {
// // //     event.preventDefault();

// // //     const price = Number(newPrice);
// // //     const stock = Number(newStock);
// // //     const name = newName.trim();

// // //     if (
// // //       !name ||
// // //       !Number.isFinite(price) ||
// // //       price <= 0 ||
// // //       !Number.isInteger(stock) ||
// // //       stock < 0
// // //     ) {
// // //       return;
// // //     }

// // //     const id = String(
// // //       Math.max(0, ...products.map((product) => Number(product.id) || 0)) + 1,
// // //     );

// // //     const slug = name
// // //       .toLowerCase()
// // //       .trim()
// // //       .replace(/[^a-z0-9]+/g, "-")
// // //       .replace(/^-|-$/g, "");

// // //     const categoryId =
// // //       categories.find((item) => item.name === newCategory)?.id ?? "sarees";

// // //     const product: Product = {
// // //       id,
// // //       name,
// // //       slug,
// // //       description: "",
// // //       categoryId,
// // //       price,
// // //       images: [],
// // //       variants: [
// // //         {
// // //           id: `variant-${id}-1`,
// // //           sku: `KAV-${id.padStart(3, "0")}`,
// // //           color: "Not specified",
// // //           stock,
// // //         },
// // //       ],
// // //       status: "draft",
// // //       featured: false,
// // //     };

// // //     setProducts((current) => [product, ...current]);
// // //     setSearch("");
// // //     setCategory("all");
// // //     setStockFilter("All stock");
// // //     setNewName("");
// // //     setNewPrice("");
// // //     setNewStock("");
// // //     setIsAddOpen(false);
// // //   };

// // //   const removeProduct = (id: string) => {
// // //     setProducts((current) => current.filter((product) => product.id !== id));
// // //     setDeleteId(null);
// // //   };

// // //   return (
// // //     <div className="space-y-8">
// // //       <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
// // //         <div>
// // //           <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
// // //             Store management / Inventory
// // //           </p>
// // //           <h1 className="text-3xl font-semibold tracking-tight text-ink">
// // //             Products
// // //           </h1>
// // //           <p className="mt-2 text-sm text-muted">
// // //             Manage your collection, pricing, and stock levels.
// // //           </p>
// // //         </div>

// // //         <button
// // //           type="button"
// // //           onClick={() => setIsAddOpen(true)}
// // //           className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-clay"
// // //         >
// // //           <FiPlus size={17} />
// // //           Add product
// // //         </button>
// // //       </header>

// // //       <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
// // //         <div className="rounded-xl border border-admin-border bg-white p-5">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-sm text-muted">Total products</p>
// // //             <FiShoppingBag className="text-muted" size={19} />
// // //           </div>
// // //           <p className="mt-4 text-3xl font-semibold text-ink">
// // //             {products.length}
// // //           </p>
// // //           <p className="mt-2 text-xs text-muted">Across your collections</p>
// // //         </div>

// // //         <div className="rounded-xl border border-admin-border bg-white p-5">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-sm text-muted">Inventory value</p>
// // //             <FiArrowUpRight className="text-[#66816b]" size={19} />
// // //           </div>
// // //           <p className="mt-4 text-2xl font-semibold text-ink">
// // //             {formatPrice(totalValue)}
// // //           </p>
// // //           <p className="mt-2 text-xs text-muted">
// // //             Retail value of available stock
// // //           </p>
// // //         </div>

// // //         <div className="rounded-xl border border-admin-border bg-white p-5">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-sm text-muted">Low stock</p>
// // //             <FiArrowDownRight className="text-[#b17b38]" size={19} />
// // //           </div>
// // //           <p className="mt-4 text-3xl font-semibold text-ink">
// // //             {lowStockCount}
// // //           </p>
// // //           <p className="mt-2 text-xs text-muted">Products with 1–5 units</p>
// // //         </div>

// // //         <div className="rounded-xl border border-admin-border bg-white p-5">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-sm text-muted">Out of stock</p>
// // //             <FiFilter className="text-[#b45e4b]" size={19} />
// // //           </div>
// // //           <p className="mt-4 text-3xl font-semibold text-ink">
// // //             {outOfStockCount}
// // //           </p>
// // //           <p className="mt-2 text-xs text-muted">Products needing restock</p>
// // //         </div>
// // //       </section>

// // //       <section className="overflow-hidden rounded-xl border border-admin-border bg-white">
// // //         <div className="flex flex-col gap-4 border-b border-admin-border p-5 lg:flex-row lg:items-center lg:justify-between">
// // //           <div>
// // //             <h2 className="text-lg font-semibold text-ink">All products</h2>
// // //             <p className="mt-1 text-sm text-muted">
// // //               {filteredProducts.length} of {products.length} products shown
// // //             </p>
// // //           </div>

// // //           <div className="flex flex-col gap-3 sm:flex-row">
// // //             <div className="flex items-center gap-2 rounded-lg border border-admin-border px-3 sm:w-64">
// // //               <FiSearch className="shrink-0 text-muted" size={17} />
// // //               <input
// // //                 value={search}
// // //                 onChange={(event) => setSearch(event.target.value)}
// // //                 placeholder="Search products or SKU..."
// // //                 aria-label="Search products"
// // //                 className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
// // //               />
// // //               {search && (
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setSearch("")}
// // //                   aria-label="Clear search"
// // //                   className="text-muted hover:text-ink"
// // //                 >
// // //                   <FiX size={16} />
// // //                 </button>
// // //               )}
// // //             </div>

// // //             <label className="flex items-center gap-2 rounded-lg border border-admin-border px-3">
// // //               <span className="sr-only">Filter by category</span>
// // //               <select
// // //                 value={category}
// // //                 onChange={(event) => setCategory(event.target.value)}
// // //                 className="h-10 w-full bg-transparent text-sm text-ink outline-none sm:w-36"
// // //               >
// // //                 {categories.map((item) => (
// // //                   <option key={item.id} value={item.name}>
// // //                     {item.name}
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //               <FiChevronDown
// // //                 className="pointer-events-none text-muted"
// // //                 size={15}
// // //               />
// // //             </label>

// // //             <label className="flex items-center gap-2 rounded-lg border border-admin-border px-3">
// // //               <span className="sr-only">Filter by stock</span>
// // //               <select
// // //                 value={stockFilter}
// // //                 onChange={(event) => setStockFilter(event.target.value)}
// // //                 className="h-10 w-full bg-transparent text-sm text-ink outline-none sm:w-32"
// // //               >
// // //                 {["All stock", "In stock", "Low stock", "Out of stock"].map(
// // //                   (item) => (
// // //                     <option key={item} value={item}>
// // //                       {item}
// // //                     </option>
// // //                   ),
// // //                 )}
// // //               </select>
// // //             </label>
// // //           </div>
// // //         </div>

// // //         <div className="overflow-x-auto">
// // //           <table className="w-full min-w-[850px] text-left">
// // //             <thead className="bg-cream">
// // //               <tr className="text-xs uppercase tracking-wider text-muted">
// // //                 <th className="px-5 py-4 font-medium">Product</th>
// // //                 <th className="px-5 py-4 font-medium">Category</th>
// // //                 <th className="px-5 py-4 font-medium">Price</th>
// // //                 <th className="px-5 py-4 font-medium">Stock</th>
// // //                 <th className="px-5 py-4 font-medium">Status</th>
// // //                 <th className="px-5 py-4 text-right font-medium">Actions</th>
// // //               </tr>
// // //             </thead>

// // //             <tbody className="divide-y divide-admin-border">
// // //               {filteredProducts.map((product) => {
// // //                 const status =
// // //                   product.stock === 0
// // //                     ? "Out of stock"
// // //                     : product.stock <= 5
// // //                       ? "Low stock"
// // //                       : "In stock";

// // //                 return (
// // //                   <tr
// // //                     key={product.id}
// // //                     className="transition-colors hover:bg-cream/60"
// // //                   >
// // //                     <td className="px-5 py-4">
// // //                       <div className="flex items-center gap-3">
// // //                         <div
// // //                           className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${product.color} text-sm font-semibold text-ink`}
// // //                         >
// // //                           {/* {product.initials} */}
// // //                           {getProductInitials(product.name)}
// // //                         </div>
// // //                         <div>
// // //                           <p className="font-medium text-ink">{product.name}</p>
// // //                           <p className="mt-1 text-xs text-muted">
// // //                             SKU: {product.sku}
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                     </td>

// // //                     <td className="px-5 py-4 text-sm text-muted">
// // //                       {product.categoryId}
// // //                     </td>

// // //                     <td className="px-5 py-4 text-sm font-medium text-ink">
// // //                       {formatPrice(product.price)}
// // //                     </td>

// // //                     <td className="px-5 py-4 text-sm text-ink">
// // //                       {product.stock} units
// // //                     </td>

// // //                     <td className="px-5 py-4">
// // //                       <span
// // //                         className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
// // //                           status === "In stock"
// // //                             ? "bg-[#e4eee5] text-[#426849]"
// // //                             : status === "Low stock"
// // //                               ? "bg-[#f7edd9] text-[#8c6428]"
// // //                               : "bg-[#f5e4e0] text-[#a14d3d]"
// // //                         }`}
// // //                       >
// // //                         {status}
// // //                       </span>
// // //                     </td>

// // //                     <td className="px-5 py-4">
// // //                       <div className="flex items-center justify-end gap-1">
// // //                         <button
// // //                           type="button"
// // //                           title="Product details"
// // //                           aria-label={`View ${product.name}`}
// // //                           onClick={() =>
// // //                             window.alert(
// // //                               `${product.name}\nSKU: ${product.sku}\nCategory: ${product.categoryId}\nPrice: ${formatPrice(product.price)}\nStock: ${product.stock}`,
// // //                             )
// // //                           }
// // //                           className="rounded-md p-2 text-muted hover:bg-paper hover:text-ink"
// // //                         >
// // //                           <FiEye size={16} />
// // //                         </button>
// // //                         <button
// // //                           type="button"
// // //                           title="Edit product"
// // //                           aria-label={`Edit ${product.name}`}
// // //                           onClick={() =>
// // //                             window.alert(
// // //                               "Product editing will be added in the next step.",
// // //                             )
// // //                           }
// // //                           className="rounded-md p-2 text-muted hover:bg-paper hover:text-ink"
// // //                         >
// // //                           <FiEdit2 size={16} />
// // //                         </button>
// // //                         <button
// // //                           type="button"
// // //                           title="Delete product"
// // //                           aria-label={`Delete ${product.name}`}
// // //                           onClick={() => setDeleteId(product.id)}
// // //                           className="rounded-md p-2 text-muted hover:bg-[#f5e4e0] hover:text-[#a14d3d]"
// // //                         >
// // //                           <FiTrash2 size={16} />
// // //                         </button>
// // //                       </div>
// // //                     </td>
// // //                   </tr>
// // //                 );
// // //               })}

// // //               {filteredProducts.length === 0 && (
// // //                 <tr>
// // //                   <td colSpan={6} className="px-5 py-16 text-center">
// // //                     <FiSearch className="mx-auto mb-3 text-muted" size={24} />
// // //                     <p className="font-medium text-ink">No products found</p>
// // //                     <p className="mt-1 text-sm text-muted">
// // //                       Try changing your search or filters.
// // //                     </p>
// // //                   </td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         <div className="flex flex-col gap-3 border-t border-admin-border px-5 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
// // //           <p>Showing {filteredProducts.length} products</p>
// // //           <p>Prices displayed in Nepalese rupees (NPR)</p>
// // //         </div>
// // //       </section>

// // //       {isAddOpen && (
// // //         <div
// // //           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
// // //           onClick={() => setIsAddOpen(false)}
// // //         >
// // //           <section
// // //             role="dialog"
// // //             aria-modal="true"
// // //             aria-labelledby="add-product-title"
// // //             className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
// // //             onClick={(event) => event.stopPropagation()}
// // //           >
// // //             <div className="mb-6 flex items-start justify-between">
// // //               <div>
// // //                 <h2
// // //                   id="add-product-title"
// // //                   className="text-xl font-semibold text-ink"
// // //                 >
// // //                   Add a product
// // //                 </h2>
// // //                 <p className="mt-1 text-sm text-muted">
// // //                   Add a sample item to your current product list.
// // //                 </p>
// // //               </div>
// // //               <button
// // //                 type="button"
// // //                 onClick={() => setIsAddOpen(false)}
// // //                 aria-label="Close form"
// // //                 className="rounded-lg p-2 text-muted hover:bg-paper"
// // //               >
// // //                 <FiX size={18} />
// // //               </button>
// // //             </div>

// // //             <form onSubmit={addProduct} className="space-y-4">
// // //               <div>
// // //                 <label
// // //                   htmlFor="product-name"
// // //                   className="mb-1.5 block text-sm font-medium text-ink"
// // //                 >
// // //                   Product name
// // //                 </label>
// // //                 <input
// // //                   id="product-name"
// // //                   required
// // //                   value={newName}
// // //                   onChange={(event) => setNewName(event.target.value)}
// // //                   placeholder="e.g. Floral Silk Saree"
// // //                   className="h-11 w-full rounded-lg border border-admin-border px-3 text-sm outline-none focus:border-clay"
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label
// // //                   htmlFor="product-category"
// // //                   className="mb-1.5 block text-sm font-medium text-ink"
// // //                 >
// // //                   Category
// // //                 </label>
// // //                 <select
// // //                   id="product-category"
// // //                   value={newCategory}
// // //                   onChange={(event) => setNewCategory(event.target.value)}
// // //                   className="h-11 w-full rounded-lg border border-admin-border bg-white px-3 text-sm outline-none focus:border-clay"
// // //                 >
// // //                   {categories.slice(1).map((item) => (
// // //                     <option key={item.id} value={item.name}>
// // //                       {item.name}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>

// // //               <div className="grid gap-4 sm:grid-cols-2">
// // //                 <div>
// // //                   <label
// // //                     htmlFor="product-price"
// // //                     className="mb-1.5 block text-sm font-medium text-ink"
// // //                   >
// // //                     Price (NPR)
// // //                   </label>
// // //                   <input
// // //                     id="product-price"
// // //                     required
// // //                     type="number"
// // //                     min="1"
// // //                     step="1"
// // //                     value={newPrice}
// // //                     onChange={(event) => setNewPrice(event.target.value)}
// // //                     placeholder="5000"
// // //                     className="h-11 w-full rounded-lg border border-admin-border px-3 text-sm outline-none focus:border-clay"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label
// // //                     htmlFor="product-stock"
// // //                     className="mb-1.5 block text-sm font-medium text-ink"
// // //                   >
// // //                     Initial stock
// // //                   </label>
// // //                   <input
// // //                     id="product-stock"
// // //                     required
// // //                     type="number"
// // //                     min="0"
// // //                     step="1"
// // //                     value={newStock}
// // //                     onChange={(event) => setNewStock(event.target.value)}
// // //                     placeholder="10"
// // //                     className="h-11 w-full rounded-lg border border-admin-border px-3 text-sm outline-none focus:border-clay"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="flex justify-end gap-3 border-t border-admin-border pt-5">
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setIsAddOpen(false)}
// // //                   className="rounded-lg border border-admin-border px-4 py-2.5 text-sm font-medium text-ink hover:bg-cream"
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //                 <button
// // //                   type="submit"
// // //                   className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:bg-clay"
// // //                 >
// // //                   <FiPlus size={16} />
// // //                   Add product
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </section>
// // //         </div>
// // //       )}

// // //       {deleteId !== null && (
// // //         <div
// // //           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
// // //           onClick={() => setDeleteId(null)}
// // //         >
// // //           <section
// // //             role="alertdialog"
// // //             aria-modal="true"
// // //             aria-labelledby="delete-product-title"
// // //             className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
// // //             onClick={(event) => event.stopPropagation()}
// // //           >
// // //             <h2
// // //               id="delete-product-title"
// // //               className="text-lg font-semibold text-ink"
// // //             >
// // //               Delete this product?
// // //             </h2>
// // //             <p className="mt-2 text-sm leading-6 text-muted">
// // //               This will remove the item from this temporary product list. It
// // //               will not delete anything from a database.
// // //             </p>
// // //             <div className="mt-6 flex justify-end gap-3">
// // //               <button
// // //                 type="button"
// // //                 onClick={() => setDeleteId(null)}
// // //                 className="rounded-lg border border-admin-border px-4 py-2.5 text-sm font-medium text-ink hover:bg-cream"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 type="button"
// // //                 onClick={() => removeProduct(deleteId)}
// // //                 className="rounded-lg bg-[#a14d3d] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#843c30]"
// // //               >
// // //                 Delete product
// // //               </button>
// // //             </div>
// // //           </section>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ProductsPage;

// // "use client";

// // import { useMemo, useState } from "react";
// // import type { FormEvent } from "react";
// // import {
// //   FiArrowDownRight,
// //   FiArrowUpRight,
// //   FiChevronDown,
// //   FiEdit2,
// //   FiEye,
// //   FiFilter,
// //   FiPlus,
// //   FiSearch,
// //   FiShoppingBag,
// //   FiTrash2,
// //   FiX,
// // } from "react-icons/fi";

// // import type { Product } from "@/types/product";

// // const getTotalStock = (product: Product) =>
// //   product.variants.reduce((total, variant) => total + variant.stock, 0);

// // const getPrimarySku = (product: Product) =>
// //   product.variants[0]?.sku ?? "No SKU";

// // const getProductInitials = (name: string) =>
// //   name
// //     .split(" ")
// //     .slice(0, 2)
// //     .map((word) => word[0])
// //     .join("")
// //     .toUpperCase();

// // const initialProducts: Product[] = [
// //   {
// //     id: "1",
// //     name: "Ivory Embroidered Saree",
// //     slug: "ivory-embroidered-saree",
// //     description: "An elegant ivory saree with intricate embroidery.",
// //     categoryId: "sarees",
// //     designerId: "designer-001",
// //     price: 12900,
// //     images: [],
// //     variants: [
// //       {
// //         id: "variant-1",
// //         sku: "KAV-SAR-001-IVY-FS",
// //         color: "Ivory",
// //         stock: 18,
// //       },
// //     ],
// //     status: "published",
// //     featured: true,
// //     material: "Silk blend",
// //     careInstructions: "Dry clean recommended.",
// //   },
// //   {
// //     id: "2",
// //     name: "Rose Silk Lehenga",
// //     slug: "rose-silk-lehenga",
// //     description: "A rose-colored silk lehenga for special occasions.",
// //     categoryId: "lehengas",
// //     designerId: "designer-002",
// //     price: 24500,
// //     images: [],
// //     variants: [
// //       {
// //         id: "variant-2",
// //         sku: "KAV-LEH-002-ROS-S",
// //         color: "Rose",
// //         size: "S",
// //         stock: 2,
// //       },
// //       {
// //         id: "variant-3",
// //         sku: "KAV-LEH-002-ROS-M",
// //         color: "Rose",
// //         size: "M",
// //         stock: 2,
// //       },
// //     ],
// //     status: "published",
// //     featured: true,
// //     material: "Silk",
// //     careInstructions: "Dry clean only.",
// //   },
// //   {
// //     id: "3",
// //     name: "Classic Linen Kurti",
// //     slug: "classic-linen-kurti",
// //     description: "A comfortable linen kurti for everyday wear.",
// //     categoryId: "kurtis",
// //     designerId: "designer-001",
// //     price: 3200,
// //     images: [],
// //     variants: [
// //       {
// //         id: "variant-4",
// //         sku: "KAV-KUR-003-IVY-S",
// //         color: "Ivory",
// //         size: "S",
// //         stock: 8,
// //       },
// //       {
// //         id: "variant-5",
// //         sku: "KAV-KUR-003-IVY-M",
// //         color: "Ivory",
// //         size: "M",
// //         stock: 10,
// //       },
// //       {
// //         id: "variant-6",
// //         sku: "KAV-KUR-003-IVY-L",
// //         color: "Ivory",
// //         size: "L",
// //         stock: 8,
// //       },
// //     ],
// //     status: "published",
// //     featured: false,
// //     material: "Linen",
// //     careInstructions: "Gentle machine wash.",
// //   },
// //   {
// //     id: "4",
// //     name: "Terracotta Evening Dress",
// //     slug: "terracotta-evening-dress",
// //     description: "A terracotta evening dress with a refined silhouette.",
// //     categoryId: "dresses",
// //     designerId: "designer-002",
// //     price: 7800,
// //     images: [],
// //     variants: [
// //       {
// //         id: "variant-7",
// //         sku: "KAV-DRE-004-TER-S",
// //         color: "Terracotta",
// //         size: "S",
// //         stock: 0,
// //       },
// //       {
// //         id: "variant-8",
// //         sku: "KAV-DRE-004-TER-M",
// //         color: "Terracotta",
// //         size: "M",
// //         stock: 0,
// //       },
// //     ],
// //     status: "draft",
// //     featured: false,
// //     material: "Crepe",
// //     careInstructions: "Hand wash gently or dry clean.",
// //   },
// //   {
// //     id: "5",
// //     name: "Soft Cotton Everyday Top",
// //     slug: "soft-cotton-everyday-top",
// //     description: "A versatile cotton top for everyday outfits.",
// //     categoryId: "tops",
// //     price: 1850,
// //     images: [],
// //     variants: [
// //       {
// //         id: "variant-9",
// //         sku: "KAV-TOP-005-WHT-S",
// //         color: "White",
// //         size: "S",
// //         stock: 12,
// //       },
// //       {
// //         id: "variant-10",
// //         sku: "KAV-TOP-005-WHT-M",
// //         color: "White",
// //         size: "M",
// //         stock: 10,
// //       },
// //       {
// //         id: "variant-11",
// //         sku: "KAV-TOP-005-WHT-L",
// //         color: "White",
// //         size: "L",
// //         stock: 10,
// //       },
// //     ],
// //     status: "published",
// //     featured: false,
// //     material: "Cotton",
// //     careInstructions: "Machine wash cold.",
// //   },
// //   {
// //     id: "6",
// //     name: "Tailored Beige Overcoat",
// //     slug: "tailored-beige-overcoat",
// //     description: "A tailored beige overcoat with a timeless design.",
// //     categoryId: "outerwear",
// //     price: 11200,
// //     images: [],
// //     variants: [
// //       {
// //         id: "variant-12",
// //         sku: "KAV-OUT-006-BEI-S",
// //         color: "Beige",
// //         size: "S",
// //         stock: 3,
// //       },
// //       {
// //         id: "variant-13",
// //         sku: "KAV-OUT-006-BEI-M",
// //         color: "Beige",
// //         size: "M",
// //         stock: 4,
// //       },
// //       {
// //         id: "variant-14",
// //         sku: "KAV-OUT-006-BEI-L",
// //         color: "Beige",
// //         size: "L",
// //         stock: 2,
// //       },
// //     ],
// //     status: "published",
// //     featured: true,
// //     material: "Wool blend",
// //     careInstructions: "Dry clean only.",
// //   },
// // ];

// // type Category = {
// //   id: string;
// //   name: string;
// // };

// // const categories: Category[] = [
// //   { id: "all", name: "All categories" },
// //   { id: "sarees", name: "Sarees" },
// //   { id: "lehengas", name: "Lehengas" },
// //   { id: "kurtis", name: "Kurtis" },
// //   { id: "dresses", name: "Dresses" },
// //   { id: "tops", name: "Tops" },
// //   { id: "bottoms", name: "Bottoms" },
// //   { id: "jumpsuits", name: "Jumpsuits" },
// //   { id: "outerwear", name: "Outerwear" },
// // ];

// // const formatPrice = (price: number) => `NPR ${price.toLocaleString("en-NP")}`;

// // const ProductsPage = () => {
// //   const [products, setProducts] = useState(initialProducts);
// //   const [search, setSearch] = useState("");
// //   const [category, setCategory] = useState("all");
// //   const [stockFilter, setStockFilter] = useState("All stock");
// //   const [isAddOpen, setIsAddOpen] = useState(false);
// //   const [newName, setNewName] = useState("");
// //   const [newCategory, setNewCategory] = useState("Sarees");
// //   const [newPrice, setNewPrice] = useState("");
// //   const [newStock, setNewStock] = useState("");
// //   const [deleteId, setDeleteId] = useState<string | null>(null);

// //   const filteredProducts = useMemo(() => {
// //     return products.filter((product) => {
// //       const matchesSearch = [
// //         product.name,
// //         product.slug,
// //         ...product.variants.map((variant) => variant.sku),
// //       ]
// //         .join(" ")
// //         .toLowerCase()
// //         .includes(search.toLowerCase());

// //       const matchesCategory =
// //         category === "all" || product.categoryId === category;

// //       const stock = getTotalStock(product);
// //       const matchesStock =
// //         stockFilter === "All stock" ||
// //         (stockFilter === "In stock" && stock > 5) ||
// //         (stockFilter === "Low stock" && stock > 0 && stock <= 5) ||
// //         (stockFilter === "Out of stock" && stock === 0);

// //       return matchesSearch && matchesCategory && matchesStock;
// //     });
// //   }, [products, search, category, stockFilter]);

// //   const totalValue = products.reduce(
// //     (total, product) => total + product.price * getTotalStock(product),
// //     0,
// //   );

// //   const lowStockCount = products.filter((product) => {
// //     const stock = getTotalStock(product);
// //     return stock > 0 && stock <= 5;
// //   }).length;

// //   const outOfStockCount = products.filter(
// //     (product) => getTotalStock(product) === 0,
// //   ).length;

// //   const addProduct = (event: FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();

// //     const price = Number(newPrice);
// //     const stock = Number(newStock);
// //     const name = newName.trim();

// //     if (
// //       !name ||
// //       !Number.isFinite(price) ||
// //       price <= 0 ||
// //       !Number.isInteger(stock) ||
// //       stock < 0
// //     ) {
// //       return;
// //     }

// //     const id = String(
// //       Math.max(0, ...products.map((product) => Number(product.id) || 0)) + 1,
// //     );

// //     const slug = name
// //       .toLowerCase()
// //       .trim()
// //       .replace(/[^a-z0-9]+/g, "-")
// //       .replace(/^-|-$/g, "");

// //     const categoryId =
// //       categories.find((item) => item.name === newCategory)?.id ?? "sarees";

// //     const product: Product = {
// //       id,
// //       name,
// //       slug,
// //       description: "",
// //       categoryId,
// //       price,
// //       images: [],
// //       variants: [
// //         {
// //           id: `variant-${id}-1`,
// //           sku: `KAV-${id.padStart(3, "0")}`,
// //           color: "Not specified",
// //           stock,
// //         },
// //       ],
// //       status: "draft",
// //       featured: false,
// //     };

// //     setProducts((current) => [product, ...current]);
// //     setSearch("");
// //     setCategory("all");
// //     setStockFilter("All stock");
// //     setNewName("");
// //     setNewPrice("");
// //     setNewStock("");
// //     setIsAddOpen(false);
// //   };

// //   const removeProduct = (id: string) => {
// //     setProducts((current) => current.filter((product) => product.id !== id));
// //     setDeleteId(null);
// //   };

// //   return (
// //     <div className="space-y-8">
// //       <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
// //         <div>
// //           <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
// //             Store management / Inventory
// //           </p>
// //           <h1 className="text-3xl font-semibold tracking-tight text-ink">
// //             Products
// //           </h1>
// //           <p className="mt-2 text-sm text-muted">
// //             Manage your collection, pricing, and stock levels.
// //           </p>
// //         </div>

// //         <button
// //           type="button"
// //           onClick={() => setIsAddOpen(true)}
// //           className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-clay"
// //         >
// //           <FiPlus size={17} />
// //           Add product
// //         </button>
// //       </header>

// //       <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
// //         <div className="rounded-xl border border-admin-border bg-white p-5">
// //           <div className="flex items-center justify-between">
// //             <p className="text-sm text-muted">Total products</p>
// //             <FiShoppingBag className="text-muted" size={19} />
// //           </div>
// //           <p className="mt-4 text-3xl font-semibold text-ink">
// //             {products.length}
// //           </p>
// //           <p className="mt-2 text-xs text-muted">Across your collections</p>
// //         </div>

// //         <div className="rounded-xl border border-admin-border bg-white p-5">
// //           <div className="flex items-center justify-between">
// //             <p className="text-sm text-muted">Inventory value</p>
// //             <FiArrowUpRight className="text-[#66816b]" size={19} />
// //           </div>
// //           <p className="mt-4 text-2xl font-semibold text-ink">
// //             {formatPrice(totalValue)}
// //           </p>
// //           <p className="mt-2 text-xs text-muted">
// //             Retail value of available stock
// //           </p>
// //         </div>

// //         <div className="rounded-xl border border-admin-border bg-white p-5">
// //           <div className="flex items-center justify-between">
// //             <p className="text-sm text-muted">Low stock</p>
// //             <FiArrowDownRight className="text-[#b17b38]" size={19} />
// //           </div>
// //           <p className="mt-4 text-3xl font-semibold text-ink">
// //             {lowStockCount}
// //           </p>
// //           <p className="mt-2 text-xs text-muted">Products with 1–5 units</p>
// //         </div>

// //         <div className="rounded-xl border border-admin-border bg-white p-5">
// //           <div className="flex items-center justify-between">
// //             <p className="text-sm text-muted">Out of stock</p>
// //             <FiFilter className="text-[#b45e4b]" size={19} />
// //           </div>
// //           <p className="mt-4 text-3xl font-semibold text-ink">
// //             {outOfStockCount}
// //           </p>
// //           <p className="mt-2 text-xs text-muted">Products needing restock</p>
// //         </div>
// //       </section>

// //       <section className="overflow-hidden rounded-xl border border-admin-border bg-white">
// //         <div className="flex flex-col gap-4 border-b border-admin-border p-5 lg:flex-row lg:items-center lg:justify-between">
// //           <div>
// //             <h2 className="text-lg font-semibold text-ink">All products</h2>
// //             <p className="mt-1 text-sm text-muted">
// //               {filteredProducts.length} of {products.length} products shown
// //             </p>
// //           </div>

// //           <div className="flex flex-col gap-3 sm:flex-row">
// //             <div className="flex items-center gap-2 rounded-lg border border-admin-border px-3 sm:w-64">
// //               <FiSearch className="shrink-0 text-muted" size={17} />
// //               <input
// //                 value={search}
// //                 onChange={(event) => setSearch(event.target.value)}
// //                 placeholder="Search products or SKU..."
// //                 aria-label="Search products"
// //                 className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
// //               />
// //               {search && (
// //                 <button
// //                   type="button"
// //                   onClick={() => setSearch("")}
// //                   aria-label="Clear search"
// //                   className="text-muted hover:text-ink"
// //                 >
// //                   <FiX size={16} />
// //                 </button>
// //               )}
// //             </div>

// //             <label className="flex items-center gap-2 rounded-lg border border-admin-border px-3">
// //               <span className="sr-only">Filter by category</span>
// //               <select
// //                 value={category}
// //                 onChange={(event) => setCategory(event.target.value)}
// //                 className="h-10 w-full bg-transparent text-sm text-ink outline-none sm:w-36"
// //               >
// //                 {categories.map((item) => (
// //                   <option key={item.id} value={item.id}>
// //                     {item.name}
// //                   </option>
// //                 ))}
// //               </select>
// //               <FiChevronDown
// //                 className="pointer-events-none text-muted"
// //                 size={15}
// //               />
// //             </label>

// //             <label className="flex items-center gap-2 rounded-lg border border-admin-border px-3">
// //               <span className="sr-only">Filter by stock</span>
// //               <select
// //                 value={stockFilter}
// //                 onChange={(event) => setStockFilter(event.target.value)}
// //                 className="h-10 w-full bg-transparent text-sm text-ink outline-none sm:w-32"
// //               >
// //                 {["All stock", "In stock", "Low stock", "Out of stock"].map(
// //                   (item) => (
// //                     <option key={item} value={item}>
// //                       {item}
// //                     </option>
// //                   ),
// //                 )}
// //               </select>
// //             </label>
// //           </div>
// //         </div>

// //         <div className="overflow-x-auto">
// //           <table className="w-full min-w-[850px] text-left">
// //             <thead className="bg-cream">
// //               <tr className="text-xs uppercase tracking-wider text-muted">
// //                 <th className="px-5 py-4 font-medium">Product</th>
// //                 <th className="px-5 py-4 font-medium">Category</th>
// //                 <th className="px-5 py-4 font-medium">Price</th>
// //                 <th className="px-5 py-4 font-medium">Stock</th>
// //                 <th className="px-5 py-4 font-medium">Status</th>
// //                 <th className="px-5 py-4 text-right font-medium">Actions</th>
// //               </tr>
// //             </thead>

// //             <tbody className="divide-y divide-admin-border">
// //               {filteredProducts.map((product) => {
// //                 const stock = getTotalStock(product);
// //                 const status =
// //                   stock === 0
// //                     ? "Out of stock"
// //                     : stock <= 5
// //                       ? "Low stock"
// //                       : "In stock";
// //                 const categoryName =
// //                   categories.find((item) => item.id === product.categoryId)
// //                     ?.name ?? product.categoryId;
// //                 const primarySku = getPrimarySku(product);

// //                 return (
// //                   <tr
// //                     key={product.id}
// //                     className="transition-colors hover:bg-cream/60"
// //                   >
// //                     <td className="px-5 py-4">
// //                       <div className="flex items-center gap-3">
// //                         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-paper text-sm font-semibold text-ink">
// //                           {getProductInitials(product.name)}
// //                         </div>
// //                         <div>
// //                           <p className="font-medium text-ink">{product.name}</p>
// //                           <p className="mt-1 text-xs text-muted">
// //                             SKU: {primarySku}
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </td>

// //                     <td className="px-5 py-4 text-sm text-muted">
// //                       {categoryName}
// //                     </td>

// //                     <td className="px-5 py-4 text-sm font-medium text-ink">
// //                       {formatPrice(product.price)}
// //                     </td>

// //                     <td className="px-5 py-4 text-sm text-ink">
// //                       {stock} units
// //                     </td>

// //                     <td className="px-5 py-4">
// //                       <span
// //                         className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
// //                           status === "In stock"
// //                             ? "bg-[#e4eee5] text-[#426849]"
// //                             : status === "Low stock"
// //                               ? "bg-[#f7edd9] text-[#8c6428]"
// //                               : "bg-[#f5e4e0] text-[#a14d3d]"
// //                         }`}
// //                       >
// //                         {status}
// //                       </span>
// //                     </td>

// //                     <td className="px-5 py-4">
// //                       <div className="flex items-center justify-end gap-1">
// //                         <button
// //                           type="button"
// //                           title="Product details"
// //                           aria-label={`View ${product.name}`}
// //                           onClick={() =>
// //                             window.alert(
// //                               `${product.name}\nSKU: ${primarySku}\nCategory: ${categoryName}\nPrice: ${formatPrice(product.price)}\nStock: ${stock}`,
// //                             )
// //                           }
// //                           className="rounded-md p-2 text-muted hover:bg-paper hover:text-ink"
// //                         >
// //                           <FiEye size={16} />
// //                         </button>
// //                         <button
// //                           type="button"
// //                           title="Edit product"
// //                           aria-label={`Edit ${product.name}`}
// //                           onClick={() =>
// //                             window.alert(
// //                               "Product editing will be added in the next step.",
// //                             )
// //                           }
// //                           className="rounded-md p-2 text-muted hover:bg-paper hover:text-ink"
// //                         >
// //                           <FiEdit2 size={16} />
// //                         </button>
// //                         <button
// //                           type="button"
// //                           title="Delete product"
// //                           aria-label={`Delete ${product.name}`}
// //                           onClick={() => setDeleteId(product.id)}
// //                           className="rounded-md p-2 text-muted hover:bg-[#f5e4e0] hover:text-[#a14d3d]"
// //                         >
// //                           <FiTrash2 size={16} />
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 );
// //               })}

// //               {filteredProducts.length === 0 && (
// //                 <tr>
// //                   <td colSpan={6} className="px-5 py-16 text-center">
// //                     <FiSearch className="mx-auto mb-3 text-muted" size={24} />
// //                     <p className="font-medium text-ink">No products found</p>
// //                     <p className="mt-1 text-sm text-muted">
// //                       Try changing your search or filters.
// //                     </p>
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         <div className="flex flex-col gap-3 border-t border-admin-border px-5 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
// //           <p>Showing {filteredProducts.length} products</p>
// //           <p>Prices displayed in Nepalese rupees (NPR)</p>
// //         </div>
// //       </section>

// //       {isAddOpen && (
// //         <div
// //           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
// //           onClick={() => setIsAddOpen(false)}
// //         >
// //           <section
// //             role="dialog"
// //             aria-modal="true"
// //             aria-labelledby="add-product-title"
// //             className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
// //             onClick={(event) => event.stopPropagation()}
// //           >
// //             <div className="mb-6 flex items-start justify-between">
// //               <div>
// //                 <h2
// //                   id="add-product-title"
// //                   className="text-xl font-semibold text-ink"
// //                 >
// //                   Add a product
// //                 </h2>
// //                 <p className="mt-1 text-sm text-muted">
// //                   Add a sample item to your current product list.
// //                 </p>
// //               </div>
// //               <button
// //                 type="button"
// //                 onClick={() => setIsAddOpen(false)}
// //                 aria-label="Close form"
// //                 className="rounded-lg p-2 text-muted hover:bg-paper"
// //               >
// //                 <FiX size={18} />
// //               </button>
// //             </div>

// //             <form onSubmit={addProduct} className="space-y-4">
// //               <div>
// //                 <label
// //                   htmlFor="product-name"
// //                   className="mb-1.5 block text-sm font-medium text-ink"
// //                 >
// //                   Product name
// //                 </label>
// //                 <input
// //                   id="product-name"
// //                   required
// //                   value={newName}
// //                   onChange={(event) => setNewName(event.target.value)}
// //                   placeholder="e.g. Floral Silk Saree"
// //                   className="h-11 w-full rounded-lg border border-admin-border px-3 text-sm outline-none focus:border-clay"
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="product-category"
// //                   className="mb-1.5 block text-sm font-medium text-ink"
// //                 >
// //                   Category
// //                 </label>
// //                 <select
// //                   id="product-category"
// //                   value={newCategory}
// //                   onChange={(event) => setNewCategory(event.target.value)}
// //                   className="h-11 w-full rounded-lg border border-admin-border bg-white px-3 text-sm outline-none focus:border-clay"
// //                 >
// //                   {categories.slice(1).map((item) => (
// //                     <option key={item.id} value={item.name}>
// //                       {item.name}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div className="grid gap-4 sm:grid-cols-2">
// //                 <div>
// //                   <label
// //                     htmlFor="product-price"
// //                     className="mb-1.5 block text-sm font-medium text-ink"
// //                   >
// //                     Price (NPR)
// //                   </label>
// //                   <input
// //                     id="product-price"
// //                     required
// //                     type="number"
// //                     min="1"
// //                     step="1"
// //                     value={newPrice}
// //                     onChange={(event) => setNewPrice(event.target.value)}
// //                     placeholder="5000"
// //                     className="h-11 w-full rounded-lg border border-admin-border px-3 text-sm outline-none focus:border-clay"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label
// //                     htmlFor="product-stock"
// //                     className="mb-1.5 block text-sm font-medium text-ink"
// //                   >
// //                     Initial stock
// //                   </label>
// //                   <input
// //                     id="product-stock"
// //                     required
// //                     type="number"
// //                     min="0"
// //                     step="1"
// //                     value={newStock}
// //                     onChange={(event) => setNewStock(event.target.value)}
// //                     placeholder="10"
// //                     className="h-11 w-full rounded-lg border border-admin-border px-3 text-sm outline-none focus:border-clay"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="flex justify-end gap-3 border-t border-admin-border pt-5">
// //                 <button
// //                   type="button"
// //                   onClick={() => setIsAddOpen(false)}
// //                   className="rounded-lg border border-admin-border px-4 py-2.5 text-sm font-medium text-ink hover:bg-cream"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:bg-clay"
// //                 >
// //                   <FiPlus size={16} />
// //                   Add product
// //                 </button>
// //               </div>
// //             </form>
// //           </section>
// //         </div>
// //       )}

// //       {deleteId !== null && (
// //         <div
// //           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
// //           onClick={() => setDeleteId(null)}
// //         >
// //           <section
// //             role="alertdialog"
// //             aria-modal="true"
// //             aria-labelledby="delete-product-title"
// //             className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
// //             onClick={(event) => event.stopPropagation()}
// //           >
// //             <h2
// //               id="delete-product-title"
// //               className="text-lg font-semibold text-ink"
// //             >
// //               Delete this product?
// //             </h2>
// //             <p className="mt-2 text-sm leading-6 text-muted">
// //               This will remove the item from this temporary product list. It
// //               will not delete anything from a database.
// //             </p>
// //             <div className="mt-6 flex justify-end gap-3">
// //               <button
// //                 type="button"
// //                 onClick={() => setDeleteId(null)}
// //                 className="rounded-lg border border-admin-border px-4 py-2.5 text-sm font-medium text-ink hover:bg-cream"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={() => {
// //                   if (deleteId !== null) removeProduct(deleteId);
// //                 }}
// //                 className="rounded-lg bg-[#a14d3d] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#843c30]"
// //               >
// //                 Delete product
// //               </button>
// //             </div>
// //           </section>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProductsPage;

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   FiArrowDownRight,
//   FiArrowUpRight,
//   FiChevronDown,
//   FiEdit2,
//   FiEye,
//   FiFilter,
//   FiPlus,
//   FiSearch,
//   FiShoppingBag,
//   FiTrash2,
//   FiX,
// } from "react-icons/fi";

// import type { Product } from "@/types/product";
// import ProductForm from "@/components/products/ProductForm";

// const getTotalStock = (product: Product) =>
//   product.variants.reduce((total, variant) => total + variant.stock, 0);

// const getPrimarySku = (product: Product) =>
//   product.variants[0]?.sku ?? "No SKU";

// const getProductInitials = (name: string) =>
//   name
//     .split(" ")
//     .slice(0, 2)
//     .map((word) => word[0])
//     .join("")
//     .toUpperCase();

// const initialProducts: Product[] = [
//   {
//     id: "1",
//     name: "Ivory Embroidered Saree",
//     slug: "ivory-embroidered-saree",
//     description: "An elegant ivory saree with intricate embroidery.",
//     categoryId: "sarees",
//     designerId: "designer-001",
//     price: 12900,
//     images: [],
//     variants: [
//       {
//         id: "variant-1",
//         sku: "KAV-SAR-001-IVY-FS",
//         color: "Ivory",
//         stock: 18,
//       },
//     ],
//     status: "published",
//     featured: true,
//     material: "Silk blend",
//     careInstructions: "Dry clean recommended.",
//   },
//   {
//     id: "2",
//     name: "Rose Silk Lehenga",
//     slug: "rose-silk-lehenga",
//     description: "A rose-colored silk lehenga for special occasions.",
//     categoryId: "lehengas",
//     designerId: "designer-002",
//     price: 24500,
//     images: [],
//     variants: [
//       {
//         id: "variant-2",
//         sku: "KAV-LEH-002-ROS-S",
//         color: "Rose",
//         size: "S",
//         stock: 2,
//       },
//       {
//         id: "variant-3",
//         sku: "KAV-LEH-002-ROS-M",
//         color: "Rose",
//         size: "M",
//         stock: 2,
//       },
//     ],
//     status: "published",
//     featured: true,
//     material: "Silk",
//     careInstructions: "Dry clean only.",
//   },
//   {
//     id: "3",
//     name: "Classic Linen Kurti",
//     slug: "classic-linen-kurti",
//     description: "A comfortable linen kurti for everyday wear.",
//     categoryId: "kurtis",
//     designerId: "designer-001",
//     price: 3200,
//     images: [],
//     variants: [
//       {
//         id: "variant-4",
//         sku: "KAV-KUR-003-IVY-S",
//         color: "Ivory",
//         size: "S",
//         stock: 8,
//       },
//       {
//         id: "variant-5",
//         sku: "KAV-KUR-003-IVY-M",
//         color: "Ivory",
//         size: "M",
//         stock: 10,
//       },
//       {
//         id: "variant-6",
//         sku: "KAV-KUR-003-IVY-L",
//         color: "Ivory",
//         size: "L",
//         stock: 8,
//       },
//     ],
//     status: "published",
//     featured: false,
//     material: "Linen",
//     careInstructions: "Gentle machine wash.",
//   },
//   {
//     id: "4",
//     name: "Terracotta Evening Dress",
//     slug: "terracotta-evening-dress",
//     description: "A terracotta evening dress with a refined silhouette.",
//     categoryId: "dresses",
//     designerId: "designer-002",
//     price: 7800,
//     images: [],
//     variants: [
//       {
//         id: "variant-7",
//         sku: "KAV-DRE-004-TER-S",
//         color: "Terracotta",
//         size: "S",
//         stock: 0,
//       },
//       {
//         id: "variant-8",
//         sku: "KAV-DRE-004-TER-M",
//         color: "Terracotta",
//         size: "M",
//         stock: 0,
//       },
//     ],
//     status: "draft",
//     featured: false,
//     material: "Crepe",
//     careInstructions: "Hand wash gently or dry clean.",
//   },
//   {
//     id: "5",
//     name: "Soft Cotton Everyday Top",
//     slug: "soft-cotton-everyday-top",
//     description: "A versatile cotton top for everyday outfits.",
//     categoryId: "tops",
//     price: 1850,
//     images: [],
//     variants: [
//       {
//         id: "variant-9",
//         sku: "KAV-TOP-005-WHT-S",
//         color: "White",
//         size: "S",
//         stock: 12,
//       },
//       {
//         id: "variant-10",
//         sku: "KAV-TOP-005-WHT-M",
//         color: "White",
//         size: "M",
//         stock: 10,
//       },
//       {
//         id: "variant-11",
//         sku: "KAV-TOP-005-WHT-L",
//         color: "White",
//         size: "L",
//         stock: 10,
//       },
//     ],
//     status: "published",
//     featured: false,
//     material: "Cotton",
//     careInstructions: "Machine wash cold.",
//   },
//   {
//     id: "6",
//     name: "Tailored Beige Overcoat",
//     slug: "tailored-beige-overcoat",
//     description: "A tailored beige overcoat with a timeless design.",
//     categoryId: "outerwear",
//     price: 11200,
//     images: [],
//     variants: [
//       {
//         id: "variant-12",
//         sku: "KAV-OUT-006-BEI-S",
//         color: "Beige",
//         size: "S",
//         stock: 3,
//       },
//       {
//         id: "variant-13",
//         sku: "KAV-OUT-006-BEI-M",
//         color: "Beige",
//         size: "M",
//         stock: 4,
//       },
//       {
//         id: "variant-14",
//         sku: "KAV-OUT-006-BEI-L",
//         color: "Beige",
//         size: "L",
//         stock: 2,
//       },
//     ],
//     status: "published",
//     featured: true,
//     material: "Wool blend",
//     careInstructions: "Dry clean only.",
//   },
// ];

// type Category = {
//   id: string;
//   name: string;
// };

// const categories: Category[] = [
//   { id: "all", name: "All categories" },
//   { id: "sarees", name: "Sarees" },
//   { id: "lehengas", name: "Lehengas" },
//   { id: "kurtis", name: "Kurtis" },
//   { id: "dresses", name: "Dresses" },
//   { id: "tops", name: "Tops" },
//   { id: "bottoms", name: "Bottoms" },
//   { id: "jumpsuits", name: "Jumpsuits" },
//   { id: "outerwear", name: "Outerwear" },
// ];

// const formatPrice = (price: number) => `NPR ${price.toLocaleString("en-NP")}`;

// const PRODUCTS_STORAGE_KEY = "kaveri-admin-products-v1";

// const ProductsPage = () => {
//   const [products, setProducts] = useState<Product[]>(initialProducts);
//   const [hasLoadedProducts, setHasLoadedProducts] = useState(false);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [stockFilter, setStockFilter] = useState("All stock");
//   const [isAddOpen, setIsAddOpen] = useState(false);
//   const [editingProductId, setEditingProductId] = useState<string | null>(null);
//   const [deleteId, setDeleteId] = useState<string | null>(null);

//   useEffect(() => {
//     try {
//       const savedProducts = window.localStorage.getItem(PRODUCTS_STORAGE_KEY);
//       if (savedProducts) {
//         const parsed: unknown = JSON.parse(savedProducts);
//         if (Array.isArray(parsed)) setProducts(parsed as Product[]);
//       }
//     } catch (error) {
//       console.error("Could not load saved Kaveri products:", error);
//     } finally {
//       setHasLoadedProducts(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (!hasLoadedProducts) return;
//     try {
//       window.localStorage.setItem(
//         PRODUCTS_STORAGE_KEY,
//         JSON.stringify(products),
//       );
//     } catch (error) {
//       console.error("Could not save Kaveri products:", error);
//       window.alert(
//         "Products could not be saved in this browser. Try using smaller images or remove some images, then try again.",
//       );
//     }
//   }, [products, hasLoadedProducts]);

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchesSearch = [
//         product.name,
//         product.slug,
//         ...product.variants.map((variant) => variant.sku),
//       ]
//         .join(" ")
//         .toLowerCase()
//         .includes(search.toLowerCase());

//       const matchesCategory =
//         category === "all" || product.categoryId === category;

//       const stock = getTotalStock(product);
//       const matchesStock =
//         stockFilter === "All stock" ||
//         (stockFilter === "In stock" && stock > 5) ||
//         (stockFilter === "Low stock" && stock > 0 && stock <= 5) ||
//         (stockFilter === "Out of stock" && stock === 0);

//       return matchesSearch && matchesCategory && matchesStock;
//     });
//   }, [products, search, category, stockFilter]);

//   const totalValue = products.reduce(
//     (total, product) => total + product.price * getTotalStock(product),
//     0,
//   );

//   const lowStockCount = products.filter((product) => {
//     const stock = getTotalStock(product);
//     return stock > 0 && stock <= 5;
//   }).length;

//   const outOfStockCount = products.filter(
//     (product) => getTotalStock(product) === 0,
//   ).length;

//   const addProduct = (draft: Omit<Product, "id">) => {
//     const id = String(
//       Math.max(0, ...products.map((product) => Number(product.id) || 0)) + 1,
//     );

//     const product: Product = {
//       ...draft,
//       id,
//       variants: draft.variants.map((variant, index) => ({
//         ...variant,
//         id: `variant-${id}-${index + 1}`,
//       })),
//     };

//     setProducts((current) => [product, ...current]);
//     setSearch("");
//     setCategory("all");
//     setStockFilter("All stock");
//     setIsAddOpen(false);
//     setEditingProductId(null);
//   };

//   const updateProduct = (draft: Omit<Product, "id">) => {
//     if (editingProductId === null) return;
//     setProducts((current) =>
//       current.map((product) =>
//         product.id === editingProductId
//           ? {
//               ...draft,
//               id: product.id,
//               variants: draft.variants.map((variant, index) => ({
//                 ...variant,
//                 id: `variant-${product.id}-${index + 1}`,
//               })),
//             }
//           : product,
//       ),
//     );
//     setIsAddOpen(false);
//     setEditingProductId(null);
//   };

//   const removeProduct = (id: string) => {
//     setProducts((current) => current.filter((product) => product.id !== id));
//     setDeleteId(null);
//   };

//   const editingProduct = products.find(
//     (product) => product.id === editingProductId,
//   );

//   return (
//     <div className="space-y-8">
//       <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//         <div>
//           <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
//             Store management / Inventory
//           </p>
//           <h1 className="text-3xl font-semibold tracking-tight text-ink">
//             Products
//           </h1>
//           <p className="mt-2 text-sm text-muted">
//             Manage your collection, pricing, and stock levels.
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={() => setIsAddOpen(true)}
//           className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-clay"
//         >
//           <FiPlus size={17} />
//           Add product
//         </button>
//       </header>

//       <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//         <div className="rounded-xl border border-admin-border bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm text-muted">Total products</p>
//             <FiShoppingBag className="text-muted" size={19} />
//           </div>
//           <p className="mt-4 text-3xl font-semibold text-ink">
//             {products.length}
//           </p>
//           <p className="mt-2 text-xs text-muted">Across your collections</p>
//         </div>

//         <div className="rounded-xl border border-admin-border bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm text-muted">Inventory value</p>
//             <FiArrowUpRight className="text-[#66816b]" size={19} />
//           </div>
//           <p className="mt-4 text-2xl font-semibold text-ink">
//             {formatPrice(totalValue)}
//           </p>
//           <p className="mt-2 text-xs text-muted">
//             Retail value of available stock
//           </p>
//         </div>

//         <div className="rounded-xl border border-admin-border bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm text-muted">Low stock</p>
//             <FiArrowDownRight className="text-[#b17b38]" size={19} />
//           </div>
//           <p className="mt-4 text-3xl font-semibold text-ink">
//             {lowStockCount}
//           </p>
//           <p className="mt-2 text-xs text-muted">Products with 1–5 units</p>
//         </div>

//         <div className="rounded-xl border border-admin-border bg-white p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-sm text-muted">Out of stock</p>
//             <FiFilter className="text-[#b45e4b]" size={19} />
//           </div>
//           <p className="mt-4 text-3xl font-semibold text-ink">
//             {outOfStockCount}
//           </p>
//           <p className="mt-2 text-xs text-muted">Products needing restock</p>
//         </div>
//       </section>

//       <section className="overflow-hidden rounded-xl border border-admin-border bg-white">
//         <div className="flex flex-col gap-4 border-b border-admin-border p-5 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <h2 className="text-lg font-semibold text-ink">All products</h2>
//             <p className="mt-1 text-sm text-muted">
//               {filteredProducts.length} of {products.length} products shown
//             </p>
//           </div>

//           <div className="flex flex-col gap-3 sm:flex-row">
//             <div className="flex items-center gap-2 rounded-lg border border-admin-border px-3 sm:w-64">
//               <FiSearch className="shrink-0 text-muted" size={17} />
//               <input
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//                 placeholder="Search products or SKU..."
//                 aria-label="Search products"
//                 className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
//               />
//               {search && (
//                 <button
//                   type="button"
//                   onClick={() => setSearch("")}
//                   aria-label="Clear search"
//                   className="text-muted hover:text-ink"
//                 >
//                   <FiX size={16} />
//                 </button>
//               )}
//             </div>

//             <label className="flex items-center gap-2 rounded-lg border border-admin-border px-3">
//               <span className="sr-only">Filter by category</span>
//               <select
//                 value={category}
//                 onChange={(event) => setCategory(event.target.value)}
//                 className="h-10 w-full bg-transparent text-sm text-ink outline-none sm:w-36"
//               >
//                 {categories.map((item) => (
//                   <option key={item.id} value={item.id}>
//                     {item.name}
//                   </option>
//                 ))}
//               </select>
//               <FiChevronDown
//                 className="pointer-events-none text-muted"
//                 size={15}
//               />
//             </label>

//             <label className="flex items-center gap-2 rounded-lg border border-admin-border px-3">
//               <span className="sr-only">Filter by stock</span>
//               <select
//                 value={stockFilter}
//                 onChange={(event) => setStockFilter(event.target.value)}
//                 className="h-10 w-full bg-transparent text-sm text-ink outline-none sm:w-32"
//               >
//                 {["All stock", "In stock", "Low stock", "Out of stock"].map(
//                   (item) => (
//                     <option key={item} value={item}>
//                       {item}
//                     </option>
//                   ),
//                 )}
//               </select>
//             </label>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[850px] text-left">
//             <thead className="bg-cream">
//               <tr className="text-xs uppercase tracking-wider text-muted">
//                 <th className="px-5 py-4 font-medium">Product</th>
//                 <th className="px-5 py-4 font-medium">Category</th>
//                 <th className="px-5 py-4 font-medium">Price</th>
//                 <th className="px-5 py-4 font-medium">Stock</th>
//                 <th className="px-5 py-4 font-medium">Status</th>
//                 <th className="px-5 py-4 text-right font-medium">Actions</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-admin-border">
//               {filteredProducts.map((product) => {
//                 const stock = getTotalStock(product);
//                 const status =
//                   stock === 0
//                     ? "Out of stock"
//                     : stock <= 5
//                       ? "Low stock"
//                       : "In stock";
//                 const categoryName =
//                   categories.find((item) => item.id === product.categoryId)
//                     ?.name ?? product.categoryId;
//                 const primarySku = getPrimarySku(product);

//                 return (
//                   <tr
//                     key={product.id}
//                     className="transition-colors hover:bg-cream/60"
//                   >
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-paper text-sm font-semibold text-ink">
//                           {getProductInitials(product.name)}
//                         </div>
//                         <div>
//                           <p className="font-medium text-ink">{product.name}</p>
//                           <p className="mt-1 text-xs text-muted">
//                             SKU: {primarySku}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="px-5 py-4 text-sm text-muted">
//                       {categoryName}
//                     </td>

//                     <td className="px-5 py-4 text-sm font-medium text-ink">
//                       {formatPrice(product.price)}
//                     </td>

//                     <td className="px-5 py-4 text-sm text-ink">
//                       {stock} units
//                     </td>

//                     <td className="px-5 py-4">
//                       <span
//                         className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
//                           status === "In stock"
//                             ? "bg-[#e4eee5] text-[#426849]"
//                             : status === "Low stock"
//                               ? "bg-[#f7edd9] text-[#8c6428]"
//                               : "bg-[#f5e4e0] text-[#a14d3d]"
//                         }`}
//                       >
//                         {status}
//                       </span>
//                     </td>

//                     <td className="px-5 py-4">
//                       <div className="flex items-center justify-end gap-1">
//                         <button
//                           type="button"
//                           title="Product details"
//                           aria-label={`View ${product.name}`}
//                           onClick={() =>
//                             window.alert(
//                               `${product.name}\nSKU: ${primarySku}\nCategory: ${categoryName}\nPrice: ${formatPrice(product.price)}\nStock: ${stock}`,
//                             )
//                           }
//                           className="rounded-md p-2 text-muted hover:bg-paper hover:text-ink"
//                         >
//                           <FiEye size={16} />
//                         </button>
//                         <button
//                           type="button"
//                           title="Edit product"
//                           aria-label={`Edit ${product.name}`}
//                           onClick={() => {
//                             setEditingProductId(product.id);
//                             setIsAddOpen(true);
//                           }}
//                           className="rounded-md p-2 text-muted hover:bg-paper hover:text-ink"
//                         >
//                           <FiEdit2 size={16} />
//                         </button>
//                         <button
//                           type="button"
//                           title="Delete product"
//                           aria-label={`Delete ${product.name}`}
//                           onClick={() => setDeleteId(product.id)}
//                           className="rounded-md p-2 text-muted hover:bg-[#f5e4e0] hover:text-[#a14d3d]"
//                         >
//                           <FiTrash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}

//               {filteredProducts.length === 0 && (
//                 <tr>
//                   <td colSpan={6} className="px-5 py-16 text-center">
//                     <FiSearch className="mx-auto mb-3 text-muted" size={24} />
//                     <p className="font-medium text-ink">No products found</p>
//                     <p className="mt-1 text-sm text-muted">
//                       Try changing your search or filters.
//                     </p>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="flex flex-col gap-3 border-t border-admin-border px-5 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
//           <p>Showing {filteredProducts.length} products</p>
//           <p>Prices displayed in Nepalese rupees (NPR)</p>
//         </div>
//       </section>

//       {isAddOpen && (
//         <ProductForm
//           key={editingProduct?.id ?? "new-product"}
//           categories={categories.filter((item) => item.id !== "all")}
//           existingSkus={products
//             .filter((product) => product.id !== editingProductId)
//             .flatMap((product) =>
//               product.variants.map((variant) => variant.sku),
//             )}
//           initialProduct={editingProduct}
//           onCancel={() => {
//             setIsAddOpen(false);
//             setEditingProductId(null);
//           }}
//           onSubmit={editingProduct ? updateProduct : addProduct}
//         />
//       )}

//       {deleteId !== null && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
//           onClick={() => setDeleteId(null)}
//         >
//           <section
//             role="alertdialog"
//             aria-modal="true"
//             aria-labelledby="delete-product-title"
//             className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <h2
//               id="delete-product-title"
//               className="text-lg font-semibold text-ink"
//             >
//               Delete this product?
//             </h2>
//             <p className="mt-2 text-sm leading-6 text-muted">
//               This removes the product from this admin list and the saved copy
//               in this browser. It does not delete anything from a server
//               database.
//             </p>
//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 type="button"
//                 onClick={() => setDeleteId(null)}
//                 className="rounded-lg border border-admin-border px-4 py-2.5 text-sm font-medium text-ink hover:bg-cream"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 onClick={() => {
//                   if (deleteId !== null) removeProduct(deleteId);
//                 }}
//                 className="rounded-lg bg-[#a14d3d] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#843c30]"
//               >
//                 Delete product
//               </button>
//             </div>
//           </section>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductsPage;

"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiChevronDown,
  FiEdit2,
  FiEye,
  FiFilter,
  FiPlus,
  FiSearch,
  FiShoppingBag,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import type { Product } from "@/types/product";
import ProductForm from "@/components/products/ProductForm";

const getTotalStock = (product: Product) =>
  product.variants.reduce((total, variant) => total + variant.stock, 0);

const getPrimarySku = (product: Product) =>
  product.variants[0]?.sku ?? "No SKU";

const getProductInitials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Ivory Embroidered Saree",
    slug: "ivory-embroidered-saree",
    description: "An elegant ivory saree with intricate embroidery.",
    categoryId: "sarees",
    designerId: "designer-001",
    price: 12900,
    images: [],
    variants: [
      {
        id: "variant-1",
        sku: "KAV-SAR-001-IVY-FS",
        color: "Ivory",
        stock: 18,
      },
    ],
    status: "published",
    featured: true,
    material: "Silk blend",
    careInstructions: "Dry clean recommended.",
  },
  {
    id: "2",
    name: "Rose Silk Lehenga",
    slug: "rose-silk-lehenga",
    description: "A rose-colored silk lehenga for special occasions.",
    categoryId: "lehengas",
    designerId: "designer-002",
    price: 24500,
    images: [],
    variants: [
      {
        id: "variant-2",
        sku: "KAV-LEH-002-ROS-S",
        color: "Rose",
        size: "S",
        stock: 2,
      },
      {
        id: "variant-3",
        sku: "KAV-LEH-002-ROS-M",
        color: "Rose",
        size: "M",
        stock: 2,
      },
    ],
    status: "published",
    featured: true,
    material: "Silk",
    careInstructions: "Dry clean only.",
  },
  {
    id: "3",
    name: "Classic Linen Kurti",
    slug: "classic-linen-kurti",
    description: "A comfortable linen kurti for everyday wear.",
    categoryId: "kurtis",
    designerId: "designer-001",
    price: 3200,
    images: [],
    variants: [
      {
        id: "variant-4",
        sku: "KAV-KUR-003-IVY-S",
        color: "Ivory",
        size: "S",
        stock: 8,
      },
      {
        id: "variant-5",
        sku: "KAV-KUR-003-IVY-M",
        color: "Ivory",
        size: "M",
        stock: 10,
      },
      {
        id: "variant-6",
        sku: "KAV-KUR-003-IVY-L",
        color: "Ivory",
        size: "L",
        stock: 8,
      },
    ],
    status: "published",
    featured: false,
    material: "Linen",
    careInstructions: "Gentle machine wash.",
  },
  {
    id: "4",
    name: "Terracotta Evening Dress",
    slug: "terracotta-evening-dress",
    description: "A terracotta evening dress with a refined silhouette.",
    categoryId: "dresses",
    designerId: "designer-002",
    price: 7800,
    images: [],
    variants: [
      {
        id: "variant-7",
        sku: "KAV-DRE-004-TER-S",
        color: "Terracotta",
        size: "S",
        stock: 0,
      },
      {
        id: "variant-8",
        sku: "KAV-DRE-004-TER-M",
        color: "Terracotta",
        size: "M",
        stock: 0,
      },
    ],
    status: "draft",
    featured: false,
    material: "Crepe",
    careInstructions: "Hand wash gently or dry clean.",
  },
  {
    id: "5",
    name: "Soft Cotton Everyday Top",
    slug: "soft-cotton-everyday-top",
    description: "A versatile cotton top for everyday outfits.",
    categoryId: "tops",
    price: 1850,
    images: [],
    variants: [
      {
        id: "variant-9",
        sku: "KAV-TOP-005-WHT-S",
        color: "White",
        size: "S",
        stock: 12,
      },
      {
        id: "variant-10",
        sku: "KAV-TOP-005-WHT-M",
        color: "White",
        size: "M",
        stock: 10,
      },
      {
        id: "variant-11",
        sku: "KAV-TOP-005-WHT-L",
        color: "White",
        size: "L",
        stock: 10,
      },
    ],
    status: "published",
    featured: false,
    material: "Cotton",
    careInstructions: "Machine wash cold.",
  },
  {
    id: "6",
    name: "Tailored Beige Overcoat",
    slug: "tailored-beige-overcoat",
    description: "A tailored beige overcoat with a timeless design.",
    categoryId: "outerwear",
    price: 11200,
    images: [],
    variants: [
      {
        id: "variant-12",
        sku: "KAV-OUT-006-BEI-S",
        color: "Beige",
        size: "S",
        stock: 3,
      },
      {
        id: "variant-13",
        sku: "KAV-OUT-006-BEI-M",
        color: "Beige",
        size: "M",
        stock: 4,
      },
      {
        id: "variant-14",
        sku: "KAV-OUT-006-BEI-L",
        color: "Beige",
        size: "L",
        stock: 2,
      },
    ],
    status: "published",
    featured: true,
    material: "Wool blend",
    careInstructions: "Dry clean only.",
  },
];

type Category = {
  id: string;
  name: string;
};

const categories: Category[] = [
  { id: "all", name: "All categories" },
  { id: "sarees", name: "Sarees" },
  { id: "lehengas", name: "Lehengas" },
  { id: "kurtis", name: "Kurtis" },
  { id: "dresses", name: "Dresses" },
  { id: "tops", name: "Tops" },
  { id: "bottoms", name: "Bottoms" },
  { id: "jumpsuits", name: "Jumpsuits" },
  { id: "outerwear", name: "Outerwear" },
];

const formatPrice = (price: number) => `NPR ${price.toLocaleString("en-NP")}`;

const PRODUCTS_STORAGE_KEY = "kaveri-admin-products-v1";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [hasLoadedProducts, setHasLoadedProducts] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [stockFilter, setStockFilter] = useState("All stock");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [viewingProductId, setViewingProductId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedProducts = window.localStorage.getItem(PRODUCTS_STORAGE_KEY);
      if (savedProducts) {
        const parsed: unknown = JSON.parse(savedProducts);
        if (Array.isArray(parsed)) setProducts(parsed as Product[]);
      }
    } catch (error) {
      console.error("Could not load saved Kaveri products:", error);
    } finally {
      setHasLoadedProducts(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedProducts) return;
    try {
      window.localStorage.setItem(
        PRODUCTS_STORAGE_KEY,
        JSON.stringify(products),
      );
    } catch (error) {
      console.error("Could not save Kaveri products:", error);
      window.alert(
        "Products could not be saved in this browser. Try using smaller images or remove some images, then try again.",
      );
    }
  }, [products, hasLoadedProducts]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = [
        product.name,
        product.slug,
        ...product.variants.map((variant) => variant.sku),
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.categoryId === category;

      const stock = getTotalStock(product);
      const matchesStock =
        stockFilter === "All stock" ||
        (stockFilter === "In stock" && stock > 5) ||
        (stockFilter === "Low stock" && stock > 0 && stock <= 5) ||
        (stockFilter === "Out of stock" && stock === 0);

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [products, search, category, stockFilter]);

  const totalValue = products.reduce(
    (total, product) => total + product.price * getTotalStock(product),
    0,
  );

  const lowStockCount = products.filter((product) => {
    const stock = getTotalStock(product);
    return stock > 0 && stock <= 5;
  }).length;

  const outOfStockCount = products.filter(
    (product) => getTotalStock(product) === 0,
  ).length;

  const addProduct = (draft: Omit<Product, "id">) => {
    const id = String(
      Math.max(0, ...products.map((product) => Number(product.id) || 0)) + 1,
    );

    const product: Product = {
      ...draft,
      id,
      variants: draft.variants.map((variant, index) => ({
        ...variant,
        id: `variant-${id}-${index + 1}`,
      })),
    };

    setProducts((current) => [product, ...current]);
    setSearch("");
    setCategory("all");
    setStockFilter("All stock");
    setIsAddOpen(false);
    setEditingProductId(null);
  };

  const updateProduct = (draft: Omit<Product, "id">) => {
    if (editingProductId === null) return;
    setProducts((current) =>
      current.map((product) =>
        product.id === editingProductId
          ? {
              ...draft,
              id: product.id,
              variants: draft.variants.map((variant, index) => ({
                ...variant,
                id: `variant-${product.id}-${index + 1}`,
              })),
            }
          : product,
      ),
    );
    setIsAddOpen(false);
    setEditingProductId(null);
  };

  const removeProduct = (id: string) => {
    setProducts((current) => current.filter((product) => product.id !== id));
    setDeleteId(null);
  };

  const editingProduct = products.find(
    (product) => product.id === editingProductId,
  );
  const viewingProduct = products.find(
    (product) => product.id === viewingProductId,
  );

  return (
    <div className="space-y-8">
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Store management / Inventory
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ink">
            Products
          </h1>
          <p className="mt-2 text-sm text-muted">
            Manage your collection, pricing, and stock levels.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-clay"
        >
          <FiPlus size={17} />
          Add product
        </button>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-admin-border bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Total products</p>
            <FiShoppingBag className="text-muted" size={19} />
          </div>
          <p className="mt-4 text-3xl font-semibold text-ink">
            {products.length}
          </p>
          <p className="mt-2 text-xs text-muted">Across your collections</p>
        </div>

        <div className="rounded-xl border border-admin-border bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Inventory value</p>
            <FiArrowUpRight className="text-[#66816b]" size={19} />
          </div>
          <p className="mt-4 text-2xl font-semibold text-ink">
            {formatPrice(totalValue)}
          </p>
          <p className="mt-2 text-xs text-muted">
            Retail value of available stock
          </p>
        </div>

        <div className="rounded-xl border border-admin-border bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Low stock</p>
            <FiArrowDownRight className="text-[#b17b38]" size={19} />
          </div>
          <p className="mt-4 text-3xl font-semibold text-ink">
            {lowStockCount}
          </p>
          <p className="mt-2 text-xs text-muted">Products with 1–5 units</p>
        </div>

        <div className="rounded-xl border border-admin-border bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">Out of stock</p>
            <FiFilter className="text-[#b45e4b]" size={19} />
          </div>
          <p className="mt-4 text-3xl font-semibold text-ink">
            {outOfStockCount}
          </p>
          <p className="mt-2 text-xs text-muted">Products needing restock</p>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-admin-border bg-white">
        <div className="flex flex-col gap-4 border-b border-admin-border p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">All products</h2>
            <p className="mt-1 text-sm text-muted">
              {filteredProducts.length} of {products.length} products shown
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded-lg border border-admin-border px-3 sm:w-64">
              <FiSearch className="shrink-0 text-muted" size={17} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products or SKU..."
                aria-label="Search products"
                className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="text-muted hover:text-ink"
                >
                  <FiX size={16} />
                </button>
              )}
            </div>

            <label className="flex items-center gap-2 rounded-lg border border-admin-border px-3">
              <span className="sr-only">Filter by category</span>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-10 w-full bg-transparent text-sm text-ink outline-none sm:w-36"
              >
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <FiChevronDown
                className="pointer-events-none text-muted"
                size={15}
              />
            </label>

            <label className="flex items-center gap-2 rounded-lg border border-admin-border px-3">
              <span className="sr-only">Filter by stock</span>
              <select
                value={stockFilter}
                onChange={(event) => setStockFilter(event.target.value)}
                className="h-10 w-full bg-transparent text-sm text-ink outline-none sm:w-32"
              >
                {["All stock", "In stock", "Low stock", "Out of stock"].map(
                  (item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ),
                )}
              </select>
            </label>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-cream">
              <tr className="text-xs uppercase tracking-wider text-muted">
                <th className="px-5 py-4 font-medium">Product</th>
                <th className="px-5 py-4 font-medium">Category</th>
                <th className="px-5 py-4 font-medium">Price</th>
                <th className="px-5 py-4 font-medium">Stock</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-admin-border">
              {filteredProducts.map((product) => {
                const stock = getTotalStock(product);
                const status =
                  stock === 0
                    ? "Out of stock"
                    : stock <= 5
                      ? "Low stock"
                      : "In stock";
                const categoryName =
                  categories.find((item) => item.id === product.categoryId)
                    ?.name ?? product.categoryId;
                const primarySku = getPrimarySku(product);

                return (
                  <tr
                    key={product.id}
                    className="transition-colors hover:bg-cream/60"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-paper text-sm font-semibold text-ink">
                          {product.images[0] ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={product.images[0]}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            getProductInitials(product.name)
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-ink">{product.name}</p>
                          <p className="mt-1 text-xs text-muted">
                            SKU: {primarySku}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-muted">
                      {categoryName}
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-ink">
                      {formatPrice(product.price)}
                    </td>

                    <td className="px-5 py-4 text-sm text-ink">
                      {stock} units
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                          status === "In stock"
                            ? "bg-[#e4eee5] text-[#426849]"
                            : status === "Low stock"
                              ? "bg-[#f7edd9] text-[#8c6428]"
                              : "bg-[#f5e4e0] text-[#a14d3d]"
                        }`}
                      >
                        {status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          title="Product details"
                          aria-label={`View ${product.name}`}
                          onClick={() => setViewingProductId(product.id)}
                          className="rounded-md p-2 text-muted hover:bg-paper hover:text-ink"
                        >
                          <FiEye size={16} />
                        </button>
                        <button
                          type="button"
                          title="Edit product"
                          aria-label={`Edit ${product.name}`}
                          onClick={() => {
                            setEditingProductId(product.id);
                            setIsAddOpen(true);
                          }}
                          className="rounded-md p-2 text-muted hover:bg-paper hover:text-ink"
                        >
                          <FiEdit2 size={16} />
                        </button>
                        <button
                          type="button"
                          title="Delete product"
                          aria-label={`Delete ${product.name}`}
                          onClick={() => setDeleteId(product.id)}
                          className="rounded-md p-2 text-muted hover:bg-[#f5e4e0] hover:text-[#a14d3d]"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-16 text-center">
                    <FiSearch className="mx-auto mb-3 text-muted" size={24} />
                    <p className="font-medium text-ink">No products found</p>
                    <p className="mt-1 text-sm text-muted">
                      Try changing your search or filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-admin-border px-5 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Showing {filteredProducts.length} products</p>
          <p>Prices displayed in Nepalese rupees (NPR)</p>
        </div>
      </section>

      {viewingProduct && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-3 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setViewingProductId(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-details-title"
            className="my-3 w-full max-w-4xl rounded-2xl bg-white shadow-2xl sm:my-6"
          >
            <header className="sticky top-0 z-10 flex items-start justify-between rounded-t-2xl border-b border-admin-border bg-white px-5 py-4 sm:px-7">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  Inventory management
                </p>
                <h2
                  id="product-details-title"
                  className="mt-1 text-xl font-semibold text-ink sm:text-2xl"
                >
                  Product details
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Review product information, images, and stock variants.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setViewingProductId(null)}
                aria-label="Close product details"
                className="rounded-lg p-2 text-muted transition hover:bg-paper hover:text-ink"
              >
                <FiX size={19} />
              </button>
            </header>
            <div className="space-y-5 p-4 sm:p-6">
              <section className="rounded-xl border border-admin-border p-4 sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row">
                  {viewingProduct.images[0] ? (
                    <div className="w-full shrink-0 sm:w-44">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={viewingProduct.images[0]}
                        alt={viewingProduct.name}
                        className="aspect-[4/5] w-full rounded-lg bg-cream object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/5] w-full shrink-0 items-center justify-center rounded-lg bg-cream text-3xl font-semibold text-muted sm:w-44">
                      {getProductInitials(viewingProduct.name)}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-ink">
                          {viewingProduct.name}
                        </h3>
                        <p className="mt-1 break-all text-sm text-muted">
                          /{viewingProduct.slug}
                        </p>
                      </div>
                      <span className="rounded-full bg-paper px-3 py-1 text-xs font-medium capitalize text-ink">
                        {viewingProduct.status}
                      </span>
                    </div>
                    <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-muted">
                      {viewingProduct.description || "No description added."}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                      <div>
                        <p className="text-xs text-muted">Price</p>
                        <p className="mt-1 font-semibold text-ink">
                          {formatPrice(viewingProduct.price)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Sale price</p>
                        <p className="mt-1 font-semibold text-ink">
                          {viewingProduct.salePrice
                            ? formatPrice(viewingProduct.salePrice)
                            : "—"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Total stock</p>
                        <p className="mt-1 font-semibold text-ink">
                          {getTotalStock(viewingProduct)} units
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Category</p>
                        <p className="mt-1 font-medium text-ink">
                          {categories.find(
                            (item) => item.id === viewingProduct.categoryId,
                          )?.name ?? viewingProduct.categoryId}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Designer ID</p>
                        <p className="mt-1 break-all font-medium text-ink">
                          {viewingProduct.designerId || "—"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Material</p>
                        <p className="mt-1 font-medium text-ink">
                          {viewingProduct.material || "—"}
                        </p>
                      </div>
                    </div>
                    {viewingProduct.careInstructions && (
                      <div className="mt-4 rounded-lg bg-cream p-3">
                        <p className="text-xs font-medium text-muted">
                          Care instructions
                        </p>
                        <p className="mt-1 text-sm text-ink">
                          {viewingProduct.careInstructions}
                        </p>
                      </div>
                    )}
                    {viewingProduct.featured && (
                      <p className="mt-3 text-xs font-medium text-clay">
                        Featured product
                      </p>
                    )}
                  </div>
                </div>
              </section>
              <section className="rounded-xl border border-admin-border p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-ink">Images</h3>
                  <span className="text-xs text-muted">
                    {viewingProduct.images.length} image(s)
                  </span>
                </div>
                {viewingProduct.images.length ? (
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                    {viewingProduct.images.map((src, index) => (
                      <div
                        key={`${index}-${src.slice(0, 24)}`}
                        className="overflow-hidden rounded-lg border border-admin-border"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={`${viewingProduct.name} image ${index + 1}`}
                          className="aspect-square w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-muted">
                    No product images added.
                  </p>
                )}
              </section>
              <section className="rounded-xl border border-admin-border p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-ink">
                    Variants and inventory
                  </h3>
                  <span className="text-xs text-muted">
                    {viewingProduct.variants.length} variant(s)
                  </span>
                </div>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead className="bg-cream text-xs uppercase tracking-wider text-muted">
                      <tr>
                        <th className="px-3 py-3 font-medium">SKU</th>
                        <th className="px-3 py-3 font-medium">Color</th>
                        <th className="px-3 py-3 font-medium">Size</th>
                        <th className="px-3 py-3 text-right font-medium">
                          Stock
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-admin-border">
                      {viewingProduct.variants.map((variant) => (
                        <tr key={variant.id}>
                          <td className="px-3 py-3 font-medium text-ink">
                            {variant.sku}
                          </td>
                          <td className="px-3 py-3 text-ink">
                            {variant.color}
                          </td>
                          <td className="px-3 py-3 text-muted">
                            {variant.size || "Free size"}
                          </td>
                          <td className="px-3 py-3 text-right text-ink">
                            {variant.stock}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <footer className="flex flex-col-reverse gap-3 border-t border-admin-border px-5 py-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setViewingProductId(null)}
                className="rounded-lg border border-admin-border px-5 py-2.5 text-sm font-medium text-ink hover:bg-cream"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setViewingProductId(null);
                  setEditingProductId(viewingProduct.id);
                  setIsAddOpen(true);
                }}
                className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-clay"
              >
                Edit product
              </button>
            </footer>
          </section>
        </div>
      )}

      {isAddOpen && (
        <ProductForm
          key={editingProduct?.id ?? "new-product"}
          categories={categories.filter((item) => item.id !== "all")}
          existingSkus={products
            .filter((product) => product.id !== editingProductId)
            .flatMap((product) =>
              product.variants.map((variant) => variant.sku),
            )}
          initialProduct={editingProduct}
          onCancel={() => {
            setIsAddOpen(false);
            setEditingProductId(null);
          }}
          onSubmit={editingProduct ? updateProduct : addProduct}
        />
      )}

      {deleteId !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setDeleteId(null)}
        >
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-product-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="delete-product-title"
              className="text-lg font-semibold text-ink"
            >
              Delete this product?
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              This removes the product from this admin list and the saved copy
              in this browser. It does not delete anything from a server
              database.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteId(null)}
                className="rounded-lg border border-admin-border px-4 py-2.5 text-sm font-medium text-ink hover:bg-cream"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (deleteId !== null) removeProduct(deleteId);
                }}
                className="rounded-lg bg-[#a14d3d] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#843c30]"
              >
                Delete product
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
