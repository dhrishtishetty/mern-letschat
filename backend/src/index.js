import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router } from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import router1 from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";
import path from "path";

dotenv.config();
const __dirname = path.resolve();

const port = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cookieParser());
app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "https://mern-letschat.onrender.com"
      ],
      credentials: true
    })
);

app.use("/api/auth", router);
app.use("/api/messages", router1);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(port, () => {
    console.log(`Server running successfully at port ${port}`);
    connectDB();
});