const Sequelize = require('sequelize');

require('dotenv').config();

let sql;

if (process.env.JAWSDB_URL) 
{
    sql = new Sequelize(process.env.JAWSDB_URL);
} 
else 
{
    sql = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PW, 
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3002
        });
}

module.exports = sql;