import { model, Schema } from "mongoose";

import { IUser } from "../types/user.type";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<IUser>("user", userSchema);
