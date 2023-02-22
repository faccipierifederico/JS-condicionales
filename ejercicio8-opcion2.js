// EJERCICIO 8

let numeroIncognita = 3;
let numeroIngresado = parseInt(prompt("Ingresar un número entre el 1 y 10. Tienes 3 intentos de adivinar"));

switch(numeroIngresado){
    case numeroIncognita:
        alert("Ganaste al primer intento");
        break;

    case numeroIngresado:
        if (numeroIngresado > numeroIncognita) {
            numeroIngresado = parseInt(prompt("El ingresado es mayor al incógnita. Elige uno más chico."));
        } else {
            numeroIngresado = parseInt(prompt("El ingresado es menor al incógnita. Elige uno más grande."));
        }
    
    case numeroIngresado:
        if (numeroIncognita === numeroIngresado) {
            alert("Ganaste al segundo intento")
        break;
        }
    
    case numeroIngresado:
        if (numeroIngresado > numeroIncognita) {
            numeroIngresado = parseInt(prompt("El ingresado es mayor al incógnita. Elige uno más chico."));
        } else {
            numeroIngresado = parseInt(prompt("El ingresado es menor al incógnita. Elige uno más grande."));
        }
    
    case numeroIngresado:
        if (numeroIncognita === numeroIngresado) {
            alert("Ganaste al tercer intento")
        break;
        }
    
    default:
        alert("No adivinaste el número. Perdiste");
        break;
    }
