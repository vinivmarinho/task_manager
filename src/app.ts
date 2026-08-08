import express, {type Express, type Request, type Response } from "express";
import userRouter from "./routes/user.routes";
const app: Express = express();

app.use(express.json());

// Rota teste
app.get("/", (req: Request, res: Response) => {
    console.log("Rota teste funcionando")
});

// Rotas de usuário
app.use("/users", userRouter);

export default app;
