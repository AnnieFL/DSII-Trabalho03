const axios = require('axios');

const personagemPorFilme = async(array) => {
    const personagens = [];
    let resposta = null; 
    
    for (let i=0; i<array.length; i++) {
    try {
            resposta = await axios.get(array[i]);
        } catch (error) {
            return null;
        }
        personagens.push(resposta.data);
    }
    return personagens;
    
};

module.exports = {personagemPorFilme};