
function areaRectangulo(x , y){
    console.log( x * y )

}

areaRectangulo(4, 5);   
areaRectangulo(3, 3);


function esMayorDeEdad(edad){
    if(edad >= 18){
        return true
    }else{
        return false;
    }
}

esMayorDeEdad(20);   
esMayorDeEdad(15); 


function nombreCompleto(nombre , apellido){
    return (nombre + " " + apellido);
}


nombreCompleto("Ana", "Pérez");