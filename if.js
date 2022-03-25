//CONDICIONALES

if (a != true) {
  console.log("Hi");
} else {
  console.log("Soy falso");
}

//Ejemplos
var edad = 18;

if (edad === 18) {
  console.log("Puedes votar, será tu primera votación.");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo.");
} else {
  console.log("Aún no puede votar.");
}

//Operador ternario
conditions ? true : false;

var number = 1;

var resultado = number === 1 ? "Sí soy un 1." : "No soy 1";