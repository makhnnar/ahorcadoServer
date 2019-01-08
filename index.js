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

let numero_cuarto = 0,
    miembros_partida = 0;

io.on(
  'connection',
   function(socket){
  
    contClientes++;
    socket.prioridad = 1;
    socket.numero = contClientes;
    socket.estado = PLAYERSTATE[0];
    clientesOnline.push(socket);

    emparejarJugadores(
      clientesOnline,
      miembros_partida,
      numero_cuarto
    );
        
    socket.emit(
      'enviarCliente',
      {
        data:'Bienvenido cliente '+contClientes
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
  
    socket.on(
      'jugar',
      function(msg){
        let palabra = msg.palabra,
        pista = msg.pista,
        numero = msg.numero,
        pareja = msg.pareja;
        
        if (palabras.length != 0) 
        {
          for(let y = 0; y < palabras.length;y++)
          {
            if (numero === palabras[y].pareja) 
            {
              let posicion1 = buscarPosicion(palabra[y].numero,clientesOnline);                  
              clientes[posicion1].emit('recibirPalabra',{palabra:palabra,pista:pista});
              let posicion2 = buscarPosicion(palabra[y].pareja,clientesOnline);
              clientes[posicion2].emit('recibirPalabra',{palabra:palabra[y].palabra,pista:palabra[y].pista});
            }else {
                palabras.push({
                  palabra:palabra,
                  pista:pista,
                  numero:numero,
                  pareja:pareja
                });        
            }
          }
        }else{
            palabras.push({
                palabra:palabra,
                pista:pista,
                numero:numero,
                pareja:pareja
            });
            console.log(JSON.stringify(palabras));
        }
    });
    
});       
/**
 * numero_cuarto empezara en 0
 * Crear una nueva funcion de emparejamiento
 * Va a crear un cuarto nuevo cada 2 jugadores(con el numero_cuarto), 
 * empezando por el primero que llegue
 * Ingresas el primer jugador al cuarto, guardas el id, hasta que llegue el segundo jugador,
 * lo ingresas al mismo cuarto, y actualizas el id de cuarto con un numero_cuarto++
 * cada vez que ingresas un jugador al cuarto, le das el numero_cuarto al que pertenecen 
 */

var emparejarJugadores = function(clientes,miembros,cuarto){
  let newPlayer = 0;
  
  newPlayer = buscarJugadorYCambiarStado(clientes);
  
  if(miembros < 2)
  {
    miembros++;
  }
  else
  {
    miembros = 1;
    cuarto++;
  }
  
  _iosm.joinRoom(newPlayer,cuarto);

  newPlayer.emit('iniciarJuego',{
    id:newPlayer.id,
    numero:newPlayer.numero,
    numCuarto:cuarto
  });

  /*if (newPlayer!==0) {
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

        posicion1 = buscarPosicion(newPartida.jugador1,clientesOnline);
        clientes[posicion1].estado = PLAYERSTATE[2];
        clientes[posicion1].emit('iniciarJuego',{
            id:clientes[posicion1].id,
            numero:clientes[posicion1].numero,
            pareja:newPartida.jugador2
        });
        posicion2 = buscarPosicion(newPartida.jugador2,clientesOnline);
        clientes[posicion2].estado = PLAYERSTATE[2];
        clientes[posicion2].emit('iniciarJuego',{
            id:clientes[posicion2].id,
            numero:clientes[posicion2].numero,
            pareja:newPartida.jugador1
        });
        newPartida.jugador1 = 0;
        newPartida.jugador2 = 0;
     }
  }*/
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