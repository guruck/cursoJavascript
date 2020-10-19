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

//desafio 2
//desafio da lista
let lista = [];
for(let i = 0;i<6;i++){
  let valor = parseFloat(gets());
  if(!isNaN(valor)&& (valor >0)){
    lista.push(valor);
  }
}
console.log(lista.length + " valores positivos");

//desafio dos numeros pares
let lista = parseInt(gets());
for(let i = 1;i<=lista;i++){
  if((i%2)==0){
    console.log(i);
  }
}

//desafio analise de valores 
let v = [0,0,0,0];
for(let i = 0;i<5;i++){
  let valor = parseInt(gets());
  if (valor > 0){ v[0]++}
  else if (valor < 0){ v[1]++};
  ((valor %2 )==0) ? v[2]++ : v[3]++;
}
console.log(v[2] + " valor(es) par(es)");
console.log(v[3] + " valor(es) impar(es)");
console.log(v[0] + " valor(es) positivo(s)");
console.log(v[1] + " valor(es) negativo(s)");

//desafio contagem de cedulas
let cedulas = [100, 50, 20, 10, 5, 2, 1];
let contagem = [0,0,0,0,0,0,0]
let valor = parseInt(gets());
let total = valor;
let pos = 0;

do{
  if (valor >= cedulas[pos]){
    valor -= cedulas[pos];
    contagem[pos]++;
  }else{
    pos++;
  }
}while(valor > cedulas[6])
console.log(total);
for (let i = 0; i<=6;i++){
  console.log(contagem[i] + " nota(s) de R$ " + cedulas[i] + ",00");
}

//consumo medio do automovel
let X = parseInt(gets());
let Y = parseFloat(gets()).toFixed(1);
let total = parseFloat(X / Y).toFixed(3);
console.log(total + " km/l");
