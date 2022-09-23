import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getByTitle,
  getVideo,
  randomVideos,
  subscribedVideos,
  trendyVideos,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Create a video
router.post("/", verifyToken, addVideo);

// Update a video
router.put("/:id", verifyToken, updateVideo);

// Delete a video
router.delete("/:id", verifyToken, deleteVideo);

// Get a video
router.get("/find/:id", getVideo);

// Update views
router.put("/:id", addView);

// Get Trendy Videos
router.get("/trend", trendyVideos);

// Get random videos
router.get("/random", randomVideos);

// Subscribed channels videos
router.get("/sub", verifyToken, subscribedVideos);

// Get by tags
router.get("/tags", getByTag);

// Get by title
router.get("/search", getByTitle);

export default router;
