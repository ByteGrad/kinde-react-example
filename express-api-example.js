import { protectRoute } from "@kinde-oss/kinde-node-express";

// node / express example
app.get("/api/stocks", protectRoute, (req, res) => {
  res.json([
    {
      stock: "AAPL",
      price: 100,
    },
    {
      stock: "GOOGL",
      price: 2000,
    },
  ]);
});
