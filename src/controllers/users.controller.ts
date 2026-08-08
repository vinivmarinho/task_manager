import { type User,  users} from "../data/user.data";
import { type Request, type Response } from "express";

function createUser(req: Request, res: Response) {
    const user: User = req.body;

    users.push(user);
    res.status(201).send(`Usuário ${user.name} cadastrado com sucesso!`)
};

export { createUser };

