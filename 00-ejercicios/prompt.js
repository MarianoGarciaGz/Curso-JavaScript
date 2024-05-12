'use strict'

let edad = prompt("Por favor, introdice tu edad: ");
if(isNaN(edad)){
    alert("Por favor, introduce una edad valida");
    edad=prompt("Por favor, introduce tu edad:");
    alert("Gracias por proporcionar tu edad.");
}else{
    alert("Gracias por proporcionar tu edad")
}