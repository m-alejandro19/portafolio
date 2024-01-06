const {Sequelize} = require('sequelize');
const db = require('../config/db.js');

const Comentario = db.define('comentarios', {
    nombre: {
        type: Sequelize.STRING
    },
    apellido: {
        type: Sequelize.STRING
    },
    comentario: {
        type: Sequelize.STRING
    },
    fechaComentario: {
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
    }
});

module.exports = Comentario;