import express from 'express';
import { paginaInicio, paginaNosotros, paginaTetimonio, paginaViajes, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialsController.js';

const router = express.Router(); 

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTetimonio);
router.post('/testimoniales', guardarTestimonial); 


export default router; 