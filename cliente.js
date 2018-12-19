var palabra = '';
var pista = '';
var aciertos = [];
var numeroJugador;
var pareja;
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

  socket.on('iniciarJuego',function(msg){
      console.log('RECIBIENDO: '+JSON.stringify(msg));
      numeroJugador = msg.numeroJugador;         
      pareja = msg.pareja;
      (function(){
          entradas = document.getElementById('entradas');
          entradas.showModal();
      })();
  });

 socket.on('recibirPalabra',function(msg){
           console.log('RECIBIENDO: '+JSON.stringify(msg));
           palabra = msg.palabra;
           pista = msg.pista;
        
          for (var a = 0;a < palabra.length; a++) {
              aciertos.push(0);
          }

          var mostrar = ocultarPalabra(palabra);
  
          document.getElementById('datosJuego').innerHTML = 'Palabra: ' +mostrar+ ' Pista: '+pista;
});

var procesarDatos = function(){
    palabra = document.getElementById('palabra').value;
    palabra = palabra.toLowerCase();
    pista = document.getElementById('pista').value;
    socket.emit('jugar',{palabra:palabra,pista:pista,numero;numeroJugador,pareja:pareja});
    entradas.close();
};

var ingresarletra=function(){
    var letra = document.getElementById('letra').value;
        letra = letra.toLowerCase();
    var coincidencias = 0;

    for (let k = 0; k < palabra.length; k++) {
        if (letra === palabra[k]) {
            aciertos[k] = 1;
            coincidencias++;
          }
      }
          
    var mostrar = ocultarPalabra(palabra);
    socket.emit('enviarLetra',{letra:letra,mostrar:mostrar})
              
    if (mostrar === palabra) {
        socket.emit('resultado',{palabra:palabra})
      }

    document.getElementById('datosJuego').innerHTML ='Palabra: ' +mostrar+ ' Pista: '+pista;
    document.getElementById('letra').value = '';
}

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
}