// EJERCICIO 10

let jugador1 = prompt("Jugador 1: ingresar 'piedra', 'papel' o 'tijera'");
let jugador2 = prompt("Jugador 2: ingresar 'piedra', 'papel' o 'tijera'");

switch (jugador1) {
  case jugador1:
    if (jugador1 === "piedra" && jugador2 === "piedra") {
      alert("empate");
      break;
    }

  case jugador1:
    if (jugador1 === "piedra" && jugador2 === "papel") {
      alert("Ganó el jugador 2");
      break;
    }

  case jugador1:
    if (jugador1 === "piedra" && jugador2 === "tijera") {
      alert("Ganó el jugador 1");
      break;
    }

  case jugador1:
    if (jugador1 === "papel" && jugador2 === "papel") {
      alert("empate");
      break;
    }

  case jugador1:
    if (jugador1 === "papel" && jugador2 === "piedra") {
      alert("Ganó el jugador 1");
      break;
    }

    case jugador1:
        if (jugador1 === "papel" && jugador2 === "tijera") {
            alert("Ganó el jugador 2")
            break
        }

    case jugador1:
        if (jugador1 === "tijera" && jugador2 === "piedra") {
            alert("Ganó el jugador 2")
            break
        }
    
    case jugador1:
        if (jugador1 === "tijera" && jugador2 === "papel") {
            alert("Ganó el jugador 1")
            break
        }

    case jugador1:
        if (jugador1 === "tijera" && jugador2 === "tijera") {
            alert("Empate")
            break
        }
    
    default:
        alert("Alguien hizo trampa")
    }