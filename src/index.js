import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`App is listening on port ${process.env.PORT || 9000} `);
    });
  })
  .catch((error) => {
    console.log("mongo DB connection failed !!!", error);
  });
