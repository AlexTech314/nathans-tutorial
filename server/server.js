require('dotenv').config()

const express = require('express')
const app = express()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_SERVER,
  dialect: process.env.DB_DIALECT
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3001, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})