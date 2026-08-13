import { Schema, model } from 'mongoose';

export interface IActivity {
  _id?: string;
  userId: string;
  activityType: string;
  duration: number; // in minutes
  caloriesBurned: number;
  distance?: number; // in km
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    activityType: {
      type: String,
      required: true,
      enum: ['running', 'cycling', 'swimming', 'yoga', 'weightlifting', 'walking', 'other'],
    },
    duration: {
      type: Number,
      required: true,
    },
    caloriesBurned: {
      type: Number,
      required: true,
    },
    distance: {
      type: Number,
      default: null,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export default model<IActivity>('Activity', activitySchema);
