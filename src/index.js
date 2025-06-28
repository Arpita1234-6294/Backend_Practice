import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: './.env'
});

const app = express();

(async () => {
  try {
    await connectDB();

    app.on("error", (err) => {
      console.error("❌ Server error:", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`✅ Server listening on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("❌ Startup error:", error);
    process.exit(1);
  }

  app.get("/", (req, res) => {
  res.send("Hello, your server is up and MongoDB is connected!");
});

})();
