/*
[1] COLOCAR SUSTO COMO TRUE;
[2] VOLTAR SEGUNDOS PARA 60;
*/

import * as mds from "../modules/md.js"
import * as v from "../modules/variables.js"
import * as fontCode from "../js/fontCode.js"


let nomeCor = ["BOLA AMARELA", "BOLA VERMELHA", "BOLA AZUL", "BOLA VERDE", "BOLA ROXA", "BOLA LARANJA"];
let hexaCor = ["#ffff00", "#ff0000", "#0800ff", "#00ff08", "#e100ff", "#ff8c00"];
let fontColor = ["#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]; 
let contrastes = ["#7d00ff", "#008104", "#ffd400", "#ff0070", "#53a600", "#00acff"]; 

fontCode.initialSetup();

let ativarIntervalo = function() {
    mds.insertHtml('temporizador', `${v.getSegundos()} segundos`);
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
        mds.setBgImg('background', 'url(imagem/monstro.jpg)');
        mds.setBgRepeat('background', 'no-repeat');
        mds.setBgPosition('background', 'center');
        mds.setBgSize('background', 'cover');
        mds.setBgAttachment('background', 'fixed');
        mds.setAudio('audioSusto', false);

        function telaFinal(){
            mds.showElement('titulo');
            mds.showElement('bloco');
            mds.showElement('pontos');
            mds.showElement('idFooter');
            mds.showElement('botao3');
            mds.setHref('linkCompartilha', `https://api.whatsapp.com/send?&text=t%C3%A1%20todo%20mundo%20jogando,%20eu%20consegui%20fazer%20${v.getPontos()}%20pontos%20%F0%9F%98%86%0A%0Aquero%20ver%20voc%C3%AA%20agora%20%F0%9F%91%87%F0%9F%8F%BC%0A%0Ahttps://carlosot.github.io/jogo-cor-da-bola`);
            mds.setBgImg('background', '');
            if(v.getPontos() >= 60){
                mds.showElement('msgFinal2');
                mds.setBgColor('msgFinal2', `${hexaCor.at(v.getRandom1())}`);
                mds.setFontColor('msgFinal2', `${fontColor.at(v.getRandom1())}`);
            }else{
                mds.showElement('msgFinal1');
                mds.setBgColor('msgFinal1', `${hexaCor.at(v.getRandom1())}`);
                mds.setFontColor('msgFinal1', `${fontColor.at(v.getRandom1())}`);
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

function certo(){ 
    if(v.getTemporizadorOn() == false && v.getTemporizadorOff() == true){
        mds.setWidth('bloco', '250px');
        mds.setHeight('bloco', '250px');
        mds.setLnHeight('bloco', '250px');
        mds.setBorderRd('bloco', '200px');
        mds.setBorder('perdeGanha','1px solid');
        mds.setWidth('perdeGanha', '200px');
        mds.setMargin('perdeGanha', 'auto');
        mds.setMarginTop('perdeGanha', '-25px');
        mds.setMarginBottom('perdeGanha', '20px');
        mds.setFontSize('perdeGanha', '20px');
        mds.hideElement('headline');
        mds.setBgColor('temporizador', '#ff0000');
        mds.setFontColor('temporizador', '#ffffff');
        mds.showElement('temporizador');
        mds.showElement('pontos');
        ativarIntervalo();
    }
    if(v.getRandom1() == v.getRandom2()){
        v.setPontos(v.getPontos() + 1);
        mds.insertHtml('pontos', `${v.getPontos()} pontos`);
        mds.setFontColor('perdeGanha', 'white');
        mds.setBgColor('perdeGanha', 'green');
        mds.insertHtml('perdeGanha', 'acertou +1 ponto');
    }else{
        v.setPontos(v.getPontos() - 1);
        mds.insertHtml('pontos', `${v.getPontos()} pontos`);
        mds.setFontColor('perdeGanha', 'white');
        mds.setBgColor('perdeGanha', 'red');
        mds.insertHtml('perdeGanha', 'errou -1 ponto');
    }

    v.setRandom3(Math.floor(Math.random() * 2)); //retorno 0 ou 1
    if(v.getRandom3() == 0){
        v.setRandom1(Math.floor(Math.random() * 6));
        v.setRandom2(Math.floor(Math.random() * 6));
        mds.setBgColor('background', `${contrastes.at(v.getRandom1())}`);
        mds.setBgImg('bloco', `radial-gradient(circle, ${hexaCor.at(v.getRandom1())},#000000)`);
        mds.setFontColor('bloco', `${fontColor.at(v.getRandom1())}`);
        mds.insertText('bloco', `${nomeCor.at(v.getRandom2())}`);
        mds.setBgColor('botao1', `${hexaCor.at(v.getRandom1())}`);
        mds.setBgColor('botao2', `${hexaCor.at(v.getRandom1())}`);
        mds.setFontColor('botao1', `${fontColor.at(v.getRandom1())}`);
        mds.setFontColor('botao2', `${fontColor.at(v.getRandom1())}`);

    }else if(v.getRandom3() == 1){
        v.setRandom1(Math.floor(Math.random() * 6));
        mds.setBgColor('background', `${contrastes.at(v.getRandom1())}`);
        mds.setBgImg('bloco', `radial-gradient(circle, ${hexaCor.at(v.getRandom1())},#000000)`);
        mds.setFontColor('bloco', `${fontColor.at(v.getRandom1())}`);
        mds.insertText('bloco', `${nomeCor.at(v.getRandom1())}`);
        mds.setBgColor('botao1', `${hexaCor.at(v.getRandom1())}`);
        mds.setBgColor('botao2', `${hexaCor.at(v.getRandom1())}`);
        mds.setFontColor('botao1', `${fontColor.at(v.getRandom1())}`);
        mds.setFontColor('botao2', `${fontColor.at(v.getRandom1())}`);
        v.setRandom2(v.getRandom1());
    }
    v.setTemporizadorOff(false);
    v.setTemporizadorOn(true);
};

function errado(){
    if(v.getTemporizadorOn() == false && v.getTemporizadorOff() == true){
        mds.setWidth('bloco', '250px');
        mds.setHeight('bloco', '250px');
        mds.setLnHeight('bloco', '250px');
        mds.setBorderRd('bloco', '200px')
        mds.setBorder('perdeGanha','1px solid');
        mds.setWidth('perdeGanha', '200px');
        mds.setMargin('perdeGanha', 'auto');
        mds.setMarginTop('perdeGanha', '-25px');
        mds.setMarginBottom('perdeGanha', '20px');
        mds.setFontSize('perdeGanha', '20px');
        mds.hideElement('headline');
        mds.setBgColor('temporizador', '#ff0000');
        mds.setFontColor('temporizador', '#ffffff');
        mds.showElement('temporizador');
        mds.showElement('pontos');
        ativarIntervalo();
    }
    if(v.getRandom1() != v.getRandom2()){
        v.setPontos(v.getPontos() + 1);
        mds.insertHtml('pontos', `${v.getPontos()} pontos`);
        mds.setFontColor('perdeGanha', 'white');
        mds.setBgColor('perdeGanha', 'green');
        mds.insertHtml('perdeGanha', 'acertou +1 ponto');
    }else{
        v.setPontos(v.getPontos() - 1);
        mds.insertHtml('pontos', `${v.getPontos()} pontos`);
        mds.setFontColor('perdeGanha', 'white');
        mds.setBgColor('perdeGanha', 'red');
        mds.insertHtml('perdeGanha', 'errou -1 ponto');
    }

    v.setRandom3(Math.floor(Math.random() * 2)); //retorno 0 ou 1
    if(v.getRandom3() == 0){
        v.setRandom1(Math.floor(Math.random() * 6));
        v.setRandom2(Math.floor(Math.random() * 6));
        mds.setBgColor('background', `${contrastes.at(v.getRandom1())}`);
        mds.setBgImg('bloco', `radial-gradient(circle, ${hexaCor.at(v.getRandom1())},#000000)`);
        mds.setFontColor('bloco', `${fontColor.at(v.getRandom1())}`);
        mds.insertText('bloco', `${nomeCor.at(v.getRandom2())}`);
        mds.setBgColor('botao1', `${hexaCor.at(v.getRandom1())}`);
        mds.setBgColor('botao2', `${hexaCor.at(v.getRandom1())}`);
        mds.setFontColor('botao1', `${fontColor.at(v.getRandom1())}`);
        mds.setFontColor('botao2', `${fontColor.at(v.getRandom1())}`);

    }else if(v.getRandom3() == 1){
        v.setRandom1(Math.floor(Math.random() * 6));
        mds.setBgColor('background', `${contrastes.at(v.getRandom1())}`);
        mds.setBgImg('bloco', `radial-gradient(circle, ${hexaCor.at(v.getRandom1())},#000000)`);
        mds.setFontColor('bloco', `${fontColor.at(v.getRandom1())}`);
        mds.insertText('bloco', `${nomeCor.at(v.getRandom1())}`);
        mds.setBgColor('botao1', `${hexaCor.at(v.getRandom1())}`);
        mds.setBgColor('botao2', `${hexaCor.at(v.getRandom1())}`);
        mds.setFontColor('botao1', `${fontColor.at(v.getRandom1())}`);
        mds.setFontColor('botao2', `${fontColor.at(v.getRandom1())}`);
        v.setRandom2(v.getRandom1());
    }
    v.setTemporizadorOff(false);
    v.setTemporizadorOn(true);
};

document.getElementById('botao1').addEventListener('click', certo);
document.getElementById('botao2').addEventListener('click', errado);