function iniciaJogo() {
    var nivelDoJogo = window.location.search.replace('?',''); //search pega tudo que vem depois do .html e utilizamos o replace para remover o ?
    var tempoSegundos = 0;

    switch(nivelDoJogo) {
        case '1':
            tempoSegundos = 120;
            break;
        case '2':
            tempoSegundos = 60;
            break;
        case '3':
            tempoSegundos = 10;
            break;
        default:
            alert('Opcao errada!');
            break;
    }

    document.getElementById('cronometro').innerHTML = tempoSegundos;

    var quantidadeBaloes = 20;

    document.getElementById('baloes-inteiros').innerHTML = quantidadeBaloes;
    document.getElementById('baloes-estourados').innerHTML = 0;

    criaBaloes(quantidadeBaloes);

    contagemTempo(tempoSegundos +1);
}

function criaBaloes(quantidadeBaloes) {

    for(var i = 1;i <= quantidadeBaloes; i++) {

        var balao = document.createElement("img");
        balao.src = "imagens/balao_azul_pequeno.png";
        balao.style.margin = '10px';
        balao.id = 'b'+i;
        balao.onclick = function() {
            estourar(this);
        }
        document.getElementById('cenario').appendChild(balao);
    }
}

var timerId = null;

function contagemTempo(tempoSegundos) {
    tempoSegundos -= 1;

    if (tempoSegundos == -1) {
        clearTimeout(timerId);
        gameOver();
        return false;
    }
    document.getElementById('cronometro').innerHTML = tempoSegundos;

    temerId = setTimeout("contagemTempo("+ tempoSegundos+")",1000);
}

function gameOver() {
    alert('Fim de jogo, voce nao conseguiu estourar todos os baloes no tempo estipulado.');
}


function estourar(imgBalao) {

    var idBalao = imgBalao.id;
    document.getElementById(idBalao).src = "./imagens/balao_azul_pequeno_estourado.png"
    pontuacao();
}


function pontuacao() {
    var baloesInteiros = document.getElementById('baloes-inteiros').innerHTML;
    var baloesEstourados = document.getElementById('baloes-estourados').innerHTML;

    baloesInteiros = parseInt(baloesInteiros);   
    baloesEstourados = parseInt(baloesEstourados);   

    baloesInteiros--;
    baloesEstourados++;

    document.getElementById('baloes-inteiros').innerHTML = baloesInteiros;
    document.getElementById('baloes-estourados').innerHTML = baloesEstourados;

    situacaoJogo(baloesInteiros);
}

function situacaoJogo(baloesInteiros) {

    if(baloesInteiros === 0) {
        alert('Parabens! Voce venceu!');
        pararJogo();
    }
}

function pararJogo() {
    clearTimeout(timerId);
}