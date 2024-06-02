const db = require('./db');

const TbParticipante = db.sequelize.define('tbparticipante', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

//TbParticipante.sync({force: true});

module.exports = TbParticipante;