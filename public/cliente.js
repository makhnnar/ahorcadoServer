var socket = {};
(function(){
  socket = io();
  socket.on('enviarCliente', function(msg){
    console.log('RECIBIENDO: '+JSON.stringify(msg));
    var node = document.createElement("LI");
    var textnode = document.createTextNode(msg.data);
        node.appendChild(textnode);
        document.getElementById('messages').appendChild(node);
    });
})();

  var palabraRecibir,
      pistaRecibir,
      aciertos = [],
      numeroJugador,
      myId,
      numero_cuarto;
   
  socket.on('jugarAhora',function(msg){
    console.log(msg);
      (function(){
         var entradas = document.getElementById('entradas');
          entradas.showModal();
      })();
  });

  socket.on('ganador',function(msg){
      if(myId != msg.id){
        alert(
          'Has Perdido'
        )
      }else {
        alert(
          'Has Ganado' 
        )
      }
  });


  socket.on('iniciarJuego',function(msg){
      console.log('RECIBIENDO: '+JSON.stringify(msg));
      myId = msg.id;
      numeroJugador = msg.numero;
      numero_cuarto = msg.numCuarto;
});

 socket.on('recibirPalabra',function(msg){
        console.log('RECIBIENDO: '+JSON.stringify(msg));
        if (myId != msg.id) {

            palabraRecibir = msg.palabra,
            pistaRecibir = msg.pista;
                                               
            for (var a = 0; a < palabra.length; a++) {
                aciertos.push(0);
              }

            var mostrar = ocultarPalabra(palabraRecibir);
            document.getElementById('datosJuego').innerHTML = 'Palabra: ' +mostrar+ ' Pista: '+pistaRecibir;
        }
});

var procesarDatos = function(){
    let palabraEnviar = document.getElementById('palabra').value,        
        pistaEnviar = document.getElementById('pista').value;
        palabraEnviar = palabraEnviar.toLowerCase();
    
    socket.emit('eventoCuarto',{io,
                id_room:numero_cuarto,
                evento:'recibirPalabra',
                info:{id:myId,palabra:palabraEnviar,pista:pistaEnviar}});
    
    entradas.close();
};

var ingresarletra = function(){
    var letra = document.getElementById('letra').value;
        letra = letra.toLowerCase();

    for (let k = 0; k < palabraRecibir.length; k++) {
        if (letra === palabraRecibir[k]) {
            aciertos[k] = 1;
        }
      }
    
    var mostrar = ocultarPalabra(palabraRecibir);
    
    if (mostrar === palabraRecibir) {
        socket.emit('resultado',{io,
                    id_room:numero_cuarto,                  
                    evento:'ganador',
                    info:{id:myId}
        });
    }

    document.getElementById('datosJuego').innerHTML ='Palabra: ' +mostrar+ ' Pista: '+pistaRecibir;
    document.getElementById('letra').value = '';
};

var ocultarPalabra = function(palabra) {
    var mostrar = '';
    for (let h = 0; h < palabra.length; h++) {
        if (aciertos[h] === 1) {
            mostrar = mostrar + palabra[h];
          }else{
            mostrar = mostrar + '*';
          }
      } 
      return mostrar; 
};