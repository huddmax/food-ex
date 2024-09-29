import { Pool } from 'pg';

export const pool = new Pool({

    user: "hudsonmachado",
    host: "localhost",
    database: "mydb",
    password: "123456",
    port: 5432,

});