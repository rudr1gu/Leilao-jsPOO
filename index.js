const express = require('express');
const app = express();
const path = require('path');
const { cadastrarParticipante } = require('./controller/cadastrarParticipante.js');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(express.static(path.join(__dirname,'views')));
app.use('/controller', express.static(path.join(__dirname, 'controller')));
app.use('/model', express.static(path.join(__dirname, 'model')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/views/cadastro.html');
});

app.post('/cadastrar', cadastrarParticipante);



app.listen(9700, () => {
    console.log('Servidor rodando na porta 9700');
});