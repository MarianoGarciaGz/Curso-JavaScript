'use strict'

/* 
Escribe un programa que tome la calificación numerica de un estudiante como entrada y muestre un mensaje indicando su calificación en el siguiente formato:

A: 90 o más
B: 80 - 89
C: 70 - 79
D: 60 - 69
F: menos de 60

*/

const calificacion = 85

if (calificacion >= 90) {
  console.log('A')
} else if (calificacion >= 80) {
  console.log('B')
} else if (calificacion >= 70) {
  console.log('C')
} else if (calificacion >= 60) {
  console.log('D')
} else {
  console.log('F')
}
