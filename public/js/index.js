const btnDescargarCV = document.querySelector('.descargar-cv');

document.addEventListener('DOMContentLoaded', () => {
  descargarCV();
  openLayersMap();
})

//FUNCION QUE DESCARGA EL CV
const descargarCV = () => {

    btnDescargarCV.addEventListener('click', async (e) => {
      e.preventDefault();
      
      const url = '/public/pdfs/Alejandro-Batres-CV.pdf';

      try {
        const response = await fetch(url);
        const blob = await response.blob();
        
        //ENLACE TEMPORAL PARA LA DESCARGA
        const enlaceDescarga = document.createElement('A');
        enlaceDescarga.href = URL.createObjectURL(blob);
        enlaceDescarga.download = 'Alejandro-Batres-CV.pdf';
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

const openLayersMap = () => {
  
  // Coordenadas del centro de San Salvador
  const sanSalvadorCoordenadas = ol.proj.fromLonLat([-89.1889, 13.7126]);

  const marcador = new ol.Overlay({
    position: sanSalvadorCoordenadas,
    element: document.getElementById('marcador'),
    stopEvent: false
  });

  // Crear un mapa
  const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: sanSalvadorCoordenadas,
        zoom: 12
    })
});

// Añadir el marcador al mapa
map.addOverlay(marcador);


}
