import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nmongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;

// (async () => {
//   try {
//     const connectionString = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     app.on("error", (error) => {
//       console.log("ERROR: server not interact with Database index.js", error);
//       throw error;
//     });

//     app.listen(8000, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//       console.log(`mongoDB is Connected: ${connectionString}`);
//     });
//   } catch (error) {
//     console.log("ERROR: mongoDB connection faild index.js", error);
//   }
// })();
