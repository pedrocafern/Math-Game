let numero = gerarNumeroSecreto();
let tentativas = 1;

function gerarNumeroSecreto(){
    return parseInt(Math.random() * 10 + 1);
}

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

function mensagemNaTela() {
    exibirNaTela('h1', 'Math Game');
    exibirNaTela('p', 'Escolha um número de 1 a 10:');
}

mensagemNaTela();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numero) {
      exibirNaTela('h1', 'Acertou!')
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
      if (chute > numero) {
        exibirNaTela('p', 'O numero é menor');
      } else {
        exibirNaTela('p', 'O numero é maior');
      }
      tentativas++;
      limparCampo();
    }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numero = gerarNumeroSecreto();
  limparCampo();
  tentativas = 1;
  mensagemNaTela();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}
