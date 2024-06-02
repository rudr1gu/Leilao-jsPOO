const Participante = require('../model/Participante.js');

const cadastro = document.getElementById('btnCadastrar');

cadastro.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;

    console.log(Participante);   
    alert("Cadastro efetuado com sucesso!");
});