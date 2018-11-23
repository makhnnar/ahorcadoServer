const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

var msg = {username:'Pepe',message:'Hola'};

io.on('connection', (client) => {
	client.emit('gustavo',JSON.stringify(msg));
 });

server.listen(5000);