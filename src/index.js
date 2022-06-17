const express = require("express");
const axios = require("axios");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

app.use(express.urlencoded());

const routes = require('./routes/routes');
app.use('/', routes);

app.listen(3000, ()=> console.log("Escutando na porta 3000"));