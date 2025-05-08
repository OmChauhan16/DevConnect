import express from "express";
import { protect } from "../middleware/auth.js";
import {
  createProject,
  getProjects,
  commentProject,
  search,
  getAllProjects
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", protect, createProject);
router.post("/:id/comment", protect, commentProject);
router.get("/search", search);
router.post("/", protect, createProject);
router.get("/", getAllProjects);
export default router;