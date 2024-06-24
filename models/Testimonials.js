import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Testimonials = db.define('testimonios', {
    nombre: {type: Sequelize.STRING},
    mail: {type: Sequelize.STRING},
    message: {type: Sequelize.STRING},
});
