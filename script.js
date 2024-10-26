//TEMPORIZADOR
var temporizador = document.getElementById('temporizador');
var segundos = 30;

var ativarIntervalo = function() { //função 01
  temporizador.innerHTML = `${segundos} segundos`;

  var intervalo = setInterval(function() { //função 02 (set interval com tempo de espera de 1 segundo)

    var novoValor = parseInt(temporizador.innerHTML) - 1;
    temporizador.innerHTML = `${novoValor} segundos`;

    if (novoValor === 0) {
      clearInterval(intervalo);
      //setTimeout(ativarIntervalo, 3000); COMANDO PARA RESETAR TIMER APÓS 3 SEGUNDOS (LOOP)
    }

  }, 1000);

};

//DEFINIÇÕES INICIAIS PARA EXECUÇÃO DO PROGRAMA
let bloco = document.getElementById('bloco');
let idPonto = document.getElementById('pontos');
let idPerdeGanha = document.getElementById('perdeGanha');

let nomeCor = ["BOLA AMARELA", "BOLA VERMELHA", "BOLA AZUL", "BOLA VERDE", "BOLA ROSA", "BOLA LARANJA"];
let hexaCor = ["#ffff00", "#ff0000", "#0800ff", "#00ff08", "#e100ff", "#ff8c00"];
let nomeAleatorio = Math.floor(Math.random() * 6); 
let hexaAleatorio = Math.floor(Math.random() * 6); 
let pontos = 0;
let temporizadorLigado = false;
let temporizadorDesligado = false;

bloco.style.backgroundColor = `${hexaCor[hexaAleatorio]}`;
bloco.innerText = `${nomeCor[nomeAleatorio]}`;
idPonto.innerHTML = `${pontos} pontos`;

function certo(){ 
    if(temporizadorLigado == false && temporizadorDesligado == false){
        ativarIntervalo();
    }
    if(nomeAleatorio == hexaAleatorio){
        pontos += 1;
        idPonto.innerHTML = `${pontos} pontos`;
        idPerdeGanha.style.color = 'green';
        idPerdeGanha.innerHTML = 'acertou +1 ponto';
    }else{
        pontos -= 1;
        idPonto.innerHTML = `${pontos} pontos`;
        idPerdeGanha.style.color = 'red';
        idPerdeGanha.innerHTML = 'errou -1 ponto';
    }

    nomeAleatorio = Math.floor(Math.random() * 6);
    hexaAleatorio = Math.floor(Math.random() * 6);
    bloco.style.backgroundColor = `${hexaCor[hexaAleatorio]}`;
    bloco.innerText = `${nomeCor[nomeAleatorio]}`;
    temporizadorDesligado = true;
}

function errado(){
    if(temporizadorLigado == false && temporizadorDesligado == false){
        ativarIntervalo();
    }
    if(nomeAleatorio != hexaAleatorio){
        pontos += 1;
        idPonto.innerHTML = `${pontos} pontos`;
        idPerdeGanha.style.color = 'green';
        idPerdeGanha.innerHTML = 'acertou +1 ponto'
    }else{
        pontos -= 1;
        idPonto.innerHTML = `${pontos} pontos`;
        idPerdeGanha.style.color = 'red';
        idPerdeGanha.innerHTML = 'errou -1 ponto';
    }

    nomeAleatorio = Math.floor(Math.random() * 6);
    hexaAleatorio = Math.floor(Math.random() * 6);
    bloco.style.backgroundColor = `${hexaCor[hexaAleatorio]}`;
    bloco.innerText = `${nomeCor[nomeAleatorio]}`;
    temporizadorDesligado = true;
}