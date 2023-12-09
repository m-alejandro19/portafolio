const express = require('express');
const app = express();

const db = require('./config/db.js');

const {paginaSobreMi, 
       paginaProyectos,
       paginaMas,
       paginaApiPokemon,
       paginaContacto,
} = require('./controllers/paginasController.js');

//CONTROLADOR DE COMENTARIOS
const {guardarComentario
} = require('./controllers/comentarioController.js');

//CONEXION A LA BD
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

const path = require('path');

const port = process.env.PORT || 4000;

//CONFIGURACION DEL MIDELWARE PARA SERVIR ARCHIVOS ESTATICOS
//ARCHIVOS EN LA RAIZ (html)
app.use(express.static(__dirname));
//CSS, IMAGENES Y JS
app.use(express.static(path.join(__dirname, 'public', 'css')));
app.use(express.static(path.join(__dirname, 'public', 'img')));
app.use(express.static(path.join(__dirname, 'public', 'js')));

//AGREGAR BODY PARSER PARA LEER LOS DATOS DEL FORMULARIO
app.use(express.urlencoded({extended: true}));

//MODELOS - VISITAR PAGINAS
app.get('/', paginaSobreMi);
app.get('/proyectos', paginaProyectos);
app.get('/mas', paginaMas);
app.get('/consumo-apis/pokemon', paginaApiPokemon);
app.get('/contacto', paginaContacto);

//ENVIAR DATOS DESDE ESA PAGINA
app.post('/contacto', guardarComentario);

app.listen(port, () => {
    console.log(`El Servidor esta corriendo en el puerto ${port}`);
});