import pool from "../config/database";

async function seedUsers() {
    try {
        await pool.query(`
            INSERT INTO users (user_name, user_age, user_email) VALUES ('Vinícius', 22, 'vini.marinho2004@gmail.com')
        `)
        console.log(`Usuário cadastrado na tabela`)
    } catch(error) {
        console.log(`Erro ao inserir dados na tabela: ${error}`)
    } finally {
        pool.end()
    }
};

seedUsers();