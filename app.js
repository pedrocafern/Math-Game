let numero = gerarNumero();
let tentativas = 1;

function exibirTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTela('h1', 'Math Game');
  exibirTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
  const chute = document.getElementById('chutar').value;
  
  if (chute == numero) {
    exibirTela('h1', 'Acertou !!');
    let = palavraTent = tentativas > 1 ? 'tentativas' : 'tentativa';
    let = mensagemTent = `Você descobriu o número com ${tentativas} ${palavraTent} !`;
    exibirTela('p', mensagemTent);
  } else {
    if (numero > chute) {
      exibirTela('p', 'número é maior');
    } else {
      exibirTela('p', 'número é menor');
    }
    tentativas++;
  }
}

function gerarNumero() {
  return Math.floor(Math.random() * 10 + 1);
}
