const express = require('express');
const routes = require('./src/routes/routes');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(routes);

app.set('views', './src/View');
app.set('view engine', 'ejs');

app.listen(3333, (error) => {
    if(!error) console.log('Servidor iniciado com sucesso');
    else console.log('Não foi possível iniciar o servidor');
});