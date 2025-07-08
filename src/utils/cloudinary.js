import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // ✅ typo fixed
    });

    console.log("File uploaded successfully:", response.url);

    // Optional: remove the local file after upload
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove file if upload fails
    fs.unlinkSync(localFilePath);
    return null;
  }
};

// ✅ Correct export
export { uploadOnCloudinary };
