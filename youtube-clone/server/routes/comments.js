import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Create a comment
router.post("/", verifyToken, addComment);

// Delete a comment
router.delete("/:id", verifyToken, deleteComment);

// Get Comments
router.get("/:videoId", getComments);

export default router;
