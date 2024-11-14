import dotenv from 'dotenv';
dotenv.config();

export default {
    client: 'postgresql',
    connection: {
        filename: "./src/database/database.db",
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        port: process.env.PGPORT,
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,

    },

    useNullAsDefault: true,

    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations",
    },
    seeds: {
        extensions: "ts",
        directory: "./src/database/seeds",
    },
}
