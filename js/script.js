//TEMPORIZADOR
var temporizador = document.getElementById('temporizador');
temporizador.style.display = "none";
var segundos = 60;

var ativarIntervalo = function() { //função 01
    temporizador.innerHTML = `${segundos} segundos`;
    
    var intervalo = setInterval(function() { //função 02 (set interval com tempo de espera de 1 segundo)
    var novoValor = parseInt(temporizador.innerHTML) - 1;
    temporizador.innerHTML = `${novoValor} segundos`;

    if (novoValor === 0) {
        clearTimeout(intervalo);
        temporizador.style.display = "none";
        botao1.style.display = "none";
        botao2.style.display = "none";
        idPerdeGanha.style.display = "none";
        titulo.style.display = "none";
        bloco.style.display = "none";
        idPonto.style.display = "none";
        idFooter.style.display = "none";
        backgroundBody.style.backgroundImage = "url(imagem/monstro.jpg)";
        backgroundBody.style.backgroundRepeat = "no-repeat";
        backgroundBody.style.backgroundPosition = "center";
        backgroundBody.style.backgroundSize = "cover";
        backgroundBody.style.backgroundAttachment = "fixed";
        audioSusto.autoplay = true;
        audioSusto.load();
        //após o susto
        function telaFinal(){
            titulo.style.display = "block";
            bloco.style.display = "block";
            idPonto.style.display = "block";
            idFooter.style.display = "block";
            botaoCompartilha.style.display = "block";
            linkCompartilha.href = `https://api.whatsapp.com/send?&text=t%C3%A1%20todo%20mundo%20jogando,%20eu%20consegui%20fazer%20${pontos}%20pontos%20%F0%9F%98%86%0A%0Aquero%20ver%20voc%C3%AA%20agora%20%F0%9F%91%87%F0%9F%8F%BC%0A%0Ahttps://carlosot.github.io/jogo-cor-da-bola`;
            backgroundBody.style.backgroundImage = "";
            if(pontos >= 60){
                msgFinal2.style.display = "block";
                msgFinal2.style.backgroundColor = `${hexaCor[random1]}`;
                msgFinal2.style.color = `${fontColor[random1]}`;
            }else{
                msgFinal1.style.display = "block";
                msgFinal1.style.backgroundColor = `${hexaCor[random1]}`;
                msgFinal1.style.color = `${fontColor[random1]}`;
            }
        }
        let timeout;
        function fimJogo(){
            timeout = setTimeout(telaFinal, 2500);
        }
        fimJogo();
    }
  }, 1000);
};

//DEFINIÇÕES INICIAIS PARA EXECUÇÃO DO PROGRAMA
let bloco = document.getElementById('bloco');
let idPonto = document.getElementById('pontos');
let idPerdeGanha = document.getElementById('perdeGanha');
let backgroundBody = document.getElementById('background');
let headline = document.getElementById('headline');
let botao1 = document.getElementById('botao1');
let botao2 = document.getElementById('botao2');
let audioSusto = document.getElementById('audioSusto');
let titulo = window.document.getElementById('titulo');
let idFooter = document.getElementById('idFooter');
let botaoCompartilha = document.getElementById('botao3');
let linkCompartilha = document.getElementById('linkCompartilha');
let msgFinal1 = document.getElementById('msgFinal1');
let msgFinal2 = document.getElementById('msgFinal2');


let nomeCor = ["BOLA AMARELA", "BOLA VERMELHA", "BOLA AZUL", "BOLA VERDE", "BOLA ROXA", "BOLA LARANJA"];
let hexaCor = ["#ffff00", "#ff0000", "#0800ff", "#00ff08", "#e100ff", "#ff8c00"];
//para a fonte contrastar com o fundo da bola
let fontColor = ["#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]; 
//para constrastar a cor do body com a com da bola
let contrastes = ["#7d00ff", "#008104", "#ffd400", "#ff0070", "#53a600", "#00acff"]; 

let random1 = Math.floor(Math.random() * 6); 
let random2 = Math.floor(Math.random() * 6); 
let random3 = 0;
let pontos = 0;
let temporizadorLigado = false;
let temporizadorDesligado = false;

idPonto.style.display = "none";
botaoCompartilha.style.display = "none";
msgFinal1.style.display = "none";
msgFinal2.style.display = "none";
backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
//bloco.style.backgroundColor = `${hexaCor[random1]}`;
bloco.style.backgroundImage = `radial-gradient(circle, ${hexaCor[random1]},#000000)`;
bloco.innerText = `${nomeCor[random2]}`;
bloco.style.color = `${fontColor[random1]}`;
idPonto.innerHTML = `${pontos} pontos`;
botao1.style.backgroundColor = `${hexaCor[random1]}`;
botao2.style.backgroundColor = `${hexaCor[random1]}`;
botao1.style.color = `${fontColor[random1]}`;
botao2.style.color = `${fontColor[random1]}`;


function certo(){ 
    if(temporizadorLigado == false && temporizadorDesligado == false){
        bloco.style.width = "250px";
        bloco.style.height = "250px";
        bloco.style.lineHeight = "250px";
        bloco.style.borderRadius = "200px";

        idPerdeGanha.style.border = "1px solid";
        idPerdeGanha.style.width = "200px";
        idPerdeGanha.style.margin = "auto";
        idPerdeGanha.style.marginTop = "-25px";
        idPerdeGanha.style.marginBottom = "20px";
        idPerdeGanha.style.fontSize = "20px";

        headline.style.display = "none";

        temporizador.style.backgroundColor = "#ff0000";
        temporizador.style.color = "#ffffff";
        temporizador.style.display = "";

        idPonto.style.display = "";
        ativarIntervalo();
    }
    if(random1 == random2){
        pontos += 1;
        idPonto.innerHTML = `${pontos} pontos`;
        idPerdeGanha.style.color = 'white';
        idPerdeGanha.style.backgroundColor = "green";
        idPerdeGanha.innerHTML = 'acertou +1 ponto';
    }else{
        pontos -= 1;
        idPonto.innerHTML = `${pontos} pontos`;
        idPerdeGanha.style.backgroundColor = "red";
        idPerdeGanha.style.color = 'white';
        idPerdeGanha.innerHTML = 'errou -1 ponto';
    }

    random3 = Math.floor(Math.random() * 2); //retorno 0 ou 1
    if(random3 == 0){
        random1 = Math.floor(Math.random() * 6);
        random2 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        //bloco.style.backgroundColor = `${hexaCor[random1]}`;
        bloco.style.backgroundImage = `radial-gradient(circle, ${hexaCor[random1]},#000000)`;
        bloco.style.color = `${fontColor[random1]}`;
        bloco.innerText = `${nomeCor[random2]}`;
        botao1.style.backgroundColor = `${hexaCor[random1]}`;
        botao2.style.backgroundColor = `${hexaCor[random1]}`;
        botao1.style.color = `${fontColor[random1]}`;
        botao2.style.color = `${fontColor[random1]}`;

    }else if(random3 == 1){
        random1 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        //bloco.style.backgroundColor = `${hexaCor[random1]}`;
        bloco.style.backgroundImage = `radial-gradient(circle, ${hexaCor[random1]},#000000)`;
        bloco.style.color = `${fontColor[random1]}`;
        bloco.innerText = `${nomeCor[random1]}`;
        botao1.style.backgroundColor = `${hexaCor[random1]}`;
        botao2.style.backgroundColor = `${hexaCor[random1]}`;
        botao1.style.color = `${fontColor[random1]}`;
        botao2.style.color = `${fontColor[random1]}`;
        random2 = random1;
    }

    temporizadorDesligado = true;
}

function errado(){
    if(temporizadorLigado == false && temporizadorDesligado == false){
        bloco.style.width = "250px";
        bloco.style.height = "250px";
        bloco.style.lineHeight = "250px";
        bloco.style.borderRadius = "200px";

        idPerdeGanha.style.border = "1px solid";
        idPerdeGanha.style.width = "200px";
        idPerdeGanha.style.margin = "auto";
        idPerdeGanha.style.marginTop = "-25px";
        idPerdeGanha.style.marginBottom = "20px";
        idPerdeGanha.style.fontSize = "20px";

        headline.style.display = "none";

        temporizador.style.backgroundColor = "#ff0000";
        temporizador.style.color = "#ffffff";
        temporizador.style.display = "";

        idPonto.style.display = "";
        ativarIntervalo();
    }
    if(random1 != random2){
        pontos += 1;
        idPonto.innerHTML = `${pontos} pontos`;
        idPerdeGanha.style.color = 'white';
        idPerdeGanha.style.backgroundColor = "green";
        idPerdeGanha.innerHTML = 'acertou +1 ponto'
    }else{
        pontos -= 1;
        idPonto.innerHTML = `${pontos} pontos`;
        idPerdeGanha.style.backgroundColor = "red";
        idPerdeGanha.style.color = 'white';
        idPerdeGanha.innerHTML = 'errou -1 ponto';
    }

    random3 = Math.floor(Math.random() * 2); //retorno 0 ou 1
    if(random3 == 0){
        random1 = Math.floor(Math.random() * 6);
        random2 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        //bloco.style.backgroundColor = `${hexaCor[random1]}`;
        bloco.style.backgroundImage = `radial-gradient(circle, ${hexaCor[random1]},#000000)`;
        bloco.style.color = `${fontColor[random1]}`;
        bloco.innerText = `${nomeCor[random2]}`;
        botao1.style.backgroundColor = `${hexaCor[random1]}`;
        botao2.style.backgroundColor = `${hexaCor[random1]}`;
        botao1.style.color = `${fontColor[random1]}`;
        botao2.style.color = `${fontColor[random1]}`;

    }else if(random3 == 1){
        random1 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        //bloco.style.backgroundColor = `${hexaCor[random1]}`;
        bloco.style.backgroundImage = `radial-gradient(circle, ${hexaCor[random1]},#000000)`;
        bloco.style.color = `${fontColor[random1]}`;
        bloco.innerText = `${nomeCor[random1]}`;
        botao1.style.backgroundColor = `${hexaCor[random1]}`;
        botao2.style.backgroundColor = `${hexaCor[random1]}`;
        botao1.style.color = `${fontColor[random1]}`;
        botao2.style.color = `${fontColor[random1]}`;
        random2 = random1;
    }

    temporizadorDesligado = true;
}