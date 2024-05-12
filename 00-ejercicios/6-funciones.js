function factorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1
  } else {
    return numero * factorial(numero - 1)
  }
}

function esPrimo(numero) {
  if (numero <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false
    }
  }
  return true
}

function revertirCadena(cadena) {
  return cadena.split('').reverse().join('')
}

console.log('Factorial de 5:', factorial(5))
console.log('¿Es primo el número 11?', esPrimo(11))
console.log('¿Es primo el número 15?', esPrimo(15))
console.log('Cadena revertida:', revertirCadena('Hola mundo'))
