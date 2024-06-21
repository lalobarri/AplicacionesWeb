import express from "express";
//fix especial para el manejo de rutas
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//Server
const app = express();
app.set('port',4000); //Puerto a ser utilizado por el servidor
app.listen(app.get('port'));
//Se indica que el servidor esta funcionando (no se exponen datos sensibles)
//No se expone código en el front
console.log('Servidor corriendo en el puerto', app.get('port'));
//Rutas
app.get('/',(req, res)=> res.sendFile(__dirname + '/pages/login.html'));
app.get('/register',(req, res)=> res.sendFile(__dirname + '/pages/register.html'));

//Configuración
//Especialmente para archivos estáticos
app.use(express.static(__dirname + '/public'));

console.log('Este es un cambio actualizado');
console.log('Hoy es:', Date(Date.now));