const btnDescargarCV = document.querySelector('.descargar-cv');

document.addEventListener('DOMContentLoaded', () => {
  descargarCV();
})

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

// Configura el mapa
const map = new ol.Map({
  target: 'map', // El ID del elemento HTML donde se renderizará el mapa
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM() // Capa de OpenStreetMap
    })
  ],
  view: new ol.View({
    center: [0, 0], // Coordenadas iniciales (longitud, latitud)
    zoom: 2 // Nivel de zoom
  })
});
