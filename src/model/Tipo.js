const { DataTypes } = require("sequelize");
// import { Sequelize } from "sequelize";
import sequelize from "./db";

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Tipo = sequelize.define("Tipo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Tipo;
