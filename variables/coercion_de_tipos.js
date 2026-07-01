

console.log(0 == false) //true
console.log(0 === false)//false
console.log("" == false)//true
console.log(null == undefined)//true
console.log(null === undefined)//false
console.log("5" == 5)//true
console.log("5" === 5)//false



// El usuario escribe su nombre en un formulario
const nombreUsuario = "  "; // espacios en blanco
if (nombreUsuario.trim() == "") {
  console.log("El nombre no puede estar vacío");
} else {
  console.log("Bienvenido, " + nombreUsuario);
}

// Una función que busca un jugador en una lista
// Si no lo encuentra, devuelve null
const jugador = null;
if (jugador === null) {
  console.log("Jugador no encontrado");
}

// El usuario ingresó su edad en un input HTML (siempre llega como string)
const edadTexto = "17";
const edad = number(edadTexto);
const edadMinima = 16;
if (edad => edadMinima) {
  console.log("Edad válida");
} else {
  console.log("Muy joven");
}