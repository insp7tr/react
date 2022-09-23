import express from "express";
import {
  deleteUser,
  dislikeVideo,
  getUser,
  likeVideo,
  subscribeUser,
  unsubscribeUser,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id", verifyToken, update);

// Delete User
router.delete("/:id", verifyToken, deleteUser);

// Get a Userd
router.get("/find/:id", getUser);

// Subcribe to a User
router.put("/sub/:id", verifyToken, subscribeUser);

// Unsubscribe from a User
router.put("/unsub/:id", verifyToken, unsubscribeUser);

// Like a Video
router.put("/like/:videoId", verifyToken, likeVideo);

// Dislike a Video
router.put("/dislike/:videoId", verifyToken, dislikeVideo);

export default router;
