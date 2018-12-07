var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var PLAYERSTATE = ["sin jugar","esperando","jugando"];
var contClientes = 0;
var clientesOnline = [];
var partidas = [];
var newPartida = {jugador1:0,jugador2:0,apuesta1:0,apuesta2:0};

io.on('connection', function(socket){
  
  contClientes++;
  socket.prioridad = 1;
  socket.numero = contClientes;
  socket.estado = PLAYERSTATE[0];
  clientesOnline.push(socket);

  emparejarJugadores(clientesOnline);
  
  socket.emit('enviarCliente',{data:'Bienvenido cliente '+contClientes});
  
  socket.on('enviarServer',function(msg){
    let indicePartida = 0;
    let numeroAleatorio = msg.numeroAleatorio;
    let numeroJugador = msg.numero;

    for (let k = 0; k < partidas.length; k++) {
        console.log(partidas[k]);
    }

    for (let j = 0; j < partidas.length; j++) {
        if (partidas[j].jugador1 === numeroJugador){
                indicePartida=j;
            }else if (partidas[j].jugador2 === numeroJugador) {
                indicePartida=j;
            }
    }

    if (partidas[indicePartida].apuesta1 !== undefined && partidas[indicePartida].apuesta1 !== 0) {
            //comparo
            if (partidas[indicePartida].apuesta1 > numeroAleatorio) {
                 var pos1=buscarPosicion(partidas[indicePartida].jugador1,clientesOnline);
                 clientesOnline[pos1].prioridad=2;
                 clientesOnline[pos1].estado=PLAYERSTATE[0];
                 var pos2=buscarPosicion(partidas[indicePartida].jugador2,clientesOnline);
                 clientesOnline[pos2].prioridad=3;
                 clientesOnline[pos2].estado=PLAYERSTATE[0];
                 emparejarJugadores(clientesOnline);
                 emparejarJugadores(clientesOnline);
                 partidas.splice(indicePartida,1);                       
            }else if(numeroAleatorio > partidas[indicePartida].apuesta1){
                var pos2=buscarPosicion(partidas[indicePartida].jugador2,clientesOnline);
                clientesOnline[pos2].prioridad=2;
                clientesOnline[pos2].estado=PLAYERSTATE[0];
                var pos1=buscarPosicion(partidas[indicePartida].jugador1,clientesOnline);
                clientesOnline[pos1].prioridad=3;
                clientesOnline[pos1].estado=PLAYERSTATE[0];
                emparejarJugadores(clientesOnline);
                emparejarJugadores(clientesOnline);
                partidas.splice(indicePartida,1);
            }else{
                posicion1=buscarPosicion(partidas[indicePartida].jugador1,clientesOnline);
                clientesOnline[posicion1].emit('jugar',{id:clientesOnline[posicion1].id,numero:clientesOnline[posicion1].numero});
                posicion2=buscarPosicion(partidas[indicePartida].jugador2,clientesOnline);
                clientesOnline[posicion2].emit('jugar',{id:clientesOnline[posicion2].id,numero:clientesOnline[posicion2].numero});
                //empate
            }
          }else if(partidas[indicePartida].apuesta2 !== undefined && partidas[indicePartida].apuesta2 !== 0){
          //comparo
            if (partidas[indicePartida].apuesta2 > numeroAleatorio) {
                var pos2=buscarPosicion(partidas[indicePartida].jugador2,clientesOnline);
                clientesOnline[pos2].prioridad=2;
                clientesOnline[pos2].estado=PLAYERSTATE[0];
                var pos1=buscarPosicion(partidas[indicePartida].jugador1,clientesOnline);
                clientesOnline[pos1].prioridad=3;
                clientesOnline[pos1].estado=PLAYERSTATE[0];
                emparejarJugadores(clientesOnline);
                emparejarJugadores(clientesOnline);
                partidas.splice(indicePartida,1);
            }else if(numeroAleatorio > partidas[indicePartida].apuesta2){
                var pos1=buscarPosicion(partidas[indicePartida].jugador1,clientesOnline);
                clientesOnline[pos1].prioridad=2;
                clientesOnline[pos1].estado=PLAYERSTATE[0];
                var pos2=buscarPosicion(partidas[indicePartida].jugador2,clientesOnline);
                clientesOnline[pos2].prioridad=3;
                clientesOnline[pos2].estado=PLAYERSTATE[0];
                emparejarJugadores(clientesOnline);
                emparejarJugadores(clientesOnline);
                partidas.splice(indicePartida,1);
            }else{
                posicion2=buscarPosicion(partidas[indicePartida].jugador2,clientesOnline);
                clientesOnline[posicion2].emit('jugar',{id:clientesOnline[posicion2].id,numero:clientesOnline[posicion2].numero});
                posicion1=buscarPosicion(partidas[indicePartida].jugador1,clientesOnline);
                clientesOnline[posicion1].emit('jugar',{id:clientesOnline[posicion1].id,numero:clientesOnline[posicion1].numero});
              //empate
            }
         }else{
              if (partidas[indicePartida].jugador1 === numeroJugador){
                  partidas[indicePartida].apuesta1 = numeroAleatorio;

              }else if (partidas[indicePartida].jugador2 === numeroJugador) {
                  partidas[indicePartida].apuesta2 = numeroAleatorio;
              }
          //guardo mi valor donde corresponde
        } 
    
  });

  socket.on('enviarServer', function(msg){
    io.emit('enviarCliente', {data:msg});
  });
    
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var emparejarJugadores=function(clientes){
  let newPlayer = 0;
  newPlayer = buscarJugadorYCambiarStado(clientes);
  if (newPlayer!==0) {
      if(newPartida.jugador1===0){
        newPartida.jugador1=newPlayer;
      }else if(newPartida.jugador2===0){
        newPartida.jugador2=newPlayer;
      }else{
        //posible llamada recursiva si no empareja
      }
      if(newPartida.jugador1!==0){
        newPartida.apuesta1 = 0;
      }
      if (newPartida.jugador2!==0) {
          newPartida.apuesta2 = 0;
      }
      if(newPartida.jugador1!==0 && newPartida.jugador2!==0){
        partidas.push({
          jugador1:newPartida.jugador1,
          jugador2:newPartida.jugador2,
          apuesta1:newPartida.apuesta1,
          apuesta2:newPartida.apuesta2
        });        
        posicion1=buscarPosicion(newPartida.jugador1,clientesOnline);
        clientes[posicion1].estado=PLAYERSTATE[2];
        clientes[posicion1].emit('jugar',{id:clientes[posicion1].id,numero:clientes[posicion1].numero});
        posicion2=buscarPosicion(newPartida.jugador2,clientesOnline);
        clientes[posicion2].estado=PLAYERSTATE[2];
        clientes[posicion2].emit('jugar',{id:clientes[posicion2].id,numero:clientes[posicion2].numero});
        newPartida.jugador1 = 0;
        newPartida.jugador2 = 0;
      }
  }
};

var buscarJugadorYCambiarStado=function(clientes){
    let band = false;
    let prioridad = 1;
    let encontrado = 0;
    while(band===false && prioridad<=3){
        for (let i = 0; (band==false && i<clientes.length); i++) {
            console.log('i: '+i);
            if (clientes[i].prioridad === prioridad && clientes[i].estado === PLAYERSTATE[0]) {
                band = true;
                clientes[i].estado=PLAYERSTATE[1];
                encontrado = clientes[i].numero;
            }    
        }
        //incrementar la prioridad sino encontre un elemento para devolver
        if (band===false) {
            prioridad++;
        }
    }
    return encontrado;
};
var buscarPosicion=function(numero,clientes){
    let posicion1;
      for (let x = 0; x < clientes.length; x++) {
          if ( clientes[x].numero===numero) {
              posicion1=x;     
          } 
      }
    return posicion1;
};