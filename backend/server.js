import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import paymentRoutes from "./routes/payment.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/payment", paymentRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
