// EJERCICIO 12

let valor1 = parseInt(prompt("Ingresar el número 1 de la operación"));
let valor2 = parseInt(prompt("Ingresar el número 2 de la operación"));
let operacion = prompt("Ingresar el tipo de operación: 'suma', 'resta', 'multiplicación' o 'división'");

switch(operacion) {
    case "suma":
        alert(valor1 + valor2);
        break;
    
    case "resta":
        alert(valor1 - valor2);
        break;
        
    case "multiplicación":
        alert(valor1 * valor2);
        break;
    
    case "división":
        if (valor2 == 0) {
            alert("Error! No se puede dividir por 0");
            break;
        } else {
        alert(valor1 / valor2);
        break;
        }
}