import Router from "express";
const router = Router();
import { createUser, deleteUser, showAllUsers, updateUser } from "../controllers/users.controller";
import { validateUser } from "../middlewares/validateUser.middleware";

router.post("/", validateUser, createUser);
router.delete("/:id", deleteUser);
router.get("/", showAllUsers);
router.patch("/:id", updateUser);
export default router;