const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', '55299',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;