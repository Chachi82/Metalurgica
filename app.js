const express = require('express');
const app = express();
const path= require('path');
const dataUsuarios=require('./usuarios.json');

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());



app.get('/todoslosusuarios',(req,res)=>{

    console.log(dataUsuarios)


});

app.get('/',(req,res)=>{
    res.render('./index',{
        titulo:"Servicios"
    })
})

app.get('/contactos',(req,res)=>{
    res.render('./pages/contactos',{
    titulo:"Contacto"
     })
});

app.get('/registro',(req,res)=>{
    res.render('./pages/registrarse',{
    titulo:"Registro"
     })
});

app.get('/usuarios',(req,res)=>{
    res.render('./usuarios',{
    titulo:"Usuarios"
     })
});

app.get('/login',(req,res)=>{
    res.render('./pages/login',{
    titulo:"Iniciar Sesion"
     })
});



app.listen(5000,()=>{
    console.log("Server Escuchando el puerto 5000");
});