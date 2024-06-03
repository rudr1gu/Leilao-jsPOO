const Participante = require('../model/class/Participante.js');
const TbParticipante = require('../model/TbParticipante.js');

const participantes = [];

const cadastrarParticipante = (req, res) => {
    TbParticipante.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        endereco: req.body.endereco,
        telefone: req.body.telefone
    }).then(() => {
        const novoParticipante = new Participante(
            req.body.id,
            req.body.nome,
            req.body.email,
            req.body.senha,
            req.body.endereco,
            req.body.telefone
        );
        participantes.push(novoParticipante);
        res.redirect('/login');
        console.log(participantes);
    }).catch((erro) => {
        res.send('Erro ao cadastrar participante: ' + erro);
    });
};

module.exports = { cadastrarParticipante, participantes };