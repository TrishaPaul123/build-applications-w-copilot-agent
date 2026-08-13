import { Schema, model } from 'mongoose';

export interface ITeam {
  _id?: string;
  name: string;
  description?: string;
  members: string[]; // User IDs
  createdBy: string; // User ID
  createdAt?: Date;
  updatedAt?: Date;
}

const teamSchema = new Schema<ITeam>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ITeam>('Team', teamSchema);
