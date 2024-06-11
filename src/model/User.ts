import mongoose, { Schema, Document } from "mongoose";

//schema for message
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

// schema for user
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
    minlength: 4,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
  }, // regex for email validation
  password: { 
    type: String, 
    required: [true, "Password is required"] 
  },
  verifyCode: { 
    type: String, 
    required: [true, "Verify Code is required"] 
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify Code Expiry is required"],
  },
  isVerified: { 
    type: Boolean, 
    default: false ,
  },
  isAcceptingMessages: { 
    type: Boolean, 
    default: true ,
  },
  messages: [MessageSchema],
}
)

// exporting the model

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema); 
// if model already exists, use it, else create a new one
// as nextjs dont know if the model is already created or not, so we need to check if it exists or not

export default UserModel

