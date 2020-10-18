//primeiro desafio da feira
let line = gets().split(' ');
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let X = A + B;
console.log('X = ' + X);

//desafio da multiplicação
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let PROD = valor1 * valor2;
console.log('PROD = ' + PROD);

//desafio do salario
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
let salary = parseFloat(valor2 * valor3).toFixed(2); // Digite aqui o calculo do salário
console.log('NUMBER = ' + valor1);
console.log('SALARY = U$ ' + salary);
