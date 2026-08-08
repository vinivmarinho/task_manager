import Router from "express";
import { createUser, showUsers } from "../controllers/users.controller";
const router = Router();

router.post("/", createUser);
router.get("/", showUsers);

export default router;