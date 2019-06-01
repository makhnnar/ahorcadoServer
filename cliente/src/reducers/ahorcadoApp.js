const initState = {
  	palabraRecibir:'',
    pistaRecibir:'',
    palabraEnviar:'',
    pistaEnviar:'',
    aciertos : [],
    socket:{},
    palabraOculta:'',
    id:'',
    numeroJugador:'',
    numCuarto:''
};

const ahorcadoApp = (state = initState ,action) => {
	switch (action.type) {
    case 'PALABRA_OPONENTE':
      return {
      	...state,
      	palabraRecibir:action.payload.palabraRecibir,
      	pistaRecibir:action.payload.pistaRecibir
      }
    case 'PALABRA_ENVIAR':
      return {
      	...state,
      	palabraEnviar:action.payload.palabraEnviar,
      	pistaEnviar:action.payload.pistaEnviar
      }
      case 'NUM_SALA':
     return {
     	...state,
     	numCuarto:action.payload
     }
     case 'SOCKET':
     return {
      ...state,
      socket:action.payload.socket
     }
     case 'ID_NUM_JUGADOR':
     	return {
     		...state,
     		id:action.payload.id,
     		numeroJugador:action.payload.numJugador
     	}	
     case 'PALABRA_OCULTA':
     	return {
     		...state,
     		palabraOculta:action.payload
     	}
    default:
      return state
  }
}


export default ahorcadoApp