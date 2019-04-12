//1. Importar librerias
var express = require('express');
var exphbs = require('express-handlebars');

//1. Crear app de express
var app = express();

//1. Establecer la carpeta public como estatica
app.use(express.static('public'));

//1. Registro de handlebars
app.engine('handlebars',exphbs());
//1.Establecer handlebars como el motor de render
app.set('view engine','handlebars');


//2. Ruta inicial
app.get('/',function(request,response){

    var contexto = {
        titulo: 'Pagina principal'
    };

    response.render('home',contexto);
});






//1. Escuchar desde puerto 3000
app.listen(3000, function(){
    console.log('Servidor en el puerto 3000')
});