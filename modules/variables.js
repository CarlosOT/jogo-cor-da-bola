let random1 = Math.floor(Math.random() * 6); 
let random2 = Math.floor(Math.random() * 6); 
let random3 = 0;
let pontos = 0;
let segundos = 5;
let temporizadorOn = false;
let temporizadorOff = true;

/*------------------------------------------------------------------------------------*/

export function getRandom1(){return random1};
export function getRandom2(){return random2};
export function getRandom3(){return random3};
export function getPontos(){return pontos};
export function getSegundos(){return segundos};
export function getTemporizadorOn(){return temporizadorOn};
export function getTemporizadorOff(){return temporizadorOff};

export function setRandom1(value){
    random1 = value;
}
export function setRandom2(value){
    random2 = value;
}
export function setRandom3(value){
    random3 = value;
}
export function setPontos(value){
    pontos = value;
};
export function setSegundos(value){
    segundos = value;
};
export function setTemporizadorOn(value){
    temporizadorOn = value;
};
export function setTemporizadorOff(value){
    temporizadorOff = value;
};
