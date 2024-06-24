import { Testimonials } from "../models/Testimonials.js";


const guardarTestimonial = async(res, req) => {
    
    //validar campos del formulario
    const {nombre, mail, message} = res.body;

    const errores = []; 

    if (nombre.trim()===('')) {
        errores.push({mensaje: 'el campo nombre esta vacia '})
    }    
    if (mail.trim()===('')) {
        errores.push({mensaje: 'el campo correo esta vacia '})
    }
    if (message.trim()===('')) {
        errores.push({mensaje: 'el campo mensaje esta vacia '})
    }

    console.log(errores);

    if (errores.length > 0 ) {

        //consultar Testimoniales Existentes
        const testimoniales = await Testimonials.findAll();

        req.render('testimoniales', {
            pagina: 'testimoniales', 
            errores,
            nombre,
            mail,
            message,
            testimoniales
        })
    }else{
        //almacenar en la base de datos
        try {
            await Testimonials.create({
                nombre,
                mail,
                message
            })
            req.redirect('/testimoniales')

        } catch (error) {
            console.log(error);
        }
    }
}

export { guardarTestimonial } 