import mysql from "mysql2/promise";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const client = mysql.createPool({
  host: DB_HOST,
  port: Number.parseInt(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export default client;