const btnDescargarCV = document.querySelector('.descargar-cv');

const btnMostrarOcularMenu = document.querySelector('.btn-mostrar-ocultar-menu');
const barraNavegacion = document.querySelector('#nav');

window.onload = () => {
  descargarCV();
  mostrarOcultarMenu();
}

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

//FUNCION QUE DESCARGA EL CV
const descargarCV = () => {

    btnDescargarCV.addEventListener('click', async (e) => {
      e.preventDefault();
      
      const url = '/public/pdfs/Voucher.pdf';

      try {
        const response = await fetch(url);
        const blob = await response.blob();
        
        //ENLACE TEMPORAL PARA LA DESCARGA
        const enlaceDescarga = document.createElement('A');
        enlaceDescarga.href = URL.createObjectURL(blob);
        enlaceDescarga.download = 'Voucher.pdf';
        //enlaceDescarga.style.display = 'none';

        //AGREGA EL ENLACE AL CUERPO DEL DOCUMENTO
        document.body.appendChild(enlaceDescarga);
        
        //SIMULA UN CLICK EN EL ENLACE 
        enlaceDescarga.click();

        //ELIMINA EL ENLACE DESPUES DE LA DESCARGA
        document.body.removeChild(enlaceDescarga);

      } catch (error) {
          console.log('Error al descargar el PDF',error);
      }
    }
  );
}



