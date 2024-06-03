// const Participante = require('../model/Participante.js');
const { participantes } = require('./cadastrarParticipante.js');


const enviar = document.getElementById('btnEnviar');

enviar.addEventListener('click', ()=>{
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    participantes.forEach(participante => {
        if(participante.loginParticipante(email, senha)){
            alert('Login efetuado com sucesso!');
            window.location.href = '/home';
        }else{
            alert('Email ou senha inválidos!');
        }
    });

})