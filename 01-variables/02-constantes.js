/* si nosotros tenemos una variable con "let", esta puede cambiar */

let name = "Mariano"
name = "Ismael"

console.log(name)

/* con constantes, nuestra variable permanece, en cambio nos devuelve un error */

const lastname = "García"
lastname = "Guzmán"

console.log(lastname)

/* es recomendable no cambiar el valor de una variable */