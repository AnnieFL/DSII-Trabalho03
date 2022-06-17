const express = require("express");
const axios = require("axios");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

app.use(express.urlencoded());

const routes = require('./routes/routes');
app.use('/', routes);

const PORT = process.env.PORT || 3000;
console.log({PORT});
app.listen(PORT, () => console.log(`Server iniciado na porta ${PORT}`));
