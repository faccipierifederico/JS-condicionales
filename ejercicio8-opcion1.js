// EJERCICIO 8

let numeroIncognita = 3;
let numeroIngresado = parseInt(prompt("Ingresar un número entre el 1 y 10. Tienes 3 intentos de adivinar"));

switch(numeroIngresado){
    case numeroIncognita:
        alert("Ganaste al primer intento");
        break
    case numeroIngresado:
        numeroIngresado = parseInt(prompt("No era el " + numeroIngresado + ". Segunda chance de adivinar"));
        if (numeroIngresado === 3) {
            alert("Ganaste al segundo intento");
            break
        }
    case numeroIngresado:
        numeroIngresado = parseInt(prompt("No era el " + numeroIngresado + ". Última chance de adivinar"));
        if (numeroIngresado === 3) {
            alert("Ganaste en el último intento");
            break
        }
    default:
        alert("No ganaste. Fin del juego");
}