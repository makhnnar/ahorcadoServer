var palabra = '';
var pista = '';
var aciertos=[];
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
        
  socket.on('jugar',function(msg){
      console.log('RECIBIENDO: '+JSON.stringify(msg));
           setTimeout(function(){
              var numeroAleatorio=Math.trunc(Math.random()*50+1);
              console.log('enviando: '+numeroAleatorio);
              socket.emit('enviarServer',{numero:msg.numero,numeroAleatorio:numeroAleatorio});
           },Math.trunc(Math.random()*9+1)*1000);
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
          document.getElementById('pista').value = '';
          document.getElementById('palabra').value = '';
      });

var Procesardatos=function(){
    palabra = document.getElementById('palabra').value;
    palabra = palabra.toLowerCase();
    pista = document.getElementById('pista').value;
    socket.emit('enviarDatos',{palabra:palabra,pista:pista})
}

var ingresarletra=function(){
    var letra=document.getElementById('letra').value;
        letra=letra.toLowerCase();
    var coincidencias = 0;

    for (var k = 0; k<palabra.length; k++) {
        if (letra===palabra[k]) {
            aciertos[k] = 1;
            coincidencias++;
          }
      }
          
    var mostrar = ocultarPalabra(palabra);
    socket.emit('enviarLetra',{letra:letra,mostrar:mostrar})
              
    if (mostrar===palabra) {
        socket.emit('resultado',{palabra:palabra})
      }

    document.getElementById('datosJuego').innerHTML ='Palabra: ' +mostrar+ ' Pista: '+pista;
    document.getElementById('letra').value = '';
}

var ocultarPalabra = function(palabra) {
    var mostrar = '';
    for (var h = 0; h<palabra.length; h++) {
        if (aciertos[h]===1) {
            mostrar = mostrar + palabra[h];
          }else{
            mostrar = mostrar + '*';
          }
      } 
      return mostrar; 
}