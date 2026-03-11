function verificarBust(puntos) {
    if (puntos > 21) {
        return "¡Te pasaste! Perdiste.";
    } else if (puntos === 21) {
        return "¡Blackjack perfecto!";
    } else {
        return "Sigues en el juego con " + puntos;
    }
}
console.log(verificarBust(25));