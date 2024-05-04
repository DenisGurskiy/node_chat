const { Sequelize } = require('sequelize');

require('dotenv').config();

const client = new Sequelize({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: 'postgres',
});

module.exports = {
  client,
};
