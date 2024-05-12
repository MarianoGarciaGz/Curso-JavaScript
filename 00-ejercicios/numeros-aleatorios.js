'use strict'

/*
    Escribe un programa en el que la computadora "piense" en un número aleatorio entre 1 y 100, y luego 
    le pida al usuario que adivine ese número. Después de cada intento, la computadora debe indicar si el 
    número ingresado por el usuario es demasiado alto, demasiado bajo o correcto. El juego debe continuar 
    hasta que el usuario adivine correctamente el número.

*/

var numAleatorio = Math.floor(Math.random() * 100) + 1;
document.write(numAleatorio);
alert("Bienvenido. Juguemos.");
var numUsuario=prompt("Estoy pensando en un numero del 1 al 100. Introduce el numero que piensas que es: ");
while(numUsuario!=numAleatorio){
    if(numUsuario<numAleatorio){
        var numUsuario=prompt("El numero es mayor, Intenta otra vez");
    }else{
        var numUsuario=prompt("El numero es menor, Intenta otra vez");
    }
}
if(numUsuario==numAleatorio){
    alert("Bien! Lo lograste, el numero era: " + numAleatorio);
}