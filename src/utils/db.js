const { Sequelize } = require('sequelize');

require('dotenv').config();

const client = new Sequelize({
  port: '5432',
  host: 'localhost',
  username: 'postgres',
  password: '123123',
  database: 'chat-app',
  dialect: 'postgres',
});

module.exports = {
  client,
};
