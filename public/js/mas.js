import mostrarErrores from "./helpers/mostrarErrores.js";
const urlParams = new URLSearchParams(window.location.search);//BUSCA LOS ERRORES PASADOS A TRAVES DE LA URL
const comentariosFormulario = document.querySelector('.comentarios__formulario');

//MANDA A LLAMAR LAS FUNCIONES CUANDO EL DOCUMENTO ESTE LISTO PARA SER MANIPULADO
document.addEventListener('DOMContentLoaded', () => {
    ajustarAlturaTxtArea();
    mostrarErrores(urlParams, comentariosFormulario);
    mantenerDatos();
});

//ALTURA TXTAREA AUT SEGUN CONTENIDO
function ajustarAlturaTxtArea(){
    const txtAreaComentario = document.querySelector('.comentarios__textarea');
    txtAreaComentario.addEventListener('input', (e) => {
        e.target.style.height = 'auto'
        e.target.style.height = (e.target.scrollHeight) + 'px';
    });
};

function mantenerDatos() {
    //console.log('Desde mantener datos');
    const nombre = urlParams.get('nombre');
    const apellido = urlParams.get('apellido');
    const comentario = urlParams.get('comentario');

    //AGREGABA ESPACIOS EN BLANCO AL CAMPO NOMBRE DESPUES DE NO PASAR LA VALIDACION
    //POR ESE MOTIVO EL metodo trim()
    //EN UN PRIMER MOMENTO EL CAMPO NOMBRE ESTARA NULL Y DARA UN ERROR EN LA CONSOLA DEL NAVEGADOR POR ESO EL IF
    const nombreInput = document.getElementById('nombre');
    if(nombre !== null){
        nombreInput.value = nombre.trim() || '';
    }

    document.getElementById('apellido').value = apellido || '';
    document.getElementById('comentario').value = comentario || '';
    
};













