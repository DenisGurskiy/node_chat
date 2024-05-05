const { Sequelize } = require('sequelize');

require('dotenv').config();

const client = new Sequelize({
  port: process.env.DB_PORT || '5432',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '123123',
  database: process.env.DB_DATABASE || 'postgres',
  dialect: 'postgres',
  logging: false,
});

module.exports = {
  client,
};
