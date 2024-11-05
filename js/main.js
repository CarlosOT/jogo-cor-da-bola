/* 
[1] DESCOMENTAR O IFRAME NO INDEX.HTML
[2] DESCOMENTAR ÁUDIO SUSTO
[3] VOLTAR SEGUNDOS PARA 60
*/

import * as mds from "../modules/md.js"

let ativarIntervalo = function() {
    mds.insertHtml('temporizador', `${segundos} segundos`);
    let intervalo = setInterval(function() {

    let novoValor = mds.htmlValueToInt('temporizador') - 1;
    mds.insertHtml('temporizador', `${novoValor} segundos`);

    if (novoValor === 0) {
        clearTimeout(intervalo);
        mds.hideElement('temporizador');
        mds.hideElement('botao1');
        mds.hideElement('botao2');
        mds.hideElement('perdeGanha');
        mds.hideElement('titulo');
        mds.hideElement('bloco');
        mds.hideElement('pontos');
        mds.hideElement('idFooter');
        backgroundBody.style.backgroundImage = "url(imagem/monstro.jpg)";
        backgroundBody.style.backgroundRepeat = "no-repeat";
        backgroundBody.style.backgroundPosition = "center";
        backgroundBody.style.backgroundSize = "cover";
        backgroundBody.style.backgroundAttachment = "fixed";
        //audioSusto.autoplay = true;
        //audioSusto.load();

        function telaFinal(){
            mds.showElement('titulo');
            mds.showElement('bloco');
            mds.showElement('pontos');
            mds.showElement('idFooter');
            mds.showElement('botao3');
            linkCompartilha.href = `https://api.whatsapp.com/send?&text=t%C3%A1%20todo%20mundo%20jogando,%20eu%20consegui%20fazer%20${pontos}%20pontos%20%F0%9F%98%86%0A%0Aquero%20ver%20voc%C3%AA%20agora%20%F0%9F%91%87%F0%9F%8F%BC%0A%0Ahttps://carlosot.github.io/jogo-cor-da-bola`;
            backgroundBody.style.backgroundImage = "";
            if(pontos >= 60){
                mds.showElement('msgFinal2');
                msgFinal2.style.backgroundColor = `${hexaCor[random1]}`;
                msgFinal2.style.color = `${fontColor[random1]}`;
            }else{
                mds.showElement('msgFinal1');
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
let fontColor = ["#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]; 
let contrastes = ["#7d00ff", "#008104", "#ffd400", "#ff0070", "#53a600", "#00acff"]; 
let random1 = Math.floor(Math.random() * 6); 
let random2 = Math.floor(Math.random() * 6); 
let random3 = 0;
let pontos = 0;
let segundos = 1;
let temporizadorLigado = false;
let temporizadorDesligado = false;

mds.hideElement('temporizador');
mds.hideElement('botao3');
backgroundBody.style.backgroundColor = `${contrastes[random1]}`;

mds.hideElement('msgFinal1');
mds.hideElement('msgFinal2');

mds.changeBgImg('bloco', `radial-gradient(circle, ${hexaCor[random1]},#000000)`);
mds.insertText('bloco', `${nomeCor[random2]}`);
mds.changeFontColor('bloco', `${fontColor[random1]}`);

mds.hideElement('pontos');
mds.insertHtml('pontos', `${pontos} pontos`);

botao1.style.backgroundColor = `${hexaCor[random1]}`;
botao1.style.color = `${fontColor[random1]}`;

botao2.style.backgroundColor = `${hexaCor[random1]}`;
botao2.style.color = `${fontColor[random1]}`;


function certo(){ 
    if(temporizadorLigado == false && temporizadorDesligado == false){
        mds.changeWidth('bloco', '250px');
        mds.changeHeight('bloco', '250px');
        mds.changeLnHeight('bloco', '250px');
        mds.changeBorderRd('bloco', '200px');

        idPerdeGanha.style.border = "1px solid";
        idPerdeGanha.style.width = "200px";
        idPerdeGanha.style.margin = "auto";
        idPerdeGanha.style.marginTop = "-25px";
        idPerdeGanha.style.marginBottom = "20px";
        idPerdeGanha.style.fontSize = "20px";

        mds.hideElement('headline');

        mds.changeBgColor('temporizador', '#ff0000');
        mds.changeFontColor('temporizador', '#ffffff');
        mds.showElement('temporizador');

        mds.showElement('pontos');
        ativarIntervalo();
    }
    if(random1 == random2){
        pontos += 1;
        mds.insertHtml('pontos', `${pontos} pontos`);
        idPerdeGanha.style.color = 'white';
        idPerdeGanha.style.backgroundColor = "green";
        idPerdeGanha.innerHTML = 'acertou +1 ponto';
    }else{
        pontos -= 1;
        mds.insertHtml('pontos', `${pontos} pontos`);
        idPerdeGanha.style.backgroundColor = "red";
        idPerdeGanha.style.color = 'white';
        idPerdeGanha.innerHTML = 'errou -1 ponto';
    }

    random3 = Math.floor(Math.random() * 2); //retorno 0 ou 1
    if(random3 == 0){
        random1 = Math.floor(Math.random() * 6);
        random2 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        mds.changeBgImg('bloco', `radial-gradient(circle, ${hexaCor[random1]},#000000)`);
        mds.changeFontColor('bloco', `${fontColor[random1]}`);
        mds.insertText('bloco', `${nomeCor[random2]}`);
        botao1.style.backgroundColor = `${hexaCor[random1]}`;
        botao2.style.backgroundColor = `${hexaCor[random1]}`;
        botao1.style.color = `${fontColor[random1]}`;
        botao2.style.color = `${fontColor[random1]}`;

    }else if(random3 == 1){
        random1 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        mds.changeBgImg('bloco', `radial-gradient(circle, ${hexaCor[random1]},#000000)`);
        mds.changeFontColor('bloco', `${fontColor[random1]}`);
        mds.insertText('bloco', `${nomeCor[random1]}`);
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
        mds.changeWidth('bloco', '250px');
        mds.changeHeight('bloco', '250px');
        mds.changeLnHeight('bloco', '250px');
        mds.changeBorderRd('bloco', '200px');

        idPerdeGanha.style.border = "1px solid";
        idPerdeGanha.style.width = "200px";
        idPerdeGanha.style.margin = "auto";
        idPerdeGanha.style.marginTop = "-25px";
        idPerdeGanha.style.marginBottom = "20px";
        idPerdeGanha.style.fontSize = "20px";

        mds.hideElement('headline');

        mds.changeBgColor('temporizador', '#ff0000');
        mds.changeFontColor('temporizador', '#ffffff');
        mds.showElement('temporizador');

        mds.showElement('pontos');
        ativarIntervalo();
    }
    if(random1 != random2){
        pontos += 1;
        mds.insertHtml('pontos', `${pontos} pontos`);
        idPerdeGanha.style.color = 'white';
        idPerdeGanha.style.backgroundColor = "green";
        idPerdeGanha.innerHTML = 'acertou +1 ponto'
    }else{
        pontos -= 1;
        mds.insertHtml('pontos', `${pontos} pontos`);
        idPerdeGanha.style.backgroundColor = "red";
        idPerdeGanha.style.color = 'white';
        idPerdeGanha.innerHTML = 'errou -1 ponto';
    }

    random3 = Math.floor(Math.random() * 2); //retorno 0 ou 1
    if(random3 == 0){
        random1 = Math.floor(Math.random() * 6);
        random2 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        mds.changeBgImg('bloco', `radial-gradient(circle, ${hexaCor[random1]},#000000)`);
        mds.changeFontColor('bloco', `${fontColor[random1]}`);
        mds.insertText('bloco', `${nomeCor[random2]}`);
        botao1.style.backgroundColor = `${hexaCor[random1]}`;
        botao2.style.backgroundColor = `${hexaCor[random1]}`;
        botao1.style.color = `${fontColor[random1]}`;
        botao2.style.color = `${fontColor[random1]}`;

    }else if(random3 == 1){
        random1 = Math.floor(Math.random() * 6);
        backgroundBody.style.backgroundColor = `${contrastes[random1]}`;
        mds.changeBgImg('bloco', `radial-gradient(circle, ${hexaCor[random1]},#000000)`);
        mds.changeFontColor('bloco', `${fontColor[random1]}`);
        mds.insertText('bloco', `${nomeCor[random1]}`);
        botao1.style.backgroundColor = `${hexaCor[random1]}`;
        botao2.style.backgroundColor = `${hexaCor[random1]}`;
        botao1.style.color = `${fontColor[random1]}`;
        botao2.style.color = `${fontColor[random1]}`;
        random2 = random1;
    }

    temporizadorDesligado = true;
}

botao1.addEventListener('click', certo);
botao2.addEventListener('click', errado);