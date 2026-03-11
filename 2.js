function restarSeguro(a, b) {
    let resultado = a - b;
    if (resultado < 0) {
        return "Resultado negativo: " + resultado;
    }
    return resultado;
}
console.log(restarSeguro(10, 15)); 