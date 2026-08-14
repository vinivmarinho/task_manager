import userRoutes from "./routes/user.routes";
import taskRoutes from "./routes/task.routes";

import express, {type Express, type Request, type Response } from "express";
const app: Express = express();

app.use(express.json());

// Rota teste
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Rota teste funcionando");
});

app.use("/users", userRoutes)
app.use("/tasks", taskRoutes)

export default app;
