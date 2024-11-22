import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(
        `server is running on url: http://localhost:${process.env.PORT || 9000}`
      );
    });
  })
  .catch((error) => {
    console.log("mongo DB connection failed !!!", error);
  });
