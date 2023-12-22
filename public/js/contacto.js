import mostrarErrores from './helpers/mostrarErrores.js'
const urlParams = new URLSearchParams(window.location.search);
const contactameFormulario = document.querySelector('.contactame__formulario');

//MANDA A LLAMAR LAS FUNCIONES CUANDO EL DOCUMENTO ESTE LISO PARA SER MANIPULADO
document.addEventListener('DOMContentLoaded', () => {
   mostrarErrores(urlParams, contactameFormulario); 
   mantenerDatos();
});

function mantenerDatos() {
   //console.log('Desde mantener datos');
   const nombre = urlParams.get('nombre');
   const email = urlParams.get('email');
   const mensaje = urlParams.get('mensaje');

   //AGREGABA ESPACIOS EN BLANCO AL CAMPO NOMBRE DESPUES DE NO PASAR LA VALIDACION
   //POR ESE MOTIVO EL metodo trim()
   //EN UN PRIMER MOMENTO EL CAMPO NOMBRE ESTARA NULL Y DARA UN ERROR EN LA CONSOLA DEL NAVEGADOR POR ESO EL IF
   const nombreInput = document.getElementById('nombre');
   if(nombre !== null){
       nombreInput.value = nombre.trim() || '';
   }

   document.getElementById('email').value = email || '';
   document.getElementById('mensaje').value = mensaje || '';
   
};

