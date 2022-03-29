var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  age: 2018,
  // Funcion
  detalleDelAuto: function() {
    console.log(`Auto: ${this.marca} ${this.modelo}`); //this hace referencia al objeto, en este caso miAuto.marca y miAuto.modelo
  }
};

miAuto; // {marca: "Toyota", modelo: "Corolla", age: 2018, detalleDelAuto: ƒ}

miAuto.marca; // "Toyota"

miAuto.detalleDelAuto(); // "Auto: Toyota Corolla"