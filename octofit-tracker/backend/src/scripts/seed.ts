import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    // Clear existing data
    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Leaderboard.deleteMany({});
    await Workout.deleteMany({});
    console.log('Cleared existing data');

    // Create sample users
    const users = await User.insertMany([
      {
        username: 'alice_fitness',
        email: 'alice@example.com',
        password: 'hashedpassword123',
        profilePicture: 'https://i.pravatar.cc/150?img=1',
      },
      {
        username: 'bob_runner',
        email: 'bob@example.com',
        password: 'hashedpassword123',
        profilePicture: 'https://i.pravatar.cc/150?img=2',
      },
      {
        username: 'charlie_cyclist',
        email: 'charlie@example.com',
        password: 'hashedpassword123',
        profilePicture: 'https://i.pravatar.cc/150?img=3',
      },
      {
        username: 'diana_swimmer',
        email: 'diana@example.com',
        password: 'hashedpassword123',
        profilePicture: 'https://i.pravatar.cc/150?img=4',
      },
      {
        username: 'eve_yogi',
        email: 'eve@example.com',
        password: 'hashedpassword123',
        profilePicture: 'https://i.pravatar.cc/150?img=5',
      },
    ]);
    console.log(`✅ Created ${users.length} users`);

    // Create sample teams
    const teams = await Team.insertMany([
      {
        name: 'Cardio Crushers',
        description: 'Team focused on cardio exercises',
        members: [users[0]._id, users[1]._id],
        createdBy: users[0]._id,
      },
      {
        name: 'Strength Squad',
        description: 'Team focused on strength training',
        members: [users[2]._id, users[3]._id],
        createdBy: users[2]._id,
      },
      {
        name: 'Wellness Warriors',
        description: 'Team focused on overall wellness',
        members: [users[4]._id],
        createdBy: users[4]._id,
      },
    ]);
    console.log(`✅ Created ${teams.length} teams`);

    // Create sample activities
    const activities = await Activity.insertMany([
      {
        userId: users[0]._id,
        activityType: 'running',
        duration: 30,
        caloriesBurned: 350,
        distance: 5,
        notes: 'Morning run in the park',
      },
      {
        userId: users[1]._id,
        activityType: 'running',
        duration: 45,
        caloriesBurned: 450,
        distance: 7.5,
        notes: 'Speed training session',
      },
      {
        userId: users[2]._id,
        activityType: 'cycling',
        duration: 60,
        caloriesBurned: 500,
        distance: 25,
        notes: 'Mountain trail cycling',
      },
      {
        userId: users[3]._id,
        activityType: 'swimming',
        duration: 45,
        caloriesBurned: 400,
        distance: 2,
        notes: 'Lap swimming at the pool',
      },
      {
        userId: users[4]._id,
        activityType: 'yoga',
        duration: 60,
        caloriesBurned: 200,
        notes: 'Vinyasa flow class',
      },
      {
        userId: users[0]._id,
        activityType: 'weightlifting',
        duration: 45,
        caloriesBurned: 350,
        notes: 'Upper body strength training',
      },
    ]);
    console.log(`✅ Created ${activities.length} activities`);

    // Create leaderboard entries
    const leaderboards = await Leaderboard.insertMany([
      {
        userId: users[0]._id,
        totalActivities: 2,
        totalCaloriesBurned: 700,
        totalDistance: 5,
        rank: 1,
      },
      {
        userId: users[1]._id,
        totalActivities: 1,
        totalCaloriesBurned: 450,
        totalDistance: 7.5,
        rank: 2,
      },
      {
        userId: users[2]._id,
        totalActivities: 1,
        totalCaloriesBurned: 500,
        totalDistance: 25,
        rank: 3,
      },
      {
        teamId: teams[0]._id,
        totalActivities: 3,
        totalCaloriesBurned: 800,
        totalDistance: 12.5,
        rank: 1,
      },
      {
        teamId: teams[1]._id,
        totalActivities: 2,
        totalCaloriesBurned: 900,
        totalDistance: 27,
        rank: 2,
      },
    ]);
    console.log(`✅ Created ${leaderboards.length} leaderboard entries`);

    // Create sample workouts
    const workouts = await Workout.insertMany([
      {
        title: 'Beginner Running Routine',
        description: 'Perfect for those starting their running journey',
        difficulty: 'beginner',
        estimatedDuration: 30,
        caloriesBurned: 300,
        exercises: ['Warm-up', 'Light running', 'Cool-down stretch'],
      },
      {
        title: 'HIIT Cardio Blast',
        description: 'High-intensity interval training for maximum calorie burn',
        difficulty: 'advanced',
        estimatedDuration: 20,
        caloriesBurned: 400,
        exercises: [
          'Jumping jacks',
          'Burpees',
          'Mountain climbers',
          'High knees',
          'Rest intervals',
        ],
      },
      {
        title: 'Core Strength Builder',
        description: 'Strengthen your core with these proven exercises',
        difficulty: 'intermediate',
        estimatedDuration: 25,
        caloriesBurned: 250,
        exercises: ['Planks', 'Crunches', 'Leg raises', 'Russian twists'],
      },
      {
        title: 'Yoga Flow for Relaxation',
        description: 'Gentle yoga to reduce stress and improve flexibility',
        difficulty: 'beginner',
        estimatedDuration: 45,
        caloriesBurned: 150,
        exercises: ['Sun salutation', 'Warrior poses', 'Meditation', 'Savasana'],
      },
      {
        title: 'Full Body Weight Training',
        description: 'Complete strength training routine for all muscle groups',
        difficulty: 'intermediate',
        estimatedDuration: 60,
        caloriesBurned: 450,
        exercises: [
          'Squats',
          'Bench press',
          'Deadlifts',
          'Pull-ups',
          'Dumbbell rows',
        ],
      },
    ]);
    console.log(`✅ Created ${workouts.length} workouts`);

    console.log('\n✨ Database seeding complete!');
    console.log(`\nSeeded collections:`);
    console.log(`  • Users: ${users.length}`);
    console.log(`  • Teams: ${teams.length}`);
    console.log(`  • Activities: ${activities.length}`);
    console.log(`  • Leaderboard entries: ${leaderboards.length}`);
    console.log(`  • Workouts: ${workouts.length}`);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
