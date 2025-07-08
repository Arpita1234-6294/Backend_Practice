import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";


export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);
  if (fullName == "") {
    throw new ApiError(400, "fullName is required!");
  }
  {
    throw new ApiError(400,"All fields are required")
  }

 const existedUser= username.findOne({
$or: [{username},{email}]


  })

  if(existedUser){
    throw new ApiError(409,"User with email or username already exist!")

  }

  const avatarLocalPath= req.files?.avatar[0]?.path
  const coverImageLocalPath = req.files?.coverImage[0]?.
  path;
  if(!avatarLocalPath){
    throw new ApiError(400,"Avatar is required!")
  }

  const user = await User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage?.url||"",
    email,
    password,
    username:username.toLowerCase()
  })

  const createUser = await User.findById(user_id).select(
    "-password -refreshToken"
  )

  if(!createdUser){
    throw new ApiError(500, "Somethinf went wrong while registering the user")

  }

  return res.status(201).json(
    new ApiResponse(200,createdUser,"User registered Successfully!")
  )
});
