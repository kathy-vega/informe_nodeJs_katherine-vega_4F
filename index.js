const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = proces.env.PORT || 3000;

let pintoresR  = require('./routes/pintor');

const app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresR);

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://proyecto:informeNJS@vegakatherine-o5f4d.gcp.mongodb.net/video?retryWrites=true&w=majority'
mongoose.connect(cadena, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log('Conexion establecida');
    })
    .catch(err => console.log(err));
    
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
});