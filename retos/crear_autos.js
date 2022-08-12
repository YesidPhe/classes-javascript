var autos = [];

function creaAuto(modelo, age) {
  this.marca = "Tesla";
  this.modelo = modelo;
  this.age = age;
}

for (let i = 1; i < 10; i++) {
  autos.push(new creaAuto(`Model ${i}`, (2017 + i)));
}

console.log(autos); // [ 
//{ marca: 'Tesla', modelo: 'Model 1', age: 2018 }, 
//{ marca: 'Tesla', modelo: 'Model 2', age: 2019 },
//... ]