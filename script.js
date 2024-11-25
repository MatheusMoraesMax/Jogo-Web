
let pontosJogador1 = 0;
let pontosJogador2 = 0;
let tempo = 15;
let intervalo;

//1. iniciarJogo(): Inicia o jogo.
//2. setInterval(contarTempo, 1000): Define um intervalo de tempo.
function iniciarJogo() {
    intervalo = setInterval(contarTempo, 1000);
}

 //1. tempo--: decrementa o tempo restante em 1.
//2. document.getElementById('tempo').textContent = tempo: atualiza o texto do elemento "tempo" com o novo valor.
//3. if (tempo === 0): verifica se o tempo restante é 0.
//- clearInterval(intervalo): para o intervalo de tempo.
//- finalizarJogo(): chama a função para finalizar o jogo.
function contarTempo() {
    tempo--;
    document.getElementById('tempo').textContent = tempo;
    if (tempo === 0) {
        clearInterval(intervalo);
        finalizarJogo();
    }
}

//1. Incrementa pontos: pontosJogador1++ - Aumenta em 1 o valor da variável pontosJogador1, representando um ponto para o Jogador 1.
//2. Seleciona elemento: document.getElementById('pontos-jogador-1') - Encontra o elemento HTML com o ID "pontos-jogador-1".
//3. Atualiza texto: .textContent = Pontos: ${pontosJogador1} - Atualiza o texto do elemento com o novo valor de pontos.
function clicarJogador1() {
    pontosJogador1++;
    document.getElementById('pontos-jogador-1').textContent = `Pontos: ${pontosJogador1}`;
}

function clicarJogador2() {
    pontosJogador2++;
    document.getElementById('pontos-jogador-2').textContent = `Pontos: ${pontosJogador2}`;
}

//1. document.getElementById('botao-iniciar'): Seleciona o elemento HTML com o ID "botao-iniciar".
//2. .addEventListener('click', iniciarJogo): Adiciona um evento de clique ao elemento.
//3. iniciarJogo: Função a ser executada quando o botão for clicado.
document.getElementById('botao-iniciar').addEventListener('click', iniciarJogo);

document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
        clicarJogador1();
        
    }
    else if (e.key === 'A') {
        clicarJogador1();
        
    }
     else if (e.key === 'l') {
        clicarJogador2();
    }
    else if (e.key === 'L') {
        clicarJogador2();
    }
});

function finalizarJogo() {
    alert(`Jogo finalizado! Jogador 1: ${pontosJogador1} pontos, Jogador 2: ${pontosJogador2} pontos`);
    if (pontosJogador1 > pontosJogador2) {
        alert('Jogador 1 venceu!');
    } else if (pontosJogador2 > pontosJogador1) {
        alert('Jogador 2 venceu!');
    } else {
        alert('Empate!');
    }
}


//getElementById() é uma função do DOM (Document Object Model) que serve para selecionar
 //e retornar um elemento HTML específico dentro de um documento, com base em seu atributo


 //let é uma palavra-chave utilizada para declarar variáveis.

 //O objeto document em JavaScript é uma representação do documento HTML atualmente carregado no navegador. 
 //Ele fornece acesso a todos os elementos, propriedades e métodos necessários para interagir com o documento.



