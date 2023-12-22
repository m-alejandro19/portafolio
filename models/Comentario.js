const {Sequelize} = require('sequelize');
const db = require('../config/db.js');

const Comentario = db.define('comentarios', {
    //EL ID NO ES NECESARIO, PORQUE EL ORM(SEQUELIZE) DA POR HECHO QUE ESE CAMPOS EXISTE
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