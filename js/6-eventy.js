'use strict';


//var secondLink = document.getElementsByTagName('a')[1];//Tworzymy zmienna z drugim linkiem
//
//function alarm(e){
//    e.preventDefault(); //zapobiegamy domyślnej akcji
//    console.log('kliknięto kolejny link');
//    
//    console.log(e.type);
//}
//
//secondLink.onclick = alarm; //podpinamy funcję 'alarm' na drugim linku po kliknieciu
//
//var thirdLink = document.getElementsByTagName('a')[2];//Tworzymy zmienna z trzecim linkiem
//
//console.log(thirdLink);
//
//thirdLink.addEventListener('click', alarm); //wywołujemy funcję alarm() na trzecim linku po klinięciu za pomocą event listenera
//
//thirdLink.removeEventListener('click', alarm);

var mainHeader = document.getElementById('main-header'); //Przypisujemy nagłówek strony do zmiennej

function resize(e) {//przekazujemy zdarzenia jako parametr funkcji
    if (e.type == 'mouseover')//sprawdzenie typu zdarzenia 
    {
        mainHeader.style.fontSize = "70px"; //zmien wielkosc fonta po najechaniu
    }else {
        mainHeader.style.fontSize = "inherit"; //Przywróć domyślną wielkość po najechaniu
    }
}

mainHeader.onmouseover = resize; //Wywolanie funkcji resize po najechaniu myszką na nagłówek
mainHeader.onmouseout = resize; // Wywolanie funkcji po zjechaniu
