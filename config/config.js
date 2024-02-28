import mysql from 'mysql2'
import {config} from 'dotenv'
config()

const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    connectionLimit: 30,
    multipleStatements: true
}).promise()

export {pool}