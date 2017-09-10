'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

console.log("--------------------------------");

var linki = document.getElementsByClassName('superlink');
console.log(linki);

console.log("--------------------------------");

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

console.log("--------------------------------");

var divPoID = document.querySelector('#parSecond');
console.log(divPoID);

console.log("--------------------------------");

var pierwszyLinkPoSelektorze = document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);

console.log("--------------------------------");

var linkiPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);

console.log("--------------------------------");

linkiPoSelektorze.forEach(function(link, i) {
    console.log(link.outerHTML);
});
console.log("--------------------------------");console.log("--------------------------------");console.log("Wezly------NODES");

