const axios = require('axios');

const buscaPorFilme = async(id = null) => {
    let url = `https://swapi.dev/api/films`;
    if (id) {
        url += `/${id}`;
    }

    try {
        const resposta = await axios.get(url);

        return resposta.data; 
    } catch (error) {
        return null;
    }
};

module.exports = {buscaPorFilme};