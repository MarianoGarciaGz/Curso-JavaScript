'use strict'

/*
-Pida dos numeros por pantalla
- si metemos uno mal que nos lo vuelva a pedir
- que muestre en el cuerpo de la pagina, en una alerta
y por consola el resultado de sumar, restar, multiplicar y dividir estas dos cifras
*/

let numero1 = parseFloat(prompt("Introduzca un numero: "));
if (isNaN(numero1)){
    alert("Introduzca un numero valido");
    numero1 = parseFloat(prompt("Introduzca un numero: "));
}

let numero2 = parseFloat(prompt("Introduzca un numero: "));
if (isNaN(numero2)){
    alert("Introduzca un numero valido");
    numero2 = parseFloat(prompt("Introduzca un numero: "));
}

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

alert("Suma: "+suma+" Resta: "+resta+" Multiplicacion: "+multiplicacion+" Division: "+division);

console.log("Suma: "+suma+" Resta: "+resta+" Multiplicacion: "+multiplicacion+" Division: "+division);

document.write("Suma: "+suma+" Resta: "+resta+" Multiplicacion: "+multiplicacion+" Division: "+division);

