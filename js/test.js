// Espero recibir un string de la funcion 
// a la cual le paso un numero como parametro
var mes = nombreDeMes(1);
if ( mes !== "Enero") {
    alert("Prueba fallida con mes Enero")
}

var mes = nombreDeMes(2);
if ( mes !== "Febrero") {
    alert("Prueba fallida con mes Febrero")
}

var mes = nombreDeMes(3);
if ( mes !== "Marzo") {
    alert("Prueba fallida con mes Marzo")
}

var mes = nombreDeMes(7);
if ( mes !== "Julio") {
    alert("Prueba fallida con mes Julio")
}


var mes = nombreDeMes(-1);
if ( mes === "Error") {
    console.log("Prueba exitosa, devuelve Error porque le pasamos -1")
} else {
    alert("Prueba fallida, no devuelve Error")
}


var serieFib = fibonacci(0);
if (serieFib != 0 ) {
    alert("Error en Fibonacci de 0")
}

var serieFib = fibonacci(1);
if (serieFib != 1 ) {
    alert("Error en Fibonacci de 1")
}

var serieFib = fibonacci(3);
if (serieFib != 2) {
    alert("Error en Fibonacci de 3")
}