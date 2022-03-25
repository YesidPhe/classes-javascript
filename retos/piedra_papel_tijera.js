var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";
var resultado;

function juego(player, cpu) {
  if (player == piedra && cpu == tijera || player == papel && cpu == piedra || player == tijera && cpu == papel) {
    resultado = "Gana Jess!.";
  } else if (player == piedra && cpu == papel || player == papel && cpu == tijera || player == tijera && cpu == piedra) {
    resultado = "Pierde Jess!.";
  } else {
    resultado = "Empate.";
  }
  return console.log(resultado);
}

juego();