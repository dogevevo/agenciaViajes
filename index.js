import express from 'express'
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

db.authenticate()
    .then( () => console.log('base de datos conectada'))
    .catch( error => console.log(error))


// agregar el puerto
const port = process.env.PORT || 4000;

//habilitar pug
app.set('view engine', 'pug');

//obtener el año actual
app.use( (req, res, next) => {
    
    const year = new Date();
    res.locals.nombreSitio = 'Agencia Viajes'; 
    res.locals.actualYears = year.getFullYear();
    return next();
} )

//agregar body parser para los datos del formulario
app.use(express.urlencoded({extended : true}));

//Definar la carpeta como publica
app.use(express.static('public'));

//agregar rutas
app.use('/', router)


app.listen(port, () => {
    console.log(`El servdor esta funcionando en el puerto ${port}`);
}); 