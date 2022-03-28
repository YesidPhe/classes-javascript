var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";
var jugada;
var resultado;
var puntaje = 0;

function juego(player, cpu) {
  if (player == piedra && cpu == tijera || player == papel && cpu == piedra || player == tijera && cpu == papel) {
    jugada = 1;
  } else if (player == piedra && cpu == papel || player == papel && cpu == tijera || player == tijera && cpu == piedra) {
    jugada = -1;
  } else {
    jugada = 0;
  }

  switch (jugada) {
    case 1:
      puntaje = puntaje + jugada;
      resultado = "Gana Jess!. Tu puntaje es: " + puntaje;
      break;

    case -1:
      if (puntaje == 0) {
        resultado = "Pierde Jess!. Tu puntaje es: " + puntaje;
      } else {
        puntaje = puntaje + jugada;
        resultado = "Pierde Jess!. Tu puntaje es: " + puntaje;
      }
      break;

    default:
      resultado = "Empate. Tu puntaje es: " + puntaje;

      break;
  }
  return console.log(resultado);
}