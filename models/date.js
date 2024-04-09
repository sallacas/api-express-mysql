import { conection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Date = conection.define('citas', {
    nombre_medico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false
    }
});