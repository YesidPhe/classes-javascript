var frutas = ["Manzana", "Pera", "Naranja", "Sandia"];

console.log(frutas); //(4) [ 'Manzana', 'Pera', 'Naranja', 'Sandia' ]

console.log(frutas.length); //4

console.log(frutas[0]); //Manzana

//Agregar un elemento al final del array
var masFrutas = frutas.push("Uvas");
frutas; //(5) [ 'Manzana', 'Pera', 'Naranja', 'Sandia', 'Uvas' ]

//Eliminar el ultimo elemento del array
var ultimo = frutas.pop("Uvas");
frutas; //(4) [ 'Manzana', 'Pera', 'Naranja', 'Sandia' ]

//Agregar un elemento al inicio del array
var nuevaFruta = frutas.unshift("Uvas");
frutas; //(5) [ 'Uvas', 'Manzana', 'Pera', 'Naranja', 'Sandia' ]

//Eliminar el primer elemento del array
var borrarFruta = frutas.shift("Uvas");
frutas; //(4) [ 'Manzana', 'Pera', 'Naranja', 'Sandia' ]

//Obtener un indice del array
var posicion = frutas.indexOf("Pera"); //1