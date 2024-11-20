import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: ".env",
});

connectDB();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, world</h1>");
});
