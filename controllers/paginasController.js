import { Viaje } from '../models/Viajes.js'
import { Testimonials } from '../models/Testimonials.js'


const paginaInicio = async(req, res) => { // req = lo que enviamos : res = lo que expres nos responde

    //consultar los viajes de la base de datos 

    const promiseDB = []

    promiseDB.push(Viaje.findAll({ limit : 3 }))
    promiseDB.push(Testimonials.findAll({ limit : 3 }))


    try {

       const resultado = await Promise.all(promiseDB)
    
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1],
        })
        
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'nosotros'
    })
}

const paginaViajes =  async(req, res) => { 

    //consultar bd
    const viajes = await Viaje.findAll();
    // console.log(viaje);

    res.render('viajes', { 
        pagina: 'Proximos Viajes',
        viajes : viajes
    })
}

const paginaTetimonio = async(req, res) => { 
    
    try {

        const testimoniales = await Testimonials.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales,  
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaDetalleViaje = async(req, res) => {
    const {slug} = req.params
    try {
        const viaje = await Viaje.findOne({ where : {slug} });
        res.render('viaje', {
            pagina : 'Informacion del vuelo',
            viaje,
        })
    } catch (error) {
        console.log(error);
    }
}

export { paginaInicio, paginaNosotros, paginaViajes, paginaTetimonio, paginaDetalleViaje}