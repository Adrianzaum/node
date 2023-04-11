function calcular(operador, num1, num2) {
    let resultado;
    switch(operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operador inválido!";
    }
    return resultado;
}

module.exports = {
    calcular: calcular
};