const btnMostrarOcularMenu = document.querySelector('.btn-mostrar-ocultar-menu');
const barraNavegacion = document.querySelector('#nav');

document.addEventListener('DOMContentLoaded', () => {
  mostrarOcultarMenu();
});

//OCULTA/MUESTRA LA BARRA DE NAVEGACION
const mostrarOcultarMenu = () => {
  btnMostrarOcularMenu.addEventListener('click', () =>{
    const visible = barraNavegacion.getAttribute('data-visible');

    if(visible === 'false'){
      barraNavegacion.setAttribute('data-visible', true);
      console.log('Todo bien');
    } else {
      barraNavegacion.setAttribute('data-visible', false);
    }
  })
}





