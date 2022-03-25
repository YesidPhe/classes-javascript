//Dos tipos de funciones:
//Declarativas
function miFuncion() {
  return 3;
}

miFuncion();
//Expresión
var miFuncion2 = function(a, b) {
  console.log(a);
  console.log(b);

  console.log(`The number is: ${a}`);
  return a + b;
}

miFuncion2();