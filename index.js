var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var IOSManager = require('./managers/IOSocketManager');

const _iosm = IOSManager();

app.use(express.static('public'));

var palabras = [],
    PLAYERSTATE = ["sin jugar","esperando","jugando"],
    contClientes = 0,
    clientesOnline = [],
    partidas = [],
    newPartida = {jugador1:0,jugador2:0,apuesta1:0,apuesta2:0};

var numero_cuarto = 0,
    miembros_partida = 0;

io.on(
  'connection',
   function(socket){
  
    contClientes++;
    socket.prioridad = 1;
    socket.numero = contClientes;
    socket.estado = PLAYERSTATE[0];
    clientesOnline.push(socket);

    emparejarJugadores(clientesOnline,io);
     
    socket.emit(
      'enviarCliente',
      {
        data:
          'Bienvenido cliente '+
          contClientes+
          'Numero de sala: '+
          numero_cuarto
      }
    );

    socket.on(
      'enviarServer',
      function(msg){
        let indicePartida = 0,
        numeroAleatorio = msg.numeroAleatorio,
        numeroJugador = msg.numero;

        for (let j = 0; j < partidas.length; j++){
          if (partidas[j].jugador1 === numeroJugador){
            indicePartida = j;
          }else if (partidas[j].jugador2 === numeroJugador){
            indicePartida = j;
          }
        }

        console.clear();
        
        if (
          partidas[indicePartida].apuesta1 !== undefined && 
          partidas[indicePartida].apuesta1 !== 0
        ){
            //comparo
            whoWins(
                partidas[indicePartida].apuesta1,
                numeroAleatorio,
                indicePartida,
                clientesOnline
            );
        }else if(
          partidas[indicePartida].apuesta2 !== undefined && 
          partidas[indicePartida].apuesta2 !== 0
        ){
            //comparo
            whoWins(
                numeroAleatorio,
                partidas[indicePartida].apuesta2,
                indicePartida,
                clientesOnline
            );
        }else{
          if (partidas[indicePartida].jugador1 === numeroJugador){
            partidas[indicePartida].apuesta1 = numeroAleatorio;
          }else if (partidas[indicePartida].jugador2 === numeroJugador){
            partidas[indicePartida].apuesta2 = numeroAleatorio;
          }
          //guardo mi valor donde corresponde
        } 
        console.log('---------------------------------------------------');
        for (let k = 0; k < partidas.length; k++) 
        {
          console.log('partida '+(k+1)+': '+JSON.stringify(partidas[k]));
        }
        console.log('---------------------------------------------------');
    });

    socket.on('resultado',function(data){

         _iosm.sendRoomMsg(io,data.id_room,data.evento,data.info);
    
    });
  
    socket.on('eventoCuarto',function(data){

        _iosm.sendRoomMsg(io,data.id_room,data.evento,data.info);
    
    });    
});       

var emparejarJugadores = function(clientes,io){
  let newPlayer = 0;
  
  newPlayer = buscarJugadorYCambiarStado(clientes);
  
  if(miembros_partida < 2)
  {
    miembros_partida++;
  }
  else
  {
    miembros_partida = 1;
    numero_cuarto++;
  }
  
  _iosm.joinRoom(newPlayer,numero_cuarto);

  newPlayer.emit('iniciarJuego',{
    id:newPlayer.id,
    numero:newPlayer.numero,
    numCuarto:numero_cuarto
  });

  if(miembros_partida === 2){
    console.log('numero cuarto: '+numero_cuarto);
    _iosm.sendRoomMsg(
      io,
      numero_cuarto,
      'jugarAhora',
      'Juegue'
    );
  }  
};

var buscarJugadorYCambiarStado = function(clientes){
    let band = false,
        prioridad = 1,
        encontrado = null;
    while(band === false && prioridad<=3){
        for (let i = 0; (band == false && i<clientes.length); i++) {
            if (
                clientes[i].prioridad === prioridad &&
                clientes[i].estado === PLAYERSTATE[0]
            ) {
                band = true;
                clientes[i].estado = PLAYERSTATE[1];
                encontrado = clientes[i];
            }    
        }
        //incrementar la prioridad sino encontre un elemento para devolver
        if (band === false) {
            prioridad++;
        }
    }
    console.log('Encontrado con prioridad: '+prioridad);
    return encontrado;
};

var buscarPosicion = function(numero, clientes){
    let posicion1;
    for (let x = 0; x < clientes.length; x++) {
        if ( clientes[x].numero === numero) {
            posicion1=x;     
        } 
    }
    return posicion1;
};

var whoWins = function (valApuestaP1, valApuestaP2, posPartida, clientes) {
    if (valApuestaP1 > valApuestaP2) {
      let pos1 = buscarPosicion(partidas[posPartida].jugador1, clientes);
      clientes[pos1].prioridad = 2;
      clientes[pos1].estado = PLAYERSTATE[0];
      let pos2 = buscarPosicion(partidas[posPartida].jugador2, clientes);
      clientes[pos2].prioridad = 3;
      clientes[pos2].estado = PLAYERSTATE[0];
      emparejarJugadores(clientes);
      emparejarJugadores(clientes);
      partidas.splice(posPartida, 1);                       
    } else if (valApuestaP2 > valApuestaP1) {
      let pos2 = buscarPosicion(partidas[posPartida].jugador2, clientes);
      clientes[pos2].prioridad = 2;
      clientes[pos2].estado = PLAYERSTATE[0];
      let pos1 = buscarPosicion(partidas[posPartida].jugador1, clientes);
      clientes[pos1].prioridad = 3;
      clientes[pos1].estado = PLAYERSTATE[0];
      emparejarJugadores(clientes);
      emparejarJugadores(clientes);
      partidas.splice(posPartida, 1);
    } else {
      let pos1 = buscarPosicion(partidas[posPartida].jugador1, clientes);
      clientes[pos1].emit('jugar', {
        id: clientesOnline[pos1].id,
        numero: clientesOnline[pos1].numero
      });
      let pos2 = buscarPosicion(partidas[posPartida].jugador2, clientes);
      clientes[pos2].emit('jugar', {
        id: clientesOnline[pos2].id,
        numero: clientesOnline[pos2].numero
      });
      // empate
    }
  };

http.listen(3000, function(){
    console.log('listening on *:3000');
});