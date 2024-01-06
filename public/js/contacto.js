import mostrarErrores from './helpers/mostrarErrores.js'
const urlParams = new URLSearchParams(window.location.search);
const contactameFormulario = document.querySelector('.contactame__formulario');

//MANDA A LLAMAR LAS FUNCIONES CUANDO EL DOCUMENTO ESTE LISO PARA SER MANIPULADO
document.addEventListener('DOMContentLoaded', () => {
   mostrarErrores(urlParams, contactameFormulario); 
   mantenerDatos();
});

function mantenerDatos() {
   const nombre = urlParams.get('nombre');
   const email = urlParams.get('email');
   const mensaje = urlParams.get('mensaje');
   const nombreInput = document.getElementById('nombre');
   if(nombre !== null){
       nombreInput.value = nombre.trim() || '';
   }

   document.getElementById('email').value = email || '';
   document.getElementById('mensaje').value = mensaje || '';
   
};

