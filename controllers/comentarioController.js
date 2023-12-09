const Comentario = require('../models/Comentario.js');

const guardarComentario = async (req, res) => {

    //VALIDAR FORMULARIO
    //OBTIENE LOS DATOS DEL FORMULARIO ATRAVES DEL ATRIBUTO HTML NAME
    const {nombre, apellido, comentario} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'});
    }
    if(apellido.trim() === ''){
        errores.push({mensaje: 'El apellido está vacío'});
    }
    if(comentario.trim() === ''){
        errores.push({mensaje: 'El comentario está vacío'});
    }
    //console.log(req.body);
    //console.log(errores);
    if(errores.length > 0){
        // REDIRIGIR A LA VISTA CONTACTO CON LOS ERRORES DE VALIDACION EN LA URL 
        res.redirect(`/contacto?errores=${encodeURIComponent(JSON.stringify(errores))}&nombre=${encodeURIComponent(nombre)}
                                &apellido=${encodeURIComponent(apellido)}&comentario=${encodeURIComponent(comentario)}`);

    } else {
        //GUARDAR COMENTARIO EN BD SI NO HAY ERRORES
        try {
            await Comentario.create({
                nombre,
                apellido,
                comentario
            });
            //REDIRIGE A PAGINA CONTACTO UNA VEZ SE HAYA GUARDADO LOS DATOS EN LA BD
            res.redirect('/contacto');
        } catch (error) {
            console.log(error);
        }

    }
};

module.exports = {
    guardarComentario
}