import { Schema, model } from 'mongoose';

export interface IWorkout {
  _id?: string;
  userId?: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: number; // in minutes
  caloriesBurned: number;
  exercises: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    estimatedDuration: {
      type: Number,
      required: true,
    },
    caloriesBurned: {
      type: Number,
      required: true,
    },
    exercises: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default model<IWorkout>('Workout', workoutSchema);
