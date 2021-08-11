import Pool from "pg";

const pool = new Pool({
    user: "todolist_app",
    password: "intern",
    host: "localhost",
    port: 3000,
    database: "employee"
});

export default pool;