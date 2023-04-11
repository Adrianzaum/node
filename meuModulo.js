function calcular(num1, operador, num2) {
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 'Operador inválido';
    }
  }
  
  console.log(calcular(2, '+', 3)); // output: 5
  console.log(calcular(10, '*', 5)); // output: 50
  console.log(calcular(8, '/', 2)); // output: 4
  console.log(calcular(5, '%', 2)); // output: "Operador inválido"
  