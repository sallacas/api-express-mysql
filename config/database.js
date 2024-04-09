import { Sequelize } from "sequelize";

//export const conection = new Sequelize('mysql://root:admin@localhost:33060/talento_tech') // Example for postgres

export const conection = new Sequelize('talento_tech', 'root', 'admin', {
    host: 'localhost',
    port: 33060,
    dialect: 'mysql'
})