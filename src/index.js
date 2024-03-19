// require("dotenv").config({path: './env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

connectDB();

/*Approach 1*/
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("Server error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Error: ", err);
    throw err;
  }
})();
*/
