const Comentario = require('../models/Comentario.js');

const path = require('path');

const fs = require('fs');

const paginaSobreMi = (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
};

//FORMATEA LA FECHA A UN FORMATO AGRADABLE
const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha); 
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

const paginaMas = async (req, res) => {

    //MUESTRA LOS DATOS DE LA BD EN LA VISTA
    //CONSULTAR BASE DE DATOS
    try {
        //findAll trae todos los resultados que hayan en la tabla
        const comentarios = await Comentario.findAll();

        //INVIERTE EL ORDEN DE LOS COMENTARIOS INVIERTE EL ORDEN DE UN ARRAY
        comentarios.reverse();

        //LEER EL CONTENIDO DEL ARCHIVO HTML
        const htmlPath = path.resolve(__dirname, '..', 'views', 'mas.html');
        let htmlContent = fs.readFileSync(htmlPath, 'utf8');
        //MOSTRANDO DATOS DE LA BD EN EL HTML
        htmlContent = htmlContent.replace('<!-- {{comentarios}} -->', comentarios.map(comentario => 
            `<div class="contenedor-comentario">
                <h4 class="comentario-nombre">${comentario.nombre} ${comentario.apellido}</h4>
                <p class="comentario-contenido">${comentario.comentario}</p>
                <p class="comentario-fecha">${formatearFecha(comentario.fechaComentario)}</p>
             </div>`).join(''));

        //ENVIAR HTML AL CLIENTE
        res.send(htmlContent);

        //res.sendFile(path.resolve(__dirname, '..', 'views', 'contacto.html'));
    } catch (error) {
        console.log(error);
    }
};

const paginaProyectos = (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'views', 'proyectos.html'));
};

const paginaApiPokemon = (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'views', 'consumo-apis', 'pokemon.html'));
};

const paginaContacto = (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'views', 'contacto.html'));
};

module.exports = {
    paginaSobreMi,
    paginaProyectos,
    paginaMas,
    paginaApiPokemon,
    paginaContacto,
};


