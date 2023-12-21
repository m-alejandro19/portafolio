const {Sequelize} = require('sequelize');
const db = require('../config/db.js');

const Correo = db.define('correos', {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mensaje: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Correo;