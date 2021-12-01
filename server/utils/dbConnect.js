const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('site', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize