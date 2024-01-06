//FUNCION QUE LEE LOS ERRORES DE LA URL 
const mostrarErrores = (params, selectorFormulario) => {
    const errores = params.get('errores');//OBTIENE LOS ERRORES DE LA URL
    
    if (errores) {
        const erroresArray = JSON.parse(decodeURIComponent(errores));
        const erroresHTML = erroresArray.map(error => `<div class="error-mensaje"> <p>${error.mensaje}</p> </div>`).join('');
        
        const erroresContainer = document.createElement('DIV');
        erroresContainer.classList.add('error-mensaje__container');
        erroresContainer.innerHTML = erroresHTML;
        
        selectorFormulario.parentNode.insertBefore(erroresContainer, selectorFormulario);  

        setTimeout(() => {
            erroresContainer.remove();
        }, 3000);
    }; 
};

export default mostrarErrores;

