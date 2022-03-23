console.log(nombre); //Undefined por el hoisting

var nombre = "Duvan";

//Al procesar el codigo pasa lo siguiente:
/*
var nombre; Se declara

console.log(nombre); Se llama

nombre = "Duvan"; Se inicializa
*/

hey();

function hey() {
    console.log("Hi");
}
//Al procesar el codigo pasa lo siguiente:
/*
function hey() {
    console.log("Hi");
} Se declara la función

hey(); Se declara la variale
*/

//EJEMPLO EN CONJUNTO

hey();

function hey() {
    console.log("Hi " + nombre); //Hi undefined
}

var nombre = "Duvan";

//Por buenas practicas, hay que declarar las funciones en las primeras lineas