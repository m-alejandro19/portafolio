//CONFIGURACION DE LA BASE DE DATOS
const { Sequelize } = require('sequelize');

//CONFIGURACION QUE SEQUELIZE REQUIERE PARA CONECTAR A MYSQL
const db = new Sequelize('portafolio', 'root', '12345', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

module.exports = db;