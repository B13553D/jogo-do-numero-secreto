 let listaDeNumerosSorteados = [];
 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1
 
 
 function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
 }

 function mensagemInicial(){
   exibirTextoNaTela('h1', 'Jogo do número secreto');
   exibirTextoNaTela('p', 'Escolha um número entre 1 e 20');
 }

 mensagemInicial();

 function verificarChute() {
    let chute = document.querySelector('input').value; 
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(chute == ''){
        alertaChuteVazio();
    } else if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Parabéns, você descobriu o número secreto com ' + tentativas + ' ' + palavraTentativa);
        tentativas++
        document.getElementById('reiniciar').removeAttribute('disabled');
     } else if(chute > numeroSecreto){
        exibirTextoNaTela('h1', 'Tente novamente!');
        exibirTextoNaTela('p', 'o número secreto é menor que ' + chute);
        tentativas++
        limparCampo();
     } else {
        exibirTextoNaTela('h1', 'Tente novamente!');
        exibirTextoNaTela('p', 'o número secreto é maior que ' + chute);
        tentativas++
        limparCampo();
     }
    
 }

 function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }

 function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
 }

 function alertaChuteVazio() {
    if(document.querySelector('input').value == ''){
        exibirTextoNaTela('h1', 'Vish...');
        exibirTextoNaTela('p', 'Você precisa chutar algum número!');
    }
 }
 
 function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 20 + 1);
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;
    }

 }


