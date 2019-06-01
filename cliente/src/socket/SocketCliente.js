import io from "socket.io-client";
import React from 'react';

class SocketCliente {

state = {
  palabraRecibir:"",
  pistaRecibir:"",
  palabraEnviar:"",
  pistaEnviar:"",
  aciertos : [],
  socket:{},
  myId:''
};

construtor(props){
  //se hacen todas las instancias
  this.conectarServer();
  this.ganador();
  this.jugarAhora();
  this.iniciarJuego();
  this.recibirPalabra();
};
  
conectarServer = (callback) => {
    let socket = io('http://localhost:4000');
      socket.on('enviarCliente', function(msg){
        console.log('RECIBIENDO: '+JSON.stringify(msg));
        //callback(msg.data);
    });
    callback(socket);
};

ganador(socket,callback){
    socket.on('ganador', function(msg){
      if(this.state.myId != msg.id){
        callback(
          'Has Perdido'
        )
      }else {
        callback(
          'Has Ganado' 
        )
      }
    });
  }

jugarAhora(callback){
    this.state.socket.on('jugarAhora', function(msg){
      if(msg !== null){
        callback();
      }
    });  
}
  
iniciarJuego(socket,callback){
      socket.on('iniciarJuego',function(msg){
      console.log('RECIBIENDO: '+JSON.stringify(msg));
      this.state.myId = msg.id;
      callback(msg.id,msg.numero,msg.numCuarto);
  });
};  

recibirPalabra(socket,callback1,callback2){
    socket.on('recibirPalabra',function(msg){
          console.log('RECIBIENDO: '+JSON.stringify(msg));
          if (this.state.myId != msg.id) {
                
                this.state.palabraRecibir = msg.palabra;   
                this.state.pistaRecibir = msg.pista;

                callback1(msg.palabra,msg.pista);

              for (var a = 0; a < this.state.palabraRecibir.length; a++) {
                   this.state.aciertos.push(0);
                }

              var mostrar = this.ocultarPalabra(this.state.palabraRecibir);

              callback2(mostrar);
          }
  });
};

procesarDatos(socket,callback,palabraEnviar,pistaEnviar){
    this.state.palabraEnviar = palabraEnviar;       
    this.state.pistaEnviar = pistaEnviar;
    
    this.state.palabraEnviar = this.state.palabraEnviar.toLowerCase();
    
    callback(palabraEnviar,pistaEnviar);

    socket.emit(
      'eventoCuarto',
      {
        io,
        id_room:this.state.numero_cuarto,
        evento:'recibirPalabra',
        info:{id:this.state.myId,palabra:this.state.palabraEnviar,pista:this.state.pistaEnviar}
      }
    );
    
};

ingresarLetra(socket,letra,callback){
    var letra = letra;
        letra = letra.toLowerCase();

    for (let k = 0; k < this.state.palabraRecibir.length; k++) {
        if (letra === this.state.palabraRecibir[k]) {
            this.state.aciertos[k] = 1;
        }
      }
    
    var mostrar = this.ocultarPalabra(this.state.palabraRecibir);
    
    callback(mostrar);

    if (mostrar === this.state.palabraRecibir) {
        socket.emit(
          'resultado',
          {
            io,
            id_room:this.state.numero_cuarto,                  
            evento:'ganador',
            info:{id:this.state.myId}
          }
        );
    }
};

ocultarPalabra(palabra){
      var mostrar = '';
      for (let h = 0; h < palabra.length; h++) {
          if (this.state.aciertos[h] === 1) {
              mostrar = mostrar + palabra[h];
            }else{
              mostrar = mostrar + '*';
            }
        }
        return mostrar; 
  };    

};

const socketCliente = new SocketCliente();
export default socketCliente;