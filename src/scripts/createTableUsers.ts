import pool from "../config/database";

async function createTableUsers() {
    try {

        await pool.query(`
            CREATE TABLE users (
            user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
            user_name VARCHAR(80) NOT NULL, 
            user_age INT, 
            user_email VARCHAR(80) NOT NULL
            );
        `);
        
        console.log("Deu certo")
    } catch(error) {
        console.log(`Deu erro ${error}`)
    } finally {
        await pool.end();
    }
};

createTableUsers();