import { type Request, type Response } from "express";
import pool from "../config/database";

async function createTask(req: Request, res: Response) {
    try {
        const { name, description, priority, user_id } = req.body;
        await pool.query(`INSERT INTO tasks (task_name, task_description, task_priority, user_id) VALUES ($1, $2, $3, $4)`, [name, description, priority, user_id]);

        res.status(200).json({
            message: `Task ${name} criada com sucesso`
        })
    } catch (error) {
        res.status(500).json({
            message: `Não foi possível criar a task, erro: ${error}`
        })
    }
};

async function deleteTask(req: Request, res: Response) {
    try {
        // Pega o id vindo dos parâmetros
        const { id } = req.params;
        // Procurar task que contenham esse id
        const result = await pool.query(`SELECT * FROM tasks WHERE task_id = $1`, [id]);
        const taskToDelete = result.rows[0];
        res.status(200).json({
            message: `Task ${taskToDelete.task_name} deletada com sucesso!`
        });
    } catch(error) {
        res.status(500).json({
            message: `Não foi possível deletar a task, erro: ${error}`
        })
    }
};

async function showTasks(req: Request,res: Response) {
    try {
        const result = (await pool.query(`SELECT * FROM tasks`)).rows;
        res.status(200).json({
            message: result
        });
    } catch(error) {
        res.status(500).json({
            message: `Não foi possível listar as tasks, erro: ${error}`
        })
    }
};

async function updateTask(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, description, priority, user_id} = req.body;
        await pool.query(`UPDATE tasks SET task_name = $1, task_description = $2, task_priority = $3, user_id = $4 WHERE task_id = $5`, [name, description, priority, user_id, id]);
        res.status(200).json({
            message: `Task ${name} atualizada com sucesso`
        })
    } catch(error) {
        res.status(500).json({
            message: `Não foi possível atualizar a task, erro: ${error}`
        })
    }

};

export { createTask, deleteTask, showTasks, updateTask};