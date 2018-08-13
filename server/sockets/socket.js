const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usr Connectado');

    client.emit('enviarmensaje', { usuario: 'Admin', mensaje: 'Bienvenido a esta app' });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    //escuchar el cliente
    client.on('enviarmensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarmensaje', data);

        // if (msg.usuario) {
        //     callback({ resp: 'todo ok' });
        // } else {
        //     callback({ resp: 'todo mal' });
        // }
    });
});