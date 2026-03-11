// --- FUNCIONES DE LÓGICA (Temas previos) ---

const tirarDado = () => Math.floor(Math.random() * 11) + 1; // Genera del 1 al 11

function calcularResultado(total, nuevaCarta) {
    return total + nuevaCarta;
}

function verificarEstado(puntos) {
    if (puntos === 21) return "¡BLACKJACK! Ganaste a la perfección. ";
    if (puntos > 21) return "¡TE PASASTE! Game Over. ";
    return "Tienes " + puntos + " puntos. ¿Quieres otra carta?";
}

// --- SIMULACIÓN DEL JUEGO ---

let miPuntuacion = 0;

console.log("--- BIENVENIDO A JS CODE-JACK ---");

// Primera jugada
let carta1 = tirarDado();
miPuntuacion = calcularResultado(miPuntuacion, carta1);
console.log("Tu primera carta: " + carta1);

// Segunda jugada
let carta2 = tirarDado();
miPuntuacion = calcularResultado(miPuntuacion, carta2);
console.log("Tu segunda carta: " + carta2);

// Resultado final
console.log("---------------------------------");
console.log(verificarEstado(miPuntuacion));
console.log("---------------------------------");