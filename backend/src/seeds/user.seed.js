import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

config();

const seedUsers = [
  {
    email: "arjun.mehta@gmail.com",
    fullName: "Arjun Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    email: "sara.sharma@gmail.com",
    fullName: "Sara Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    email: "rahul.verma@gmail.com",
    fullName: "Rahul Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    email: "ananya.iyer@gmail.com",
    fullName: "Ananya Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    email: "kabir.nair@gmail.com",
    fullName: "Kabir Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    email: "meera.kapoor@gmail.com",
    fullName: "Meera Kapoor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    email: "dev.shah@gmail.com",
    fullName: "Dev Shah",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    email: "riya.patel@gmail.com",
    fullName: "Riya Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    email: "yash.jain@gmail.com",
    fullName: "Yash Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    email: "isha.desai@gmail.com",
    fullName: "Isha Desai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    email: "om.patil@gmail.com",
    fullName: "Om Patil",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    email: "diya.nair@gmail.com",
    fullName: "Diya Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    email: "krish.deshmukh@gmail.com",
    fullName: "Krish Deshmukh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    email: "aanya.reddy@gmail.com",
    fullName: "Aanya Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    email: "veer.saxena@gmail.com",
    fullName: "Veer Saxena",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.deleteMany({});

    const hashedUsers = await Promise.all(
      seedUsers.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10),
      }))
    );

    await User.insertMany(hashedUsers);

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();