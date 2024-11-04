export function hideElement(idElement){
    document.getElementById(idElement).style.display = "none";
}
export function showElement(idElement){
    document.getElementById(idElement).style.display = "block";
}
export function changeBgColor(idElement, hexaColor){
    document.getElementById(idElement).style.backgroundColor = hexaColor;
}
export function changeBgImg(idElement, parameterBgImg){
    document.getElementById(idElement).style.backgroundImage = parameterBgImg;
}
export function changeFontColor(idElement, hexaColor){
    document.getElementById(idElement).style.color = hexaColor;
}
export function insertHtml(idElement, content){
    document.getElementById(idElement).innerHTML = content;
}
export function insertText(idElement, content){
    document.getElementById(idElement).innerText = content;
}
export function htmlValueToInt(idElement){
    let v = parseInt(document.getElementById(idElement).innerHTML);
    return v;
}
export function changeWidth(idElement, sizeWidth){
    document.getElementById(idElement).style.width = sizeWidth;
}
export function changeHeight(idElement, sizeHeight){
    document.getElementById(idElement).style.height = sizeHeight;
}
export function changeLnHeight(idElement, sizeLnHeight){
    document.getElementById(idElement).style.lineHeight = sizeLnHeight;
}
export function changeBorderRd(idElement, sizeRadius){
    document.getElementById(idElement).style.borderRadius = sizeRadius;
}