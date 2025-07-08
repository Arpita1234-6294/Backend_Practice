// Example basic server setup
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import userRouter from "./routes/user.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url, req.headers['content-type']);
  next();
});

// ✅ Add body parser middleware for JSON
app.use(express.json());

// ✅ Example POST route
app.post("/api/v1/users/register", (req, res) => {
  console.log("Request body:", req.body);
  res.json({ message: "Registration is working!", body: req.body });
});

(async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`✅ Server is running at Port: ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup error:", err);
    process.exit(1);
  }

  app.get("/test", (req, res) => {
  console.log("GET /test route hit!");
  res.send("Test route working!");
});

})();
