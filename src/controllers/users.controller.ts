import { type User,  users} from "../data/user.data";
import { type Request, type Response } from "express";

function createUser(req: Request, res: Response) {
    // Desestrutura os campos do body da requisição
    const { name, email, age}: User = req.body;

    // Cria um objeto "user" do tipo "User" com os objetos desestruturados
    const user: User = {
        name,
        email, 
        age
    }

    try {
        users.push(user);
        res.status(201).json({
            message: `Usuário ${user.name} cadastrado com sucesso!`
        })
    } catch(error) {
        res.status(400).json({
            message: `Erro: ${error}`
        })
    }
};

function showUsers(req: Request, res: Response) {
    try {
        res.status(200).json(users)
    } catch(error) {
        res.status(500).json({
            message: `Erro: ${error}`
        })
    }
};

export { createUser, showUsers};

