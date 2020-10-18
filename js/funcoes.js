window.addEventListener('load', start);
var hidden = true;

function start() {
  console.info('pagina totalmente carregada');
}

//função retorna a soma dos elementos
function soma(n1, n2) {
  //parseFloat
  if (isNaN(n1) || isNaN(n2)) {
    return NaN;
  }
  return n1 + n2;
}

function botao() {
  if (hidden) {
    document.getElementById('mensagem').style.display = 'block';
    hidden = false;
  } else {
    document.getElementById('mensagem').style.display = 'none';
    hidden = true;
  }

  console.log('clicou o botao');
}
