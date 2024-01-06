import mostrarErrores from "./helpers/mostrarErrores.js";
const urlParams = new URLSearchParams(window.location.search);//BUSCA LOS ERRORES PASADOS A TRAVES DE LA URL
const comentariosFormulario = document.querySelector('.comentarios__formulario');

//MANDA A LLAMAR LAS FUNCIONES CUANDO EL DOCUMENTO ESTE LISTO PARA SER MANIPULADO
document.addEventListener('DOMContentLoaded', () => {
    ajustarAlturaTxtArea();
    mostrarErrores(urlParams, comentariosFormulario);
    mantenerDatos();
});

//ALTURA TXTAREA AUTUMATICA SEGUN CONTENIDO
function ajustarAlturaTxtArea(){
    const txtAreaComentario = document.querySelector('.comentarios__textarea');
    txtAreaComentario.addEventListener('input', (e) => {
        e.target.style.height = 'auto'
        e.target.style.height = (e.target.scrollHeight) + 'px';
    });
};

function mantenerDatos() {
    const nombre = urlParams.get('nombre');
    const apellido = urlParams.get('apellido');
    const comentario = urlParams.get('comentario');
    const nombreInput = document.getElementById('nombre');
    if(nombre !== null){
        nombreInput.value = nombre.trim() || '';
    }

    document.getElementById('apellido').value = apellido || '';
    document.getElementById('comentario').value = comentario || '';
    
};













