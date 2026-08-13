import pool  from "../config/database";

async function createTableTasks() {
    try {
        await pool.query(`
        CREATE TABLE tasks(
        task_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        task_name VARCHAR(50) NOT NULL,
        task_description text,
        task_priority VARCHAR(20) CHECK(task_priority IN('Alta', 'Média', 'Baixa')),
        user_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
        )
        `);
        console.log('Tabela tasks criada com sucesso')
    } catch(error) {
        console.log(`Erro ao criar tabela tasks: ${error}`)
    } finally {
        await pool.end()
    }
};
createTableTasks();
