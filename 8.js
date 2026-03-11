function saludarSegunHora(hora) {
    if (hora < 12) return "Buenos días";
    if (hora < 18) return "Buenas tardes";
    return "Buenas noches";
}
console.log(saludarSegunHora(20)); 