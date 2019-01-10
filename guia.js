//node libraries
var express = require('express');
var socket = require('socket.io');

var IOSManager = require('./managers/IOSocketManager');

var app = express();

var _ios = IOSManager();

var server = app.listen(4005,function(){
	console.log('Listening in port 4000');
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection',function(socket){

    console.log('DATA: '+socket.id);

	console.log('Made socket connection');

    _ios.sendPmMsg(io,socket.id,'directo',socket.id);

	socket.on('enter',function(data){

        console.log('DATA: '+JSON.stringify(data));
        
        _ios.sendEveryOne(io,'chat',{
            nickname: 'SERVER',
            message: 'Bienvenido '+data.nickname+' al CHAT'
        });

	});

    socket.on('chat',function(data){

        _ios.sendEveryOne(io,'chat',data);

    });

    socket.on('room_join',function(data){

        _ios.joinRoom(socket,data.id_room);

    });

    socket.on('room_leave',function(data){

        _ios.leaveRoom(socket,data.id_room);

    });

});