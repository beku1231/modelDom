'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log("--------------------------------");

console.log(pierwszyDiv.childNodes); //pobiera wszystko łączenie z                                          enterami itd.

console.log(pierwszyDiv.children);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);

console.log("--------------------------------");
console.log("--------------------------------");

var childNodesDiva = pierwszyDiv.childNodes;

childNodesDiva.forEach(function (element){
    if(element.nodeType == 3) {
        console.log(element);
    }
});

console.log("--------------------------------");
console.log("--------------------------------");

var childrenDiva = pierwszyDiv.children;
console.log(childrenDiva.length);

for (var i=0 ; i<childrenDiva.length ; i++) {
    console.log(childrenDiva[i]);
}
