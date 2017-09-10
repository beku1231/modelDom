'use strict';

var mainHeader = document.getElementById('main-header'); //Nagłówek przypisany do zmiennej

mainHeader.innerHTML = "Treść nagłówka"; //Dodajemy treść do nagłówka

var link = document.getElementsByClassName('link')[0];//Przypisujemy pierwszy link do zmiennej

console.log(link);

link.href = "http://akademia108.pl"; // Nadpisujemy atrybut href w linki

link.className = "nowaKlasa";

link.target="_blank";

mainHeader.style.color = "#11aa22";
