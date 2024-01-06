const nodemailer = require('nodemailer');

const Correo = require('../models/Correo.js');

const enviarCorreo = async (req, res) => {

    //CREDENCIALES DE ACCESO
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.ACCESS_KEY
        }
    });

    //OBTIENE NOMBRE, EMAIL Y MENSAJE DEL FORMULARIO
    const {nombre, email, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'});
    }
    if(email.trim() === ''){
        errores.push({mensaje: 'El email está vacío'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje está vació'});
    }
    if(errores.length > 0){
        //REDIRIGE A LA VISTA CONTACTO CON LOS ERRORES ATRAVEZ DE LA URL
        res.redirect(`/contacto?errores=${encodeURIComponent(JSON.stringify(errores))}&nombre=${encodeURIComponent(nombre)}
                      &email=${encodeURIComponent(email)}&mensaje=${encodeURIComponent(mensaje)}`);
    } else {

        try {
            //GUARDAR CORREO EN LA BASE DE DATOS
            await Correo.create({
                nombre,
                email,
                mensaje
            });
            //CUERPO DEL CORREO RECIBIDO
            const mailOptions = {
                from: email,
                to: process.env.USER_EMAIL,
                subject: 'Nuevo correo recibido',
                text: `Nombre: ${nombre} Correo: ${email} Mensaje: ${mensaje}`
            };
            await transporter.sendMail(mailOptions);
            //REDIRIGE HACIA PAGINA CONTACTO UNA VEZ QUE SE HAYA GUARDADO EL CORREO
            res.redirect('/contacto');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {
    enviarCorreo
}