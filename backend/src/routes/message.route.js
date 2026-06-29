import express from "express";
import protectRoute from "../middleware/auth.middleware.js";
import { deleteMessage, editMessage, getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router1 = express.Router();

router1.get("/users", protectRoute, getUsersForSidebar);
router1.get("/:id", protectRoute, getMessages);

router1.post("/send/:id", protectRoute, sendMessage);
router1.delete("/:id", protectRoute, deleteMessage);
router1.patch("/:id", protectRoute, editMessage);

export default router1;