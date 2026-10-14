export type ProductVariant = {
  id: string;
  sku: string;
  color: string;
  size?: string;
  stock: number;
  price?: number;
  salePrice?: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;

  categoryId: string;
  designerId?: string;

  price: number;
  salePrice?: number;

  images: string[];
  variants: ProductVariant[];

  status: "draft" | "published" | "archived";
  featured: boolean;

  material?: string;
  careInstructions?: string;

  createdAt?: string;
  updatedAt?: string;
};
