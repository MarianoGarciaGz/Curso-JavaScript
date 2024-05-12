function sumar(num1, num2) {
  return num1 + num2
}

function restar(num1, num2) {
  return num1 - num2
}

function multiplicar(num1, num2) {
  return num1 * num2
}

function dividir(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2
  } else {
    return 'No se puede dividir entre cero'
  }
}

function areaRectangulo(base, altura) {
  return base * altura
}

function areaCirculo(radio) {
  return Math.PI * radio ** 2
}

console.log('Suma:', sumar(5, 3))
console.log('Resta:', restar(10, 4))
console.log('Multiplicación:', multiplicar(6, 4))
console.log('División:', dividir(20, 5))
console.log('Área de un rectángulo:', areaRectangulo(4, 6))
console.log('Área de un círculo:', areaCirculo(5))
