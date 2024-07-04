import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });






const app = express();
app.use(express.json());





const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}... `);
});


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
