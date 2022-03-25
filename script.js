let dragindex = 0;
let dropindex = 0;
let clone = "";

let startElement = "", endElement ="";

function drag(e) {
  
  startElement = e.currentTarget.id;
}

function drop(e, target) {

endElement= e.currentTarget.id;
//console.log(startElement, endElement);
const startElementId = document.getElementById(startElement);
const endElementId = document.getElementById(endElement);


    const prevParentNode = endElementId.parentNode;
    //console.log(endElementId.parentNode);
    startElementId.parentNode.insertBefore(endElementId, startElementId.nextSibling);
    //console.log(endElementId.parentNode);
    prevParentNode.insertBefore(startElementId, endElementId.nextSibling);

}

function allowDrop(e) {
  e.preventDefault();
}
