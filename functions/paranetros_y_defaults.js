//parte a

function presentar(nombre, ciudad) {
  return `${nombre} es de ${ciudad}`;
}

presentar("Ana", "Rosario");   // resultado normal
presentar("Ana");              // muestra undefined en la seccion de ciudad
presentar();                   // anmabs variables se rellenan como undefined


//parte b

function saludar (nombre, idioma){
  if (idioma == "en"){
    console.log("Hello, " + nombre);
  } else{
    console.log("hola, " + nombre)
  }
}

saludar("Ana");          // "Hola, Ana"
saludar("Ann", "en");    // "Hello, Ann"
saludar("Ana", "es");    // "Hola, Ana"