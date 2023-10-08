import db from "../databases/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db.define('pacientes',{
    nombre: {type: DataTypes.STRING},
    apellido: {type: DataTypes.STRING},
    telefono: {type: DataTypes.STRING},

})

export default BlogModel