import express from "express";

const app = express();

const PORT = Number(process.env.PORT) || 4001;

app.use(express.json());

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  {
    id: "p1",
    name: "Elegant Silk Saree",
    category: "Sarees",
    price: 8500,
    inStock: true,
  },
  {
    id: "p2",
    name: "Embroidered Lehenga",
    category: "Lehengas",
    price: 14500,
    inStock: true,
  },
  {
    id: "p3",
    name: "Classic Kurti",
    category: "Kurtis",
    price: 2500,
    inStock: false,
  },
];

app.get("/health", (_, res) => {
  res.status(200).json({
    status: "ok",
    service: "product-service",
    message: "Product Service is running",
  });
});

app.get("/api/products", (_, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item.id === req.params.id);

  if (!product) {
    res.status(404).json({
      message: "Product not found",
    });
    return;
    x``;
  }

  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`Product Service running at http://localhost:${PORT}`);
});
