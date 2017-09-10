'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3];
//przypisz do zmiennej istniejacy wezel

console.log(document.getElementById('parFirst').children);
//
console.log(istniejacyWezel);

var newElement = document.createElement('p');//stworz nowy element p

console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworz nowy tekst dla elementu p

console.log(newElementContent);

newElement.appendChild(newElementContent);//dodaj tekst do elementup

console.log(newElement);

istniejacyWezel.appendChild(newElement);

// usuwanie wezla

istniejacyWezel.removeChild(newElement);
console.log(istniejacyWezel);

//zastapienie

var parFirstDiv = document.getElementById('parFirst');
console.log(parFirstDiv);
parFirstDiv.replaceChild(newElement, istniejacyWezel);

//modyfikacja wszystkich linkow

var allLinks = document.querySelectorAll('a');
console.log(allLinks);
    
    for(var i = 0 ; i<allLinks.length; i++){
        console.log(allLinks[i]);
        var br = document.createElement('br'); //stworz element <br>
        allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);//dodaj br po kazdym linku
        allLinks[i].removeAttribute('class');//usuwanie klasy
    }

console.log("---------------Manipulacja-----------------")





