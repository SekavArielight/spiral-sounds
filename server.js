import express from "express";
import { productsRouter } from "./routes/products.js";

const app = express();
const PORT = 8000;

app.use(express.static("public"));

app.use("/api/products", productsRouter)

app
  .listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Failed to start server", err);
  });
