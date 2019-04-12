//1. Importar librerias
var express = require('express');
var exphbs = require('express-handlebars');
//4.
const fs = require('fs');
var cont = 0;

//1. Crear app de express
var app = express();

//1. Establecer la carpeta public como estatica
app.use(express.static('public'));
//3.
app.use(express.urlencoded({ extended: true }));

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

function archivoEscrito(){
    console.log('Archivo escrito')
}

//3. Crear ruta post: para crear informacion
app.post('/login',function(request,response){
    console.log(request.body.correo);
    console.log(request.body.contrasena);
    fs.writeFile('usuario' + cont + '.txt', request.body.correo + '\n' + request.body.contrasena,'utf8',archivoEscrito);
    cont++; 
    response.send('hola');
    //respond.redirect
});



//1. Escuchar desde puerto 3000
app.listen(3000, function(){
    console.log('Servidor en el puerto 3000')
});