import express from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  (req, res) => {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);
    res.json({ ok: true, body: req.body, files: req.files });
  }
);



export default router;
