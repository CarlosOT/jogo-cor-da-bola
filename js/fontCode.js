import * as mds from "../modules/md.js"
import * as v from "../modules/variables.js"

let nomeCor = ["BOLA AMARELA", "BOLA VERMELHA", "BOLA AZUL", "BOLA VERDE", "BOLA ROXA", "BOLA LARANJA"];
let hexaCor = ["#ffff00", "#ff0000", "#0800ff", "#00ff08", "#e100ff", "#ff8c00"];
let fontColor = ["#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]; 
let contrastes = ["#7d00ff", "#008104", "#ffd400", "#ff0070", "#53a600", "#00acff"]; 

export function initialSetup(){
    v.setPontos(0);
    v.setSegundos(5);
    v.setTemporizadorOff(true);
    v.setTemporizadorOn(false);
    mds.hideElement('temporizador');
    mds.hideElement('botao3');
    mds.setBgColor('background', `${contrastes.at(v.getRandom1())}`);
    mds.hideElement('msgFinal1');
    mds.hideElement('msgFinal2');
    mds.setBgImg('bloco', `radial-gradient(circle, ${hexaCor.at(v.getRandom1())},#000000)`);
    mds.insertText('bloco', `${nomeCor.at(v.getRandom2())}`);
    mds.setFontColor('bloco', `${fontColor.at(v.getRandom1())}`);
    mds.hideElement('pontos');
    mds.insertHtml('pontos', `${v.getPontos()} pontos`);
    mds.setBgColor('botao1', `${hexaCor.at(v.getRandom1())}`);
    mds.setBgColor('botao2', `${hexaCor.at(v.getRandom1())}`);
    mds.setFontColor('botao1', `${fontColor.at(v.getRandom1())}`);
    mds.setFontColor('botao2', `${fontColor.at(v.getRandom1())}`);
}