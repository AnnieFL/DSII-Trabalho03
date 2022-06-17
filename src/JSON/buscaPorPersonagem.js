const axios = require('axios');

const buscaPorPersonagem = async(id) => {
    let url = `https://swapi.dev/api/people/${id}`;

    try {
        const resposta = await axios.get(url);

        return resposta.data; 
    } catch (error) {
        return null;
    }
};

module.exports = {buscaPorPersonagem};