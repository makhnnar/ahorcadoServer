var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


const PLAYERSTATE = {'sin jugar','esperando','jugando'};
var contClientes = 0;
var clientesOnline = [];
var partidas = [];
var newPartida = {jugador1:0,jugador2:0,apuesta1:0,apuesta2:0};

io.on('connection', function(socket){
  
  contClientes++;
  socket.prioridad=1;
  socket.numero = contClientes;
  socket.estado=PLAYERSTATE[0];
  clientesOnline.push(socket);

  emparejarJugadores();
  
  socket.emit('enviarCliente',{data:'Bienvenido cliente '+contClientes});
  
  socket.on('enviarServer',function(msg){
    var numeroAleatorio = msg.numeroAleatorio;
    var numeroJugador = msg.numero;
    for (var j = 0; j < partidas.length; j++) {

        if (partidas[j].jugador1 === numeroJugador){
                partidas[j].apuesta1=numeroAleatorio;

            }else if (partidas[j].jugador2 === numeroJugador) {
                partidas[j].apuesta2=numeroAleatorio;
            
            }
    }

    if (partidas[j].apuesta1!==0) {
            //comparo
            if (partidas[j].apuesta1>numeroAleatorio) {
                
            }else if(numeroAleatorio>partidas[j].apuesta1){

            }else{
              //empate
            }
          }else if(partidas[j].apuesta2!==0){
          //comparo
          if (partidas[j].apuesta2>numeroAleatorio) {

            }else if(numeroAleatorio>partidas[j].apuesta2){

            }else{
              //empate
            }
        }else{
            if (partidas[j].jugador1 === numeroJugador){
                partidas[j].apuesta1=numeroAleatorio;

            }else if (partidas[j].jugador2 === numeroJugador) {
                partidas[j].apuesta2=numeroAleatorio;

            }
          //guardo mi valor donde corresponde
        }   
    //recorrer el arreglo de partidas para buscar en que partida estoy
    //verifico si ya existe en la partida el valor 1 o el valor 2
    //sino existe ninguno, guardo el valor que llego donde corresponda
    //si existe comparo con el valor guardado y determino quien gana
  });
  socket.on('enviarServer', function(msg){
  	console.log('recibiendo servidor: '+msg);
    io.emit('enviarCliente', {data:msg});
  });
    
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var emparejarJugadores=function(){
  var newPlayer = buscarJugadorYCambiarStado();
  if (newPlayer!==0) {
      if(newPartida.jugador1===0){
        newPartida.jugador1=newPlayer;
      }else if(newPartida.jugador2===0){
        newPartida.jugador2=newPlayer;
      }else{
        //posible llamada recursiva
      }
      if(newPartida.jugador1!==0 && newPartida.jugador2!==0){
        partidas.push({
          jugador1:newPartida.jugador1,
          jugador2:newPartida.jugador2,
          apuesta1:0,
          apuesta2:0
        });
        posicion1=buscarPosicion(newPartida.jugador1);
        clientesOnline[posicion1].emit('jugar',{id:clientesOnline[posicion1].id,numero:socket.numero});
        posicion2=buscarPosicion(newPartida.jugador2);
        clientesOnline[posicion2].emit('jugar',{id:clientesOnline[posicion2].id,numero:socket.numero});
        newPartida.jugador1 = 0;
        newPartida.jugador2 = 0;
      }
  }
};

var buscarJugadorYCambiarStado=function(){
    var band = false;
    var prioridad = 1;
    var encontrado = 0;
    while(band===false && prioridad<=3){
       for (var i = 0; band==false; i++) {
            if (clientesOnline[i].prioridad===prioridad&&clientesOnline[i].estado=PLAYERSTATE[0]) {
                band = true;
                clientesOnline[i].estado=PLAYERSTATE[1];
                encontrado = clientesOnline[i].numero;
            }    
       }
        //incrementar la prioridad sino encontre un elemento para devolver
        if (band===false) {
            prioridad++;
        }
    }
    return encontrado;
};
var buscarPosicion=function(numero){
    var posicion1;
      for (var x = 0; x < clientesOnline.length; x++) {
          if ( clientesOnline[x].numero===numero) {
              posicion1=x;     
          } 
      }
    return posicion1;
};