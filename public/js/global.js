const enlaceMostrarOcularMenu = document.querySelector('.enlace-mostrar-ocultar-menu');
const barraNavegacion = document.querySelector('#nav');

document.addEventListener('DOMContentLoaded', () => {
  mostrarOcultarMenu(); 

});
//OCULTA/MUESTRA LA BARRA DE NAVEGACION
const mostrarOcultarMenu = () => {

  enlaceMostrarOcularMenu.addEventListener('click', () =>{
    const visible = barraNavegacion.getAttribute('data-visible');

    if(visible === 'false'){
      barraNavegacion.setAttribute('data-visible', true);
      enlaceMostrarOcularMenu.textContent = 'x'
    } else {
      barraNavegacion.setAttribute('data-visible', false);
      enlaceMostrarOcularMenu.textContent = '=';
    }
  })
}





