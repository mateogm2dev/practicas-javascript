//parte a

function triple(n) {
  console.log(n * 3);
}

const a = triple(4);
console.log(a); //12
console.log(triple(4) + 1);// undefined

//resultados:
// undefined
//NaN
//esto ocurre porque se usa console.log en la funcion en lugar de return

//parte b

function precioConIva(precio) {
  return(precio * 1.21);
}

const total = precioConIva(100);
console.log(`El total es ${total}`); 


//Una función calcularEdad(anioNacimiento) cuyo resultado vas a guardar para hacer cuentas.
//deberia usar return para poder guardar el contenido mas facil

//Una función mostrarBienvenida() que solo tiene que escribir un cartel en la consola.
//es mejor usar console.log, ya que solo necesita verse 1 vez