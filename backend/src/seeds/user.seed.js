import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

config();

const seedUsers = [
  {
    email: "ethan.carter@gmail.com",
    fullName: "Ethan Carter",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    email: "emma.wilson@gmail.com",
    fullName: "Emma Wilson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    email: "noah.bennett@gmail.com",
    fullName: "Noah Bennett",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    email: "olivia.parker@gmail.com",
    fullName: "Olivia Parker",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    email: "liam.cooper@gmail.com",
    fullName: "Liam Cooper",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    email: "ava.mitchell@gmail.com",
    fullName: "Ava Mitchell",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    email: "lucas.hayes@gmail.com",
    fullName: "Lucas Hayes",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    email: "mia.foster@gmail.com",
    fullName: "Mia Foster",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    email: "logan.reed@gmail.com",
    fullName: "Logan Reed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    email: "sophia.morgan@gmail.com",
    fullName: "Sophia Morgan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    email: "jack.turner@gmail.com",
    fullName: "Jack Turner",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    email: "grace.evans@gmail.com",
    fullName: "Grace Evans",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    email: "henry.walker@gmail.com",
    fullName: "Henry Walker",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    email: "chloe.adams@gmail.com",
    fullName: "Chloe Adams",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    email: "alexander.scott@gmail.com",
    fullName: "Alexander Scott",
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