// Jogo do adivinho
// Anotações..
// > = Maior
// < = Menor

const Numero = Math.floor(Math.random() * 10) + 1;
let tent = 1;

function exibirNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemNaTela() {
  exibirNaTela('h1', 'Math Game')
  exibirNaTela('p', 'Escolha um número de 1 a 10:')
}

mensagemNaTela();

function jogar() {
  const entrada = document.getElementById('num');
  const msg = document.getElementById('msg');
  const bismo = +entrada.value;

  

  if (bismo < 1 || bismo > 10) return msg.textContent = 'Não entendeu como joga?';

  msg.textContent = bismo == Numero
    ? `O número era ${Numero} e você acertou com ${tent > 1 ? tent + ' tentativas' : 'uma tentativa'} !!`
    : `O número é ${Numero > bismo ? 'maior' : 'menor'} que ${bismo}.`;

  bismo != Numero ? tent++ : entrada.disabled = true;

  entrada.value = '';
  entrada.focus();
}
