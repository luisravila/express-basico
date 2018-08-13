        var socket = io();

        //Escuchar eventos
        socket.on('connect', function() {
            console.log('Connectado');
        });


        socket.on('disconnect', function() {
            console.log('Perdio conexion con servidor');
        });
        //Enviar informacion
        socket.emit('enviarmensaje', {
            usuario: 'luis',
            mensaje: 'hola'
        }, function(resp) {
            console.log('respuesta server', resp);
        });

        //Escuchar informacion
        socket.on('enviarmensaje', function(msg) {
            console.log('Servidor', msg);
        });