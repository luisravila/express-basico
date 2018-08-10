const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = esta la comunicacion del backend
let io = socketIO(server);

io.on('connection', (client) => {
    console.log('Usr Connectado');

    client.emit('enviarmensaje', { usuario: 'Admin', mensaje: 'Bienvenido a esta app' });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    //escuchar el cliente
    client.on('enviarmensaje', (msg) => {
        console.log(msg);
    });
});


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});