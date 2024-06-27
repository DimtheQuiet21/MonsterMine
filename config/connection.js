const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else if (process.env.DB_HOST === 'sql5.freemysqlhosting.net') {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: 3306
      }

} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;

// const sequelize = new Sequelize(
//   if (process.env.JAWSDB_URL) {

// } ||
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//     }
//   );
  


// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(process.env.JAWSDB_URL, {
//   logging: true, // Logs SQL queries
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: true, // Important if you are using a secure connection
//     },
//   },
// });

// module.exports = sequelize;