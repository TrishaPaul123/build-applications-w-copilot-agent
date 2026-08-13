import { Schema, model } from 'mongoose';

export interface ILeaderboard {
  _id?: string;
  userId?: string;
  teamId?: string;
  totalActivities: number;
  totalCaloriesBurned: number;
  totalDistance: number;
  rank: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    teamId: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      default: null,
    },
    totalActivities: {
      type: Number,
      default: 0,
    },
    totalCaloriesBurned: {
      type: Number,
      default: 0,
    },
    totalDistance: {
      type: Number,
      default: 0,
    },
    rank: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default model<ILeaderboard>('Leaderboard', leaderboardSchema);
