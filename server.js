const express = require('express');
const app = express();
const hbs = require('hbs');

const port = proccess.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))


// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
//helperhbs
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Raul'

    });
});
app.get('/about', (req, res) => {
    res.render('about', {

    });
});


app.listen(por, () => {
    console.log(`Escuchando peticiones en el ${ port }`);
});