const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Timon7beast",
    host: "localhost",
    port: 5432,
    database: "HW2"
});

module.exports = pool;