// "use client";

// import { useState, type ChangeEvent, type FormEvent } from "react";
// import { FiImage, FiPlus, FiTrash2, FiUploadCloud, FiX } from "react-icons/fi";
// import type { Product, ProductVariant } from "@/types/product";

// type CategoryOption = {
//   id: string;
//   name: string;
// };

// type ProductDraft = Omit<Product, "id">;

// type VariantDraft = {
//   rowId: string;
//   sku: string;
//   color: string;
//   size: string;
//   stock: string;
// };

// type ProductFormProps = {
//   categories: CategoryOption[];
//   onCancel: () => void;
//   onSubmit: (product: ProductDraft) => void;
//   existingSkus: string[];
//   initialProduct?: Product;
// };

// const fieldClass =
//   "mt-1.5 h-11 w-full rounded-lg border border-admin-border bg-white px-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-clay focus:ring-2 focus:ring-clay/10";
// const labelClass = "block text-sm font-medium text-ink";
// const sectionClass = "rounded-xl border border-admin-border p-4 sm:p-5";

// const makeSlug = (value: string) =>
//   value
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");

// const makeSku = (name: string, color: string, size: string, index: number) => {
//   const productPart =
//     makeSlug(name)
//       .split("-")
//       .filter(Boolean)
//       .slice(0, 2)
//       .join("-")
//       .toUpperCase() || "ITEM";
//   const colorPart =
//     makeSlug(color).replace(/-/g, "").toUpperCase().slice(0, 4) || "STD";
//   const sizePart = makeSlug(size).replace(/-/g, "").toUpperCase() || "FS";
//   return `KAV-${productPart}-${colorPart}-${sizePart}-${String(index + 1).padStart(2, "0")}`;
// };

// const fileToDataUrl = (file: File) =>
//   new Promise<string>((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       if (typeof reader.result === "string") resolve(reader.result);
//       else reject(new Error("Could not read this image."));
//     };
//     reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
//     reader.readAsDataURL(file);
//   });

// const ProductForm = ({
//   categories,
//   onCancel,
//   onSubmit,
//   existingSkus,
//   initialProduct,
// }: ProductFormProps) => {
//   const [name, setName] = useState(initialProduct?.name ?? "");
//   const [slug, setSlug] = useState(initialProduct?.slug ?? "");
//   const [slugEdited, setSlugEdited] = useState(Boolean(initialProduct));
//   const [description, setDescription] = useState(
//     initialProduct?.description ?? "",
//   );
//   const [categoryId, setCategoryId] = useState(
//     initialProduct?.categoryId ?? categories[0]?.id ?? "",
//   );
//   const [designerId, setDesignerId] = useState(
//     initialProduct?.designerId ?? "",
//   );
//   const [price, setPrice] = useState(
//     initialProduct ? String(initialProduct.price) : "",
//   );
//   const [salePrice, setSalePrice] = useState(
//     initialProduct?.salePrice !== undefined
//       ? String(initialProduct.salePrice)
//       : "",
//   );
//   const [material, setMaterial] = useState(initialProduct?.material ?? "");
//   const [careInstructions, setCareInstructions] = useState(
//     initialProduct?.careInstructions ?? "",
//   );
//   const [status, setStatus] = useState<Product["status"]>(
//     initialProduct?.status ?? "draft",
//   );
//   const [featured, setFeatured] = useState(initialProduct?.featured ?? false);
//   const [images, setImages] = useState<string[]>(initialProduct?.images ?? []);
//   const [imageError, setImageError] = useState("");
//   const [isReadingImages, setIsReadingImages] = useState(false);
//   const [formError, setFormError] = useState("");
//   const [variants, setVariants] = useState<VariantDraft[]>(
//     initialProduct?.variants.length
//       ? initialProduct.variants.map((variant) => ({
//           rowId: variant.id,
//           sku: variant.sku,
//           color: variant.color,
//           size: variant.size ?? "",
//           stock: String(variant.stock),
//         }))
//       : [{ rowId: "row-1", sku: "", color: "", size: "", stock: "0" }],
//   );

//   const updateName = (value: string) => {
//     setName(value);
//     if (!slugEdited) setSlug(makeSlug(value));
//   };

//   const updateVariant = (
//     rowId: string,
//     field: keyof Omit<VariantDraft, "rowId">,
//     value: string,
//   ) => {
//     setVariants((current) =>
//       current.map((variant) => {
//         if (variant.rowId !== rowId) return variant;
//         return { ...variant, [field]: value };
//       }),
//     );
//   };

//   const addVariant = () => {
//     setVariants((current) => {
//       const index = current.length;
//       return [
//         ...current,
//         {
//           rowId: `row-${Date.now()}-${index}`,
//           sku: "",
//           color: "",
//           size: "",
//           stock: "0",
//         },
//       ];
//     });
//   };

//   const removeVariant = (rowId: string) => {
//     setVariants((current) =>
//       current.filter((variant) => variant.rowId !== rowId),
//     );
//   };

//   const handleImageSelection = async (event: ChangeEvent<HTMLInputElement>) => {
//     const selectedFiles = Array.from(event.target.files ?? []);
//     event.target.value = "";
//     setImageError("");
//     if (selectedFiles.length === 0) return;

//     if (images.length + selectedFiles.length > 6) {
//       setImageError("You can add up to 6 product images.");
//       return;
//     }

//     const invalidFile = selectedFiles.find(
//       (file) => !file.type.startsWith("image/") || file.size > 5 * 1024 * 1024,
//     );
//     if (invalidFile) {
//       setImageError(
//         "Choose image files only. Each image must be 5 MB or smaller.",
//       );
//       return;
//     }

//     setIsReadingImages(true);
//     try {
//       const dataUrls = await Promise.all(selectedFiles.map(fileToDataUrl));
//       setImages((current) => [...current, ...dataUrls].slice(0, 6));
//     } catch {
//       setImageError("One or more images could not be read. Please try again.");
//     } finally {
//       setIsReadingImages(false);
//     }
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setFormError("");

//     const numericPrice = Number(price);
//     const numericSalePrice =
//       salePrice.trim() === "" ? undefined : Number(salePrice);
//     if (!name.trim() || !slug.trim() || !categoryId) {
//       setFormError("Enter a product name, slug, and category.");
//       return;
//     }
//     if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
//       setFormError("Regular price must be greater than zero.");
//       return;
//     }
//     if (
//       numericSalePrice !== undefined &&
//       (!Number.isFinite(numericSalePrice) ||
//         numericSalePrice <= 0 ||
//         numericSalePrice >= numericPrice)
//     ) {
//       setFormError(
//         "Sale price must be greater than zero and lower than the regular price.",
//       );
//       return;
//     }
//     if (variants.length === 0) {
//       setFormError("Add at least one product variant.");
//       return;
//     }

//     const normalizedVariants: ProductVariant[] = [];
//     const seenSkus = new Set(existingSkus.map((sku) => sku.toUpperCase()));
//     for (let index = 0; index < variants.length; index += 1) {
//       const variant = variants[index];
//       const sku = (
//         variant.sku.trim() || makeSku(name, variant.color, variant.size, index)
//       ).toUpperCase();
//       const stock = Number(variant.stock);
//       if (!variant.color.trim()) {
//         setFormError(`Enter a color for variant ${index + 1}.`);
//         return;
//       }
//       if (!Number.isInteger(stock) || stock < 0) {
//         setFormError(
//           `Stock for variant ${index + 1} must be a whole number of zero or more.`,
//         );
//         return;
//       }
//       if (seenSkus.has(sku)) {
//         setFormError(
//           `SKU ${sku} is already in use. Every variant needs a unique SKU.`,
//         );
//         return;
//       }
//       seenSkus.add(sku);
//       normalizedVariants.push({
//         id: `new-variant-${index + 1}`,
//         sku,
//         color: variant.color.trim(),
//         ...(variant.size.trim() ? { size: variant.size.trim() } : {}),
//         stock,
//       });
//     }

//     onSubmit({
//       name: name.trim(),
//       slug: makeSlug(slug),
//       description: description.trim(),
//       categoryId,
//       ...(designerId.trim() ? { designerId: designerId.trim() } : {}),
//       price: numericPrice,
//       ...(numericSalePrice !== undefined
//         ? { salePrice: numericSalePrice }
//         : {}),
//       images,
//       variants: normalizedVariants,
//       status,
//       featured,
//       ...(material.trim() ? { material: material.trim() } : {}),
//       ...(careInstructions.trim()
//         ? { careInstructions: careInstructions.trim() }
//         : {}),
//     });
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-3 sm:p-6"
//       onMouseDown={(event) => {
//         if (event.target === event.currentTarget) onCancel();
//       }}
//     >
//       <section
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="product-form-title"
//         className="my-3 w-full max-w-4xl rounded-2xl bg-cream shadow-2xl sm:my-6"
//       >
//         <header className="sticky top-0 z-10 flex items-start justify-between rounded-t-2xl border-b border-admin-border bg-white px-5 py-4 sm:px-7">
//           <div>
//             <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
//               Inventory management
//             </p>
//             <h2
//               id="product-form-title"
//               className="mt-1 text-xl font-semibold text-ink sm:text-2xl"
//             >
//               {initialProduct ? "Edit product" : "Add a product"}
//             </h2>
//             <p className="mt-1 text-sm text-muted">
//               {initialProduct
//                 ? "Update product information and variants."
//                 : "Create a product and define its variants."}
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={onCancel}
//             aria-label="Close form"
//             className="rounded-lg p-2 text-muted transition hover:bg-paper hover:text-ink"
//           >
//             <FiX size={19} />
//           </button>
//         </header>

//         <form onSubmit={handleSubmit} className="space-y-4 p-4 sm:p-6">
//           <section className={sectionClass}>
//             <h3 className="font-semibold text-ink">Basic information</h3>
//             <div className="mt-4 grid gap-4 sm:grid-cols-2">
//               <div>
//                 <label className={labelClass} htmlFor="product-name">
//                   Product name *
//                 </label>
//                 <input
//                   id="product-name"
//                   required
//                   maxLength={120}
//                   value={name}
//                   onChange={(event) => updateName(event.target.value)}
//                   placeholder="e.g. Floral Silk Saree"
//                   className={fieldClass}
//                 />
//               </div>
//               <div>
//                 <label className={labelClass} htmlFor="product-slug">
//                   URL slug *
//                 </label>
//                 <input
//                   id="product-slug"
//                   required
//                   value={slug}
//                   onChange={(event) => {
//                     setSlugEdited(true);
//                     setSlug(event.target.value);
//                   }}
//                   placeholder="floral-silk-saree"
//                   className={fieldClass}
//                 />
//                 <p className="mt-1 text-xs text-muted">
//                   Used in the product URL.
//                 </p>
//               </div>
//               <div>
//                 <label className={labelClass} htmlFor="product-category">
//                   Category *
//                 </label>
//                 <select
//                   id="product-category"
//                   required
//                   value={categoryId}
//                   onChange={(event) => setCategoryId(event.target.value)}
//                   className={fieldClass}
//                 >
//                   {categories.map((category) => (
//                     <option key={category.id} value={category.id}>
//                       {category.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className={labelClass} htmlFor="product-designer">
//                   Designer ID (optional)
//                 </label>
//                 <input
//                   id="product-designer"
//                   value={designerId}
//                   onChange={(event) => setDesignerId(event.target.value)}
//                   placeholder="e.g. designer-001"
//                   className={fieldClass}
//                 />
//                 <p className="mt-1 text-xs text-muted">
//                   We can replace this with a designer dropdown when that module
//                   exists.
//                 </p>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className={labelClass} htmlFor="product-description">
//                   Description
//                 </label>
//                 <textarea
//                   id="product-description"
//                   rows={3}
//                   maxLength={3000}
//                   value={description}
//                   onChange={(event) => setDescription(event.target.value)}
//                   placeholder="Describe the fabric, fit, occasion, and details..."
//                   className="mt-1.5 w-full rounded-lg border border-admin-border bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-clay focus:ring-2 focus:ring-clay/10"
//                 />
//               </div>
//             </div>
//           </section>

//           <section className={sectionClass}>
//             <h3 className="font-semibold text-ink">Pricing and details</h3>
//             <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//               <div>
//                 <label className={labelClass} htmlFor="product-price">
//                   Regular price (NPR) *
//                 </label>
//                 <input
//                   id="product-price"
//                   required
//                   type="number"
//                   min="1"
//                   step="1"
//                   value={price}
//                   onChange={(event) => setPrice(event.target.value)}
//                   placeholder="12900"
//                   className={fieldClass}
//                 />
//               </div>
//               <div>
//                 <label className={labelClass} htmlFor="product-sale-price">
//                   Sale price (NPR)
//                 </label>
//                 <input
//                   id="product-sale-price"
//                   type="number"
//                   min="1"
//                   step="1"
//                   value={salePrice}
//                   onChange={(event) => setSalePrice(event.target.value)}
//                   placeholder="Optional"
//                   className={fieldClass}
//                 />
//               </div>
//               <div>
//                 <label className={labelClass} htmlFor="product-material">
//                   Material
//                 </label>
//                 <input
//                   id="product-material"
//                   value={material}
//                   onChange={(event) => setMaterial(event.target.value)}
//                   placeholder="e.g. Silk blend"
//                   className={fieldClass}
//                 />
//               </div>
//               <div>
//                 <label className={labelClass} htmlFor="product-status">
//                   Status
//                 </label>
//                 <select
//                   id="product-status"
//                   value={status}
//                   onChange={(event) =>
//                     setStatus(event.target.value as Product["status"])
//                   }
//                   className={fieldClass}
//                 >
//                   <option value="draft">Draft</option>
//                   <option value="published">Published</option>
//                   <option value="archived">Archived</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2 lg:col-span-4">
//                 <label className={labelClass} htmlFor="product-care">
//                   Care instructions
//                 </label>
//                 <textarea
//                   id="product-care"
//                   rows={2}
//                   value={careInstructions}
//                   onChange={(event) => setCareInstructions(event.target.value)}
//                   placeholder="e.g. Dry clean only."
//                   className="mt-1.5 w-full rounded-lg border border-admin-border bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-clay focus:ring-2 focus:ring-clay/10"
//                 />
//               </div>
//               <label className="flex items-center gap-3 rounded-lg bg-white px-3 py-3 text-sm text-ink sm:col-span-2 lg:col-span-4">
//                 <input
//                   type="checkbox"
//                   checked={featured}
//                   onChange={(event) => setFeatured(event.target.checked)}
//                   className="h-4 w-4 accent-[#a85f4b]"
//                 />
//                 Feature this product in the storefront
//               </label>
//             </div>
//           </section>

//           <section className={sectionClass}>
//             <div className="flex flex-wrap items-start justify-between gap-3">
//               <div>
//                 <h3 className="font-semibold text-ink">Product variants</h3>
//                 <p className="mt-1 text-sm text-muted">
//                   Each color/size combination has its own SKU and stock.
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 onClick={addVariant}
//                 className="inline-flex items-center gap-2 rounded-lg border border-admin-border bg-white px-3 py-2 text-sm font-medium text-ink transition hover:bg-paper"
//               >
//                 <FiPlus size={16} /> Add variant
//               </button>
//             </div>
//             <div className="mt-4 space-y-3">
//               {variants.map((variant, index) => (
//                 <div
//                   key={variant.rowId}
//                   className="rounded-lg border border-admin-border bg-white p-3 sm:p-4"
//                 >
//                   <div className="mb-3 flex items-center justify-between">
//                     <p className="text-sm font-medium text-ink">
//                       Variant {index + 1}
//                     </p>
//                     {variants.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeVariant(variant.rowId)}
//                         aria-label={`Remove variant ${index + 1}`}
//                         className="rounded-md p-2 text-muted transition hover:bg-[#f5e4e0] hover:text-[#a14d3d]"
//                       >
//                         <FiTrash2 size={15} />
//                       </button>
//                     )}
//                   </div>
//                   <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//                     <div>
//                       <label
//                         className={labelClass}
//                         htmlFor={`variant-color-${variant.rowId}`}
//                       >
//                         Color *
//                       </label>
//                       <input
//                         id={`variant-color-${variant.rowId}`}
//                         required
//                         value={variant.color}
//                         onChange={(event) =>
//                           updateVariant(
//                             variant.rowId,
//                             "color",
//                             event.target.value,
//                           )
//                         }
//                         placeholder="Ivory"
//                         className={fieldClass}
//                       />
//                     </div>
//                     <div>
//                       <label
//                         className={labelClass}
//                         htmlFor={`variant-size-${variant.rowId}`}
//                       >
//                         Size
//                       </label>
//                       <input
//                         id={`variant-size-${variant.rowId}`}
//                         value={variant.size}
//                         onChange={(event) =>
//                           updateVariant(
//                             variant.rowId,
//                             "size",
//                             event.target.value,
//                           )
//                         }
//                         placeholder="S, M, L or Free size"
//                         className={fieldClass}
//                       />
//                     </div>
//                     <div>
//                       <label
//                         className={labelClass}
//                         htmlFor={`variant-stock-${variant.rowId}`}
//                       >
//                         Stock *
//                       </label>
//                       <input
//                         id={`variant-stock-${variant.rowId}`}
//                         required
//                         type="number"
//                         min="0"
//                         step="1"
//                         value={variant.stock}
//                         onChange={(event) =>
//                           updateVariant(
//                             variant.rowId,
//                             "stock",
//                             event.target.value,
//                           )
//                         }
//                         className={fieldClass}
//                       />
//                     </div>
//                     <div>
//                       <label
//                         className={labelClass}
//                         htmlFor={`variant-sku-${variant.rowId}`}
//                       >
//                         SKU *
//                       </label>
//                       <input
//                         id={`variant-sku-${variant.rowId}`}
//                         required
//                         value={
//                           variant.sku ||
//                           makeSku(name, variant.color, variant.size, index)
//                         }
//                         onChange={(event) =>
//                           updateVariant(
//                             variant.rowId,
//                             "sku",
//                             event.target.value.toUpperCase(),
//                           )
//                         }
//                         placeholder="Auto-generated SKU"
//                         className={fieldClass}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className={sectionClass}>
//             <div>
//               <h3 className="font-semibold text-ink">Product images</h3>
//               <p className="mt-1 text-sm text-muted">
//                 Select up to 6 images, 5 MB each. These are local previews only;
//                 no upload service is connected yet.
//               </p>
//             </div>
//             <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-admin-border bg-white px-4 py-7 text-center transition hover:border-clay hover:bg-[#fbf8f3]">
//               <FiUploadCloud size={25} className="text-clay" />
//               <span className="mt-2 text-sm font-medium text-ink">
//                 Choose product images
//               </span>
//               <span className="mt-1 text-xs text-muted">
//                 PNG, JPG, WEBP · up to 6 images
//               </span>
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleImageSelection}
//                 className="sr-only"
//               />
//             </label>
//             {isReadingImages && (
//               <p className="mt-2 text-sm text-muted">Reading images…</p>
//             )}
//             {imageError && (
//               <p role="alert" className="mt-2 text-sm text-[#a14d3d]">
//                 {imageError}
//               </p>
//             )}
//             {images.length > 0 ? (
//               <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
//                 {images.map((src, index) => (
//                   <div
//                     key={`${index}-${src.slice(0, 24)}`}
//                     className="relative overflow-hidden rounded-lg border border-admin-border bg-white"
//                   >
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={src}
//                       alt={`Product preview ${index + 1}`}
//                       className="aspect-square w-full object-cover"
//                     />
//                     {index === 0 && (
//                       <span className="absolute bottom-2 left-2 rounded bg-ink/80 px-2 py-1 text-[10px] font-medium text-white">
//                         Primary
//                       </span>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setImages((current) =>
//                           current.filter(
//                             (_, imageIndex) => imageIndex !== index,
//                           ),
//                         )
//                       }
//                       aria-label={`Remove image ${index + 1}`}
//                       className="absolute right-2 top-2 rounded-full bg-white/95 p-1.5 text-ink shadow hover:text-[#a14d3d]"
//                     >
//                       <FiX size={14} />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="mt-3 flex items-center gap-2 text-sm text-muted">
//                 <FiImage size={16} /> No images selected yet.
//               </div>
//             )}
//           </section>

//           {formError && (
//             <p
//               role="alert"
//               className="rounded-lg border border-[#e6c4bd] bg-[#fbefec] px-4 py-3 text-sm text-[#963f31]"
//             >
//               {formError}
//             </p>
//           )}

//           <footer className="flex flex-col-reverse gap-3 border-t border-admin-border pt-4 sm:flex-row sm:justify-end">
//             <button
//               type="button"
//               onClick={onCancel}
//               className="rounded-lg border border-admin-border bg-white px-5 py-3 text-sm font-medium text-ink transition hover:bg-paper"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={isReadingImages}
//               className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-clay disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {initialProduct ? (
//                 "Save changes"
//               ) : (
//                 <>
//                   <FiPlus size={16} /> Create product
//                 </>
//               )}
//             </button>
//           </footer>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default ProductForm;

"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { FiImage, FiPlus, FiTrash2, FiUploadCloud, FiX } from "react-icons/fi";
import type { Product, ProductVariant } from "@/types/product";

type CategoryOption = {
  id: string;
  name: string;
};

type ProductDraft = Omit<Product, "id">;

type VariantDraft = {
  rowId: string;
  sku: string;
  color: string;
  size: string;
  stock: string;
};

type ProductFormProps = {
  categories: CategoryOption[];
  onCancel: () => void;
  onSubmit: (product: ProductDraft) => void;
  existingSkus: string[];
  initialProduct?: Product;
};

const fieldClass =
  "mt-1.5 h-11 w-full rounded-lg border border-admin-border bg-white px-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-clay focus:ring-2 focus:ring-clay/10";
const labelClass = "block text-sm font-medium text-ink";
const sectionClass = "rounded-xl border border-admin-border p-4 sm:p-5";

const makeSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const makeSku = (name: string, color: string, size: string, index: number) => {
  const productPart =
    makeSlug(name)
      .split("-")
      .filter(Boolean)
      .slice(0, 2)
      .join("-")
      .toUpperCase() || "ITEM";
  const colorPart =
    makeSlug(color).replace(/-/g, "").toUpperCase().slice(0, 4) || "STD";
  const sizePart = makeSlug(size).replace(/-/g, "").toUpperCase() || "FS";
  return `KAV-${productPart}-${colorPart}-${sizePart}-${String(index + 1).padStart(2, "0")}`;
};

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("Could not read this image."));
    };
    reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
    reader.readAsDataURL(file);
  });

const ProductForm = ({
  categories,
  onCancel,
  onSubmit,
  existingSkus,
  initialProduct,
}: ProductFormProps) => {
  const [name, setName] = useState(initialProduct?.name ?? "");
  const [slug, setSlug] = useState(initialProduct?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(Boolean(initialProduct));
  const [description, setDescription] = useState(
    initialProduct?.description ?? "",
  );
  const [categoryId, setCategoryId] = useState(
    initialProduct?.categoryId ?? categories[0]?.id ?? "",
  );
  const [designerId, setDesignerId] = useState(
    initialProduct?.designerId ?? "",
  );
  const [price, setPrice] = useState(
    initialProduct ? String(initialProduct.price) : "",
  );
  const [salePrice, setSalePrice] = useState(
    initialProduct?.salePrice !== undefined
      ? String(initialProduct.salePrice)
      : "",
  );
  const [material, setMaterial] = useState(initialProduct?.material ?? "");
  const [careInstructions, setCareInstructions] = useState(
    initialProduct?.careInstructions ?? "",
  );
  const [status, setStatus] = useState<Product["status"]>(
    initialProduct?.status ?? "draft",
  );
  const [featured, setFeatured] = useState(initialProduct?.featured ?? false);
  const [images, setImages] = useState<string[]>(initialProduct?.images ?? []);
  const [imageError, setImageError] = useState("");
  const [isReadingImages, setIsReadingImages] = useState(false);
  const [formError, setFormError] = useState("");
  const [variants, setVariants] = useState<VariantDraft[]>(
    initialProduct?.variants.length
      ? initialProduct.variants.map((variant) => ({
          rowId: variant.id,
          sku: variant.sku,
          color: variant.color,
          size: variant.size ?? "",
          stock: String(variant.stock),
        }))
      : [{ rowId: "row-1", sku: "", color: "", size: "", stock: "0" }],
  );

  const updateName = (value: string) => {
    setName(value);
    if (!slugEdited) setSlug(makeSlug(value));
  };

  const updateVariant = (
    rowId: string,
    field: keyof Omit<VariantDraft, "rowId">,
    value: string,
  ) => {
    setVariants((current) =>
      current.map((variant) => {
        if (variant.rowId !== rowId) return variant;
        return { ...variant, [field]: value };
      }),
    );
  };

  const addVariant = () => {
    setVariants((current) => {
      const index = current.length;
      return [
        ...current,
        {
          rowId: `row-${Date.now()}-${index}`,
          sku: "",
          color: "",
          size: "",
          stock: "0",
        },
      ];
    });
  };

  const removeVariant = (rowId: string) => {
    setVariants((current) =>
      current.filter((variant) => variant.rowId !== rowId),
    );
  };

  const handleImageSelection = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    event.target.value = "";
    setImageError("");
    if (selectedFiles.length === 0) return;

    if (images.length + selectedFiles.length > 6) {
      setImageError("You can add up to 6 product images.");
      return;
    }

    const invalidFile = selectedFiles.find(
      (file) => !file.type.startsWith("image/") || file.size > 5 * 1024 * 1024,
    );
    if (invalidFile) {
      setImageError(
        "Choose image files only. Each image must be 5 MB or smaller.",
      );
      return;
    }

    setIsReadingImages(true);
    try {
      const dataUrls = await Promise.all(selectedFiles.map(fileToDataUrl));
      setImages((current) => [...current, ...dataUrls].slice(0, 6));
    } catch {
      setImageError("One or more images could not be read. Please try again.");
    } finally {
      setIsReadingImages(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const numericPrice = Number(price);
    const numericSalePrice =
      salePrice.trim() === "" ? undefined : Number(salePrice);
    if (!name.trim() || !slug.trim() || !categoryId) {
      setFormError("Enter a product name, slug, and category.");
      return;
    }
    if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
      setFormError("Regular price must be greater than zero.");
      return;
    }
    if (
      numericSalePrice !== undefined &&
      (!Number.isFinite(numericSalePrice) ||
        numericSalePrice <= 0 ||
        numericSalePrice >= numericPrice)
    ) {
      setFormError(
        "Sale price must be greater than zero and lower than the regular price.",
      );
      return;
    }
    if (variants.length === 0) {
      setFormError("Add at least one product variant.");
      return;
    }

    const normalizedVariants: ProductVariant[] = [];
    const seenSkus = new Set(existingSkus.map((sku) => sku.toUpperCase()));
    for (let index = 0; index < variants.length; index += 1) {
      const variant = variants[index];
      const sku = (
        variant.sku.trim() || makeSku(name, variant.color, variant.size, index)
      ).toUpperCase();
      const stock = Number(variant.stock);
      if (!variant.color.trim()) {
        setFormError(`Enter a color for variant ${index + 1}.`);
        return;
      }
      if (!Number.isInteger(stock) || stock < 0) {
        setFormError(
          `Stock for variant ${index + 1} must be a whole number of zero or more.`,
        );
        return;
      }
      if (seenSkus.has(sku)) {
        setFormError(
          `SKU ${sku} is already in use. Every variant needs a unique SKU.`,
        );
        return;
      }
      seenSkus.add(sku);
      normalizedVariants.push({
        id: `new-variant-${index + 1}`,
        sku,
        color: variant.color.trim(),
        ...(variant.size.trim() ? { size: variant.size.trim() } : {}),
        stock,
      });
    }

    onSubmit({
      name: name.trim(),
      slug: makeSlug(slug),
      description: description.trim(),
      categoryId,
      ...(designerId.trim() ? { designerId: designerId.trim() } : {}),
      price: numericPrice,
      ...(numericSalePrice !== undefined
        ? { salePrice: numericSalePrice }
        : {}),
      images,
      variants: normalizedVariants,
      status,
      featured,
      ...(material.trim() ? { material: material.trim() } : {}),
      ...(careInstructions.trim()
        ? { careInstructions: careInstructions.trim() }
        : {}),
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onCancel();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-form-title"
        className="my-3 w-full max-w-4xl rounded-2xl bg-cream shadow-2xl sm:my-6"
      >
        <header className="sticky top-0 z-10 flex items-start justify-between rounded-t-2xl border-b border-admin-border bg-white px-5 py-4 sm:px-7">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Inventory management
            </p>
            <h2
              id="product-form-title"
              className="mt-1 text-xl font-semibold text-ink sm:text-2xl"
            >
              {initialProduct ? "Edit product" : "Add a product"}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {initialProduct
                ? "Update product information and variants."
                : "Create a product and define its variants."}
            </p>
          </div>
          <button
            type="button"
            onClick={onCancel}
            aria-label="Close form"
            className="rounded-lg p-2 text-muted transition hover:bg-paper hover:text-ink"
          >
            <FiX size={19} />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4 p-4 sm:p-6">
          <section className={sectionClass}>
            <h3 className="font-semibold text-ink">Basic information</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="product-name">
                  Product name *
                </label>
                <input
                  id="product-name"
                  required
                  maxLength={120}
                  value={name}
                  onChange={(event) => updateName(event.target.value)}
                  placeholder="e.g. Floral Silk Saree"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="product-slug">
                  URL slug *
                </label>
                <input
                  id="product-slug"
                  required
                  value={slug}
                  onChange={(event) => {
                    setSlugEdited(true);
                    setSlug(event.target.value);
                  }}
                  placeholder="floral-silk-saree"
                  className={fieldClass}
                />
                <p className="mt-1 text-xs text-muted">
                  Used in the product URL.
                </p>
              </div>
              <div>
                <label className={labelClass} htmlFor="product-category">
                  Category *
                </label>
                <select
                  id="product-category"
                  required
                  value={categoryId}
                  onChange={(event) => setCategoryId(event.target.value)}
                  className={fieldClass}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="product-designer">
                  Designer ID (optional)
                </label>
                <input
                  id="product-designer"
                  value={designerId}
                  onChange={(event) => setDesignerId(event.target.value)}
                  placeholder="e.g. designer-001"
                  className={fieldClass}
                />
                <p className="mt-1 text-xs text-muted">
                  We can replace this with a designer dropdown when that module
                  exists.
                </p>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="product-description">
                  Description
                </label>
                <textarea
                  id="product-description"
                  rows={3}
                  maxLength={3000}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Describe the fabric, fit, occasion, and details..."
                  className="mt-1.5 w-full rounded-lg border border-admin-border bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-clay focus:ring-2 focus:ring-clay/10"
                />
              </div>
            </div>
          </section>

          <section className={sectionClass}>
            <h3 className="font-semibold text-ink">Pricing and details</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label className={labelClass} htmlFor="product-price">
                  Regular price (NPR) *
                </label>
                <input
                  id="product-price"
                  required
                  type="number"
                  min="1"
                  step="1"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  placeholder="12900"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="product-sale-price">
                  Sale price (NPR)
                </label>
                <input
                  id="product-sale-price"
                  type="number"
                  min="1"
                  step="1"
                  value={salePrice}
                  onChange={(event) => setSalePrice(event.target.value)}
                  placeholder="Optional"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="product-material">
                  Material
                </label>
                <input
                  id="product-material"
                  value={material}
                  onChange={(event) => setMaterial(event.target.value)}
                  placeholder="e.g. Silk blend"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="product-status">
                  Status
                </label>
                <select
                  id="product-status"
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value as Product["status"])
                  }
                  className={fieldClass}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div className="sm:col-span-2 lg:col-span-4">
                <label className={labelClass} htmlFor="product-care">
                  Care instructions
                </label>
                <textarea
                  id="product-care"
                  rows={2}
                  value={careInstructions}
                  onChange={(event) => setCareInstructions(event.target.value)}
                  placeholder="e.g. Dry clean only."
                  className="mt-1.5 w-full rounded-lg border border-admin-border bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-clay focus:ring-2 focus:ring-clay/10"
                />
              </div>
              <label className="flex items-center gap-3 rounded-lg bg-white px-3 py-3 text-sm text-ink sm:col-span-2 lg:col-span-4">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(event) => setFeatured(event.target.checked)}
                  className="h-4 w-4 accent-[#a85f4b]"
                />
                Feature this product in the storefront
              </label>
            </div>
          </section>

          <section className={sectionClass}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-ink">Product variants</h3>
                <p className="mt-1 text-sm text-muted">
                  Each color/size combination has its own SKU and stock.
                </p>
              </div>
              <button
                type="button"
                onClick={addVariant}
                className="inline-flex items-center gap-2 rounded-lg border border-admin-border bg-white px-3 py-2 text-sm font-medium text-ink transition hover:bg-paper"
              >
                <FiPlus size={16} /> Add variant
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {variants.map((variant, index) => (
                <div
                  key={variant.rowId}
                  className="rounded-lg border border-admin-border bg-white p-3 sm:p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-medium text-ink">
                      Variant {index + 1}
                    </p>
                    {variants.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeVariant(variant.rowId)}
                        aria-label={`Remove variant ${index + 1}`}
                        className="rounded-md p-2 text-muted transition hover:bg-[#f5e4e0] hover:text-[#a14d3d]"
                      >
                        <FiTrash2 size={15} />
                      </button>
                    )}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <label
                        className={labelClass}
                        htmlFor={`variant-color-${variant.rowId}`}
                      >
                        Color *
                      </label>
                      <input
                        id={`variant-color-${variant.rowId}`}
                        required
                        value={variant.color}
                        onChange={(event) =>
                          updateVariant(
                            variant.rowId,
                            "color",
                            event.target.value,
                          )
                        }
                        placeholder="Ivory"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        className={labelClass}
                        htmlFor={`variant-size-${variant.rowId}`}
                      >
                        Size
                      </label>
                      <input
                        id={`variant-size-${variant.rowId}`}
                        value={variant.size}
                        onChange={(event) =>
                          updateVariant(
                            variant.rowId,
                            "size",
                            event.target.value,
                          )
                        }
                        placeholder="S, M, L or Free size"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        className={labelClass}
                        htmlFor={`variant-stock-${variant.rowId}`}
                      >
                        Stock *
                      </label>
                      <input
                        id={`variant-stock-${variant.rowId}`}
                        required
                        type="number"
                        min="0"
                        step="1"
                        value={variant.stock}
                        onChange={(event) =>
                          updateVariant(
                            variant.rowId,
                            "stock",
                            event.target.value,
                          )
                        }
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        className={labelClass}
                        htmlFor={`variant-sku-${variant.rowId}`}
                      >
                        SKU *
                      </label>
                      <input
                        id={`variant-sku-${variant.rowId}`}
                        required
                        value={
                          variant.sku ||
                          makeSku(name, variant.color, variant.size, index)
                        }
                        onChange={(event) =>
                          updateVariant(
                            variant.rowId,
                            "sku",
                            event.target.value.toUpperCase(),
                          )
                        }
                        placeholder="Auto-generated SKU"
                        className={fieldClass}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={sectionClass}>
            <div>
              <h3 className="font-semibold text-ink">Product images</h3>
              <p className="mt-1 text-sm text-muted">
                Select up to 6 images, 5 MB each. These are local previews only;
                no upload service is connected yet.
              </p>
            </div>
            <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-admin-border bg-white px-4 py-7 text-center transition hover:border-clay hover:bg-[#fbf8f3]">
              <FiUploadCloud size={25} className="text-clay" />
              <span className="mt-2 text-sm font-medium text-ink">
                Choose product images
              </span>
              <span className="mt-1 text-xs text-muted">
                PNG, JPG, WEBP · up to 6 images
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageSelection}
                className="sr-only"
              />
            </label>
            {isReadingImages && (
              <p className="mt-2 text-sm text-muted">Reading images…</p>
            )}
            {imageError && (
              <p role="alert" className="mt-2 text-sm text-[#a14d3d]">
                {imageError}
              </p>
            )}
            {images.length > 0 ? (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {images.map((src, index) => (
                  <div
                    key={`${index}-${src.slice(0, 24)}`}
                    className="relative overflow-hidden rounded-lg border border-admin-border bg-white"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Product preview ${index + 1}`}
                      className="aspect-square w-full object-cover"
                    />
                    {index === 0 && (
                      <span className="absolute bottom-2 left-2 rounded bg-ink/80 px-2 py-1 text-[10px] font-medium text-white">
                        Primary
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setImages((current) =>
                          current.filter(
                            (_, imageIndex) => imageIndex !== index,
                          ),
                        )
                      }
                      aria-label={`Remove image ${index + 1}`}
                      className="absolute right-2 top-2 rounded-full bg-white/95 p-1.5 text-ink shadow hover:text-[#a14d3d]"
                    >
                      <FiX size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 flex items-center gap-2 text-sm text-muted">
                <FiImage size={16} /> No images selected yet.
              </div>
            )}
          </section>

          {formError && (
            <p
              role="alert"
              className="rounded-lg border border-[#e6c4bd] bg-[#fbefec] px-4 py-3 text-sm text-[#963f31]"
            >
              {formError}
            </p>
          )}

          <footer className="flex flex-col-reverse gap-3 border-t border-admin-border pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-admin-border bg-white px-5 py-3 text-sm font-medium text-ink transition hover:bg-paper"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isReadingImages}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-clay disabled:cursor-not-allowed disabled:opacity-60"
            >
              {initialProduct ? (
                "Save changes"
              ) : (
                <>
                  <FiPlus size={16} /> Create product
                </>
              )}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
};

export default ProductForm;
