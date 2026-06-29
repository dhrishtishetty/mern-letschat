import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "alice.parker@example.com",
    fullName: "Alice Parker",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    email: "ethan.walker@example.com",
    fullName: "Ethan Walker",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    email: "grace.hall@example.com",
    fullName: "Grace Hall",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    email: "noah.harris@example.com",
    fullName: "Noah Harris",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    email: "zoe.mitchell@example.com",
    fullName: "Zoe Mitchell",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    email: "logan.scott@example.com",
    fullName: "Logan Scott",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    email: "lily.evans@example.com",
    fullName: "Lily Evans",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    email: "jack.turner@example.com",
    fullName: "Jack Turner",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    email: "hannah.cooper@example.com",
    fullName: "Hannah Cooper",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    email: "owen.adams@example.com",
    fullName: "Owen Adams",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    email: "natalie.ward@example.com",
    fullName: "Natalie Ward",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    email: "caleb.brooks@example.com",
    fullName: "Caleb Brooks",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    email: "ella.morgan@example.com",
    fullName: "Ella Morgan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    email: "ryan.foster@example.com",
    fullName: "Ryan Foster",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    email: "chloe.bennett@example.com",
    fullName: "Chloe Bennett",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();