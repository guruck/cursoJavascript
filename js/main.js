/*
//Strings e Numeros
var nome = 'Tiago Rodrigues';
var idade = 36;
var idade2 = 10;
var frase = 'Brasil é o pior time do mundo...';
var frase2 = 'www.teste.com.br';
//alert('Bem vindo ' + nome + ' tem ' + idade + ' anos.');
//alert('' + idade + idade2);

console.log('Bem vindo ' + nome + ' tem ' + idade + ' anos.');
console.log('' + idade + idade2);
console.log(idade + idade2);
console.log(frase.replace('Brasil', 'Japão'));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(frase.length);
console.log(frase.substring(10, 18));
console.log(frase.substring(0, frase.indexOf('time')));
console.log(frase.indexOf('time'));
console.log(frase2.lastIndexOf('.'));
console.log(frase2.indexOf('.', 4));

*/
//
//Arrays
var frutas = ['maça', 'pera', 'banana', 'laranja', 'cacau'];
var frutasJson = [
  { nome: 'maça', cor: 'vermelho' },
  { nome: 'pera', cor: 'verdinha' },
  { nome: 'banana', cor: 'amarela' },
  { nome: 'laranja', cor: 'laranja' },
  { nome: 'cacau', cor: 'marrom' },
];
console.log(frutas[1]);
frutas.pop();
frutas.push('uva');
frutas.sort();
console.log(frutas);
//frutas.reverse();
console.log(frutas.reverse().toString());
console.log(frutas.length);
console.log(frutas.join(' | '));
console.log(frutasJson);
//*/

//Laços e Condicionais

//var idade = prompt('digite sua idade...');
var idade = 15;
idade >= 18 ? console.log('maior') : console.log('menor');
//ternario <condição> ? <verdade> : <falso>
if (idade >= 18) {
  //44334alert('maior');
  console.log(idade + ': é maior');
} else {
  console.log('menor');
}

var count = 0;
while (count < 5) {
  console.log(++count);
}

do {
  console.log(--count);
} while (count > 0);

for (var i = 0; i < frutasJson.length; i++) {
  console.log(frutasJson[i].cor);
}

var d = new Date();
console.log('hoje ' + d.getDate() + '/' + (d.getMonth() + 1));
console.log('1' + 1);
