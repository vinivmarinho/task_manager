import express, {type Express, type Request, type Response } from "express";
const app: Express = express();

app.use(express.json());

// Rota teste
app.get("/", (req: Request, res: Response) => {
    console.log("Rota teste funcionando")
});


export default app;
