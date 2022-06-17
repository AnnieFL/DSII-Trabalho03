const {Router} = require('express');
const routes = Router();

const { buscaPorFilme } = require("../JSON/buscaPorFilme");
const { personagemPorFilme } = require("../JSON/personagemPorFilme");
const { buscaPorPersonagem } = require("../JSON/buscaPorPersonagem");
const { veiculosPorPersonagem } = require("../JSON/veiculosPorPersonagem");

routes.get('/', async (req, res) => {
    const resultado = await buscaPorFilme();
    
    return res.render('index', {resultado: resultado});
});

routes.post('/', async (req, res) => {
    const {film} = req.body;
    const resultado = await buscaPorFilme(film);

    const personagens = await personagemPorFilme(resultado.characters)
    
    return res.render('lista', {resultado: resultado, personagens: personagens});
});

routes.get('/personagem/:id', async (req, res) => {
    const {id} = req.params;
    const resultado = await buscaPorPersonagem(id);

    const veiculos = await veiculosPorPersonagem(resultado);
    console.log({resultado});
    console.log({veiculos})

    return res.render('listaVeiculos', {resultado: resultado, veiculos: veiculos});
})

module.exports = routes;