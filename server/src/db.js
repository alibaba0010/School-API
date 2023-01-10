import pkg from 'pg';
const { Pool } = pkg;

// const Pool = pg.Pool;
export const pool = new Pool({
   user: "postgres",
   host: "localhost",
   database: "students",
   password: "test",

   port: 5432
})