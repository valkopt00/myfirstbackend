import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,
    ssl: {
        ca: Buffer.from(process.env.DB_SSL_CA_BASE64, 'base64').toString('utf-8'),
    },
});

export async function getConnection() {
    return await pool.getConnection();
}

export default pool;
