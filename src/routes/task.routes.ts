import Router from "express";
const router = Router();
import { createTask, deleteTask, showTasks, updateTask } from "../controllers/tasks.controller";

router.post("/", createTask);
router.delete("/:id", deleteTask);
router.get("/", showTasks);
router.patch("/:id", updateTask);

export default router;

