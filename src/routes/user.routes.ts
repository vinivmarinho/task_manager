import Router from "express";
const router = Router();
import { createUser, deleteUser, showAllUsers, updateUser, login } from "../controllers/users.controller";
import { validateUser } from "../middlewares/validateUser.middleware";

router.post("/", validateUser, createUser);
router.post("/login", login);
router.delete("/:id", deleteUser);
router.get("/", showAllUsers);
router.patch("/:id", updateUser);
export default router;