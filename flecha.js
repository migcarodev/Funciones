const verificarGanador = (puntos, nombre) => puntos === 21 ? `¡Ganaste, ${nombre}!` : "Sigue intentando";

console.log(verificarGanador(21, "Jugador 1")); 