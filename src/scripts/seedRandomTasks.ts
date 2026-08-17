import pool from "../config/database";
import { faker } from "@faker-js/faker";

async function seedRandomTasks() {

    try {
        const result = await pool.query("SELECT user_id FROM users");
        const users = result.rows;

  
        if (users.length == 0) {
            console.log("Nenhum usuário encontrado")
            return
        };

        for (let i = 0; i < 100; i++) {
            const randomUser = users[Math.floor(Math.random() * users.length)];

            const name = faker.lorem.words(3);
            const description = faker.lorem.sentence();
            const priority = faker.helpers.arrayElement(["Alta", "Média", "Baixa"]);

            await pool.query(`
                INSERT INTO tasks(task_name, task_description, task_priority, user_id) VALUES ($1, $2, $3, $4)`, [name, description, priority, randomUser.user_id ])
        }
              
        console.log("100 tasks criadas com sucesso");
    } catch(error) {
        console.log(`Não foi possível criar as tasks, erro: ${error}`)
    } finally {
        await pool.end();
    }
}

seedRandomTasks();