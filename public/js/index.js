var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server');

    socket.emit('createMessage', {
         from: 'Viju',
         text: 'Yup, that work for me'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});