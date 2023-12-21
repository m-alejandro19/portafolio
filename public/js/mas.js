const urlParams = new URLSearchParams(window.location.search);

//MANDA A LLAMAR LAS FUNCIONES CUANDO EL DOCUMENTO ESTE LISTO PARA SER MANIPULADO
document.addEventListener('DOMContentLoaded', () => {
    ajustarAlturaTxtArea();
    mostrarErrores();
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

//FUNCION QUE LEE LOS ERRORES DE LA URL QUE VIENEN DESDE EL CONTROLADOR comentarioController
function mostrarErrores() {
    const errores = urlParams.get('errores');
    
    if (errores) {
        //CONVIRTIENDO EL PARAMETRO ERRORES A ARREGLO
        const erroresArray = JSON.parse(decodeURIComponent(errores));
        const erroresHTML = erroresArray.map(error => `<div class="error-mensaje"> <p>${error.mensaje}</p> </div>`).join('');
        
        const erroresContainer = document.createElement('DIV');
        erroresContainer.classList.add('error-mensaje__container');
        erroresContainer.innerHTML = erroresHTML;
        
        const comentariosFormulario = document.querySelector('.comentarios__formulario');
        comentariosFormulario.parentNode.insertBefore(erroresContainer, comentariosFormulario);  

        setTimeout(() => {
            erroresContainer.remove();
        }, 3000);
    }; 
};

function mantenerDatos() {
    //console.log('Desde mantener datos');
    const nombre = urlParams.get('nombre');
    const apellido = urlParams.get('apellido');
    const comentario = urlParams.get('comentario');

    //AGREGABA ESPACIOS EN BLANCO AL CAMPO NOMBRE DESPUES DE NO PASAR LA VALIDACION
    //POR ESE MOTIVO EL metodo trim()
    //EN UN PRIMER MOMENTO EL CAMPO NOMBRE ESTARA NULL Y DARA UN ERROR EN LA CONSOLA DEL NAVEGADOR POR ESO EL IF
    nombreInput = document.getElementById('nombre');
    if(nombre !== null){
        nombreInput.value = nombre.trim() || '';
    }

    document.getElementById('apellido').value = apellido || '';
    document.getElementById('comentario').value = comentario || '';
    
};













