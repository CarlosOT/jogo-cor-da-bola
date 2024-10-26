//TEMPORIZADOR
var temporizador = document.getElementById('temporizador');
temporizador.style.display = "none";
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
let backgroundBody = document.getElementById('background');
let headline = document.getElementById('headline');

let nomeCor = ["BOLA AMARELA", "BOLA VERMELHA", "BOLA AZUL", "BOLA VERDE", "BOLA ROSA", "BOLA LARANJA"];
let hexaCor = ["#ffff00", "#ff0000", "#0800ff", "#00ff08", "#e100ff", "#ff8c00"];
//para a fonte contrastar com o fundo da bola
let fontColor = ["#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]; 
//para constrastar a cor do body com a com da bola
let contrastes = ["#7d00ff", "#00ff48", "#ffd400", "#ff0070", "#7fff00", "#00acff"]; 

let random1 = Math.floor(Math.random() * 6); 
let random2 = Math.floor(Math.random() * 6); 
let random3 = 0;
let pontos = 0;
let temporizadorLigado = false;
let temporizadorDesligado = false;

backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
bloco.style.backgroundColor = `${hexaCor[random1]}`;
bloco.innerText = `${nomeCor[random2]}`;
bloco.style.color = `${fontColor[random1]}`;
idPonto.innerHTML = `${pontos} pontos`;

function certo(){ 
    if(temporizadorLigado == false && temporizadorDesligado == false){
        headline.style.display = "none";
        temporizador.style.backgroundColor = "#ff0000";
        temporizador.style.color = "#ffffff";
        temporizador.style.display = "";
        ativarIntervalo();
    }
    if(random1 == random2){
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

    random3 = Math.floor(Math.random() * 2); //retorno 0 ou 1
    if(random3 == 0){
        random1 = Math.floor(Math.random() * 6);
        random2 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        bloco.style.backgroundColor = `${hexaCor[random1]}`;
        bloco.style.color = `${fontColor[random1]}`;
        bloco.innerText = `${nomeCor[random2]}`;
    }else if(random3 == 1){
        random1 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        bloco.style.backgroundColor = `${hexaCor[random1]}`;
        bloco.style.color = `${fontColor[random1]}`;
        bloco.innerText = `${nomeCor[random1]}`;
        random2 = random1;
    }

    temporizadorDesligado = true;
}

function errado(){
    if(temporizadorLigado == false && temporizadorDesligado == false){
        headline.style.display = "none";
        temporizador.style.backgroundColor = "#ff0000";
        temporizador.style.color = "#ffffff";
        temporizador.style.display = "";
        ativarIntervalo();
    }
    if(random1 != random2){
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

    random3 = Math.floor(Math.random() * 2); //retorno 0 ou 1
    if(random3 == 0){
        random1 = Math.floor(Math.random() * 6);
        random2 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        bloco.style.backgroundColor = `${hexaCor[random1]}`;
        bloco.style.color = `${fontColor[random1]}`;
        bloco.innerText = `${nomeCor[random2]}`;
    }else if(random3 == 1){
        random1 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        bloco.style.backgroundColor = `${hexaCor[random1]}`;
        bloco.style.color = `${fontColor[random1]}`;
        bloco.innerText = `${nomeCor[random1]}`;
        random2 = random1;
    }

    temporizadorDesligado = true;
}