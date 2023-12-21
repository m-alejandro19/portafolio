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

    try {
        //SE OBTIENEN NOMBRE, EMAIL Y MENSAJE DEL FORMULARIO
        const {nombre, email, mensaje} = req.body;

        //GUARDAR CORREO EN LA BASE DE DATOS
        await Correo.create({
            nombre,
            email,
            mensaje
        });
        //CUERPO DEL CORREO RECIBIDO
        const mailOptions = {
            from: email,
            to: 'batres1993.19@gmail.com',
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

module.exports = {
    enviarCorreo
}