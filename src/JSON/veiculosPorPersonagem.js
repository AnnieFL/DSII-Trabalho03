const axios = require('axios');

const veiculosPorPersonagem = async(object) => {
    const veiculos = [];
    const naves= [];
    let resposta = null;
    
    for (let i=0; i<object.vehicles.length; i++) {
        try {
            resposta = await axios.get(object.vehicles[i]);
        } catch (error) {
            return null;
        }
        veiculos.push(resposta.data);
        console.log(resposta.data.name);
    }
    for (let i=0; i<object.starships.length; i++) {
        try {
            resposta = await axios.get(object.starships[i]);
        } catch (error) {
            return null;
        }
        naves.push(resposta.data);
        console.log(resposta.data.name);

    }
    const resultado = {
        veiculos: veiculos,
        naves : naves
    }

    return resultado;
    
};

module.exports = {veiculosPorPersonagem};