const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');

//puerto heroku o 3000
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');


// ofrece carpeta publica
app.use(express.static(__dirname + '/public'));

// express hbs engine
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Manuel'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});


app.get('/json', function(req, res) {

    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    };

    res.send(salida);
})

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
})