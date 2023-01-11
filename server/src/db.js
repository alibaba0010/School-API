import pkg from 'pg';
const { Pool } = pkg;

// const Pool = pg.Pool;
export const pool = new Pool({
   user: "postgres",
   host: "localhost",
   database: "students",
   password: "Akinkunmi100$",
   port: 5432
})

