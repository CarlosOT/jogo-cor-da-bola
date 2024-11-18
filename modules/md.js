/**
 * getElementById(**idElement**).style.display = "none"
 * @param {string} idElement  
 */
export function hideElement(idElement){
    document.getElementById(idElement).style.display = "none";
}

/**
 * getElementById(**idElement**).style.display = "block"
 * @param {string} idElement 
 */
export function showElement(idElement){
    document.getElementById(idElement).style.display = "block";
}

//------------------------------------------------------------------------------INICIO BACKGROUND
/**
 * getElementById(**idElement**).style.backgroundColor = **value**
 * @param {string} value 
 * @param {string} idElement  
 */
export function setBgColor(idElement, value){
    document.getElementById(idElement).style.backgroundColor = value;
}

/**
 * getElementById(**idElement**).style.backgroundImage = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBgImg(idElement, value){
    document.getElementById(idElement).style.backgroundImage = value;
}

/**
 * getElementById(**idElement**).style.backgroundRepeat = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBgRepeat(idElement, value){
    document.getElementById(idElement).style.backgroundRepeat = value;
}

/**
 * getElementById(**idElement**).style.backgroundPosition = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBgPosition(idElement, value){
    document.getElementById(idElement).style.backgroundPosition = value;
}

/**
 * getElementById(**idElement**).style.backgroundSize = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBgSize(idElement, value){
    document.getElementById(idElement).style.backgroundSize = value;
}

/**
 * getElementById(**idElement**).style.backgroundAttachment = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBgAttachment(idElement, value){
    document.getElementById(idElement).style.backgroundAttachment = value;
}
//------------------------------------------------------------------------------FIM BACKGROUND

/**
 * getElementById(**idElement**).style.color = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setFontColor(idElement, value){
    document.getElementById(idElement).style.color = value;
}

/**
 * getElementById(**idElement**).innerHTML = **content**
 * @param {string} idElement 
 * @param {*} content 
 */
export function insertHtml(idElement, content){
    document.getElementById(idElement).innerHTML = content;
}

/**
 * getElementById(**idElement**).innerText = **content**
 * @param {string} idElement 
 * @param {*} content 
 */
export function insertText(idElement, content){
    document.getElementById(idElement).innerText = content;
}

/**
 * parseInt(document.getElementById(**idElement**).innerHTML
 * @param {string} idElement 
 * @returns
 */
export function htmlValueToInt(idElement){
    return parseInt(document.getElementById(idElement).innerHTML);
}

/**
 * getElementById(**idElement**).style.width = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setWidth(idElement, value){
    document.getElementById(idElement).style.width = value;
}

/**
 * getElementById(**idElement**).style.height = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setHeight(idElement, value){
    document.getElementById(idElement).style.height = value;
}

/**
 * getElementById(**idElement**).style.lineHeight = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setLnHeight(idElement, value){
    document.getElementById(idElement).style.lineHeight = value;
}

/**
 * getElementById(**idElement**).style.borderRadius = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBorderRd(idElement, value){
    document.getElementById(idElement).style.borderRadius = value;
}

/**
 * getElementById(**idElement**).style.border = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setBorder(idElement, value){
    document.getElementById(idElement).style.border = value;
}

/**
 * getElementById(**idElement**).style.margin = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setMargin(idElement, value){
    document.getElementById(idElement).style.margin = value;
}

/**
 * getElementById(**idElement**).style.marginTop = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setMarginTop(idElement, value){
    document.getElementById(idElement).style.marginTop = value;
}

/**
 * getElementById(**idElement**).style.marginBottom = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setMarginBottom(idElement, value){
    document.getElementById(idElement).style.marginBottom = value;
}

/**
 * getElementById(**idElement**).style.fontSize = **value**
 * @param {string} idElement 
 * @param {string} value 
 */
export function setFontSize(idElement, value){
    document.getElementById(idElement).style.fontSize = value;
}

/**
 * getElementById(**idElement**).href = **url**
 * @param {string} idElement 
 * @param {string} url 
 */
export function setHref(idElement, url){
    document.getElementById(idElement).href = url;
}

/**
 * @param {string} idElement 
 * @param {boolean} value 
 */
export function setAudio(idElement, value){
    document.getElementById(idElement).autoplay = value;
    document.getElementById(idElement).load();
}

