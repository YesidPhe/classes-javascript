var estudiantes = ["Maria", "sergio", "Rosa"];

function saludarEstudiantes(estudiante) {
  console.log("Hola " + estudiante);
}

for (var i = 0; i < estudiantes.length; i) {
  saludarEstudiantes(estudiantes[i]);
}

//Otra forma de hacerlo
for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

//tipos de for
/**
 * for - recorre un bloque de código varias veces
 * for/in - recorre las propiedades de un objeto
 * for/of - recorre los valores de un objeto iterable
 */