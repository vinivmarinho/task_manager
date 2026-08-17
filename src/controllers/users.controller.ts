import { type Request, type Response } from "express";
import pool from "../config/database";
import bcrypt from "bcrypt";

async function createUser(req: Request, res: Response) {
    try {
        const { name, age, email } = req.body

        const user = {
            name,
            age, 
            email
        };
        await pool.query(`
            INSERT INTO users (user_name, user_age, user_email) VALUES ($1, $2, $3)`,
            [name, age, email]
        )
        res.status(201).json({
            message: `Usuário ${name} cadastrado com sucesso!`,
            infos: user
        })
    } catch(error) {
        res.status(500).json({
            message: `Não foi possível cadastrar usuário , erro: ${error}`
        })
    } 
} 

async function deleteUser(req: Request, res: Response) {
    try {
        
        // Pega o id que estará nos parâmetros da URL
        const { id } = req.params
        const result = await pool.query(`SELECT * from users WHERE user_id = $1`, [id])
        const user = result.rows[0]
        await pool.query(`
            DELETE FROM users WHERE user_id = $1`, [id]
        ) 
        res.status(200).json({
            message: `Usuário ${user.user_name} deletado`
        });
    } catch(error) {
        res.status(500).json({
            message: `Não foi possível deletar usuário , erro: ${error}`
        })
    } 
}

async function showAllUsers(req: Request, res: Response) {
    try {
        const allUsers = await pool.query(`SELECT * FROM users`);
        res.status(200).json({
            users: allUsers.rows
        });
    } catch(error) {
        res.status(500).json({
            message: `Não foi possível buscar os usuários no banco, erro: ${error}`
        })
    } 
}

async function updateUser(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, age, email} = req.body;


        // result é o objeto que vem de pool.query.
        // Usando o array "rows" dentro do objeto de "result". [0] é o primeiro usuário encontrado
        // userToDelete recebe esse usuário
        const result = await pool.query(`SELECT * from users WHERE user_id = $1`, [id]);
        const userToDelete = result.rows[0];

        await pool.query(`UPDATE users set user_name = $1, user_age = $2 , user_email = $3 WHERE user_id = $4`, [name, age, email, id])

        res.status(200).json({
            message: `Usuário ${userToDelete.user_name} atualizado`
        })

    } catch(error) {
        res.status(500).json({
            message: `Não foi possível atualizar informações do usuário, erro: ${error}`
        })
    } 
};

async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const result = await pool.query(`SELECT * FROM users WHERE user_email = $1`, [email]);
        const user = result.rows[0];
        const passwordIsValid = await bcrypt.compare(password, user.user_password)

        if (!passwordIsValid) {
            return res.status(401).json({
                message: "Email ou senha inválidos"
            })
        }
        
        return res.status(200).json({
            message: "Login realizado com sucesso!"
        })
    } catch(error) {
        res.status(500).json({
            message: `Não foi possível realizar login. Erro: ${error}` 
        })
    }
}
export { createUser, deleteUser, showAllUsers, updateUser, login};


