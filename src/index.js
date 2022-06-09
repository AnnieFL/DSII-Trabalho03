const express = require("express");
const axios = require("axios");
const { buscaPorFilme } = require("./JSON/buscaPorFilme");
const { personagemPorFilme } = require("./JSON/personagemPorFilme");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

app.use(express.urlencoded());

app.get('/', async (req, res) => {
    const resultado = await buscaPorFilme();
    
    return res.render('index', {resultado: resultado});
});

app.post('/', async (req, res) => {
    const {film} = req.body;
    const resultado = await buscaPorFilme(film);

    const personagens = await personagemPorFilme(resultado.characters)
    
    return res.render('lista', {resultado: resultado, personagens: personagens});
});

app.listen(3000, ()=> console.log("Escutando na porta 3000"));