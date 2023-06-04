const Sequelize = require("sequelize");

// require .env file - in .env file save DB_NAME,DB_USER,DB_PASSWORD,JAWSDB_URL
require("dotenv").config();

// create connection with db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelize;
