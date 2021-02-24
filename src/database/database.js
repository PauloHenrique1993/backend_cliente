// configurar o acesso ao Banco de Dados com o Sequelize. 
//Documentação do Sequelize: https://sequelize.org/

// Define que vamos utilizar o sequelize como ORM

const Sequelize = require('sequelize');

const config = require('../config/config.js');

// Para o sequelize os dados do bd

const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;