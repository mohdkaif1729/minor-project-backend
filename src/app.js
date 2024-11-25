import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

console.log("cors_origin:", process.env.CORS_ORIGIN);

const app = express();
const upload = multer();

// middlewares
app.use(upload.none());

app.use(
  cors({
    origin: [
      "https://minor-project-frontend-sandy.vercel.app",
      "https://minor-project-crown.vercel.app",
      "http://localhost:4000",
      "http://127.0.0.1:5500",
    ],
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello, world</h1>");
});

export default app;
