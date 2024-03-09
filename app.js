let numeroSecreto = gerarNumeroSecreto();
let tentativas = 0; // Iniciar em zero para contar corretamente as tentativas
let chute;

function mensagemInicial() {
    exibirResultado('h1', 'Jogo do numero secreto');
    exibirResultado('p', 'Escolha um número entre 1 a 10');
}

//  Resultado 
function Resultado() {
    let outputElement = document.getElementById('output');
    outputElement.innerHTML = "Fim do jogo. O número secreto era " + numeroSecreto + ". Você tentou " + tentativas + " vezes.";
}


// Função para exibir o resultado na interface do usuário
function exibirResultado(tag, texto) {
    let outputElement = document.querySelector(tag);
    outputElement.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function verificarChute() {
    chute = parseInt(document.querySelector('.container__input').value); // Obtendo o valor do campo de entrada.
    // Incrementar o número de tentativas a cada verificação
    tentativas++;
    // Verificar se o chute é igual ao número secreto
    if (chute === numeroSecreto) {
        exibirResultado('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensagemTententavias = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirResultado('p', mensagemTententavias);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        // Verificar se o chute é maior ou menor que o número secreto
        if (chute > numeroSecreto) {
            exibirResultado('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirResultado('p', `O número secreto é maior que ${chute}`);
        }
        limparCampo()

    }


}

function gerarNumeroSecreto() {
    return parseInt(Math.random() * 10 + 1); // Número secreto entre 1 e 10

}


function limparCampo() {
    chute = document.querySelector('input').value = ' ';
}

function novoJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    //exibirResultado('h1', 'Adivinhe o numero secreto');
    //exibirResultado('p', 'Escolha um número entre 1 a 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);

}