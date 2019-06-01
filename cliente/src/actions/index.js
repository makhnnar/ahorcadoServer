export const palabraOponent = (palabraRecibir,pistaRecibir) => ({
  type: 'PALABRA_OPONENTE',
  payload:{palabraRecibir:palabraRecibir,pistaRecibir:pistaRecibir}
})

export const palabraEnviar = (palabraEnviar,pistaEnviar) => ({
  type: 'PALABRA_ENVIAR',
  payload:{palabraEnviar:palabraEnviar,pistaEnviar:pistaEnviar}
})

export const socket = (socket) => ({
  type:'SOCKET',
  payload:socket
})

export const numSala = (numSala) => ({
  type:'NUM_SALA',
  payload:numSala
})

export const idNumJugador = (id,numJugador) => ({
  type:'ID_NUM_JUGADOR',
  payload:{id:id,numJugador:numJugador}
})

export const palabraOculta = (palabraOculta) => ({
  type:'PALABRA_OCULTA',
  payload:palabraOculta
})
