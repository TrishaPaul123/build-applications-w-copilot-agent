import { Schema, model } from 'mongoose';

export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default model<IUser>('User', userSchema);
