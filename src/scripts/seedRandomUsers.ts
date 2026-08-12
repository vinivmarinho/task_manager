import pool from "../config/database";
import { faker } from "@faker-js/faker";


async function seedRandomUsers() {
    try {
        for (let i = 0; i < 100; i++) {
            const name = faker.person.fullName();
            const age = faker.number.int({min: 15, max: 60});
            const email = faker.internet.email();

            await pool.query(`
                INSERT INTO users(user_name, user_age, user_email) VALUES($1, $2, $3)`, [name, age, email]
            );
        }
        console.log("100 usuários cadastrados com sucesso!")
    } catch(error) {
        console.log(`Erro ao cadastrar usuáarios: ${error}`)
    } finally {
        await pool.end()
    }
} 

seedRandomUsers();