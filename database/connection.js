const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', '55299',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;