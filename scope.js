var nombre = "Duvan"; //Scope global

function funcion() {
  var apellido = "Becerra"; //Scope local
  return nombre + " " + apellido;
}

funcion();