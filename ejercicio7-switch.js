// EJERCICIO 7

let name = prompt("Ingresar nombre");
let pase = prompt("VIP o normal?");
let entrada = prompt("Posee entrada? Decir 'si' o decir 'no'");
console.log(entrada);

if (name == "Federico" || pase === "VIP") {
    console.log("Bienvenidos")
} else {
    switch(entrada){
        case "si":
            let usarla = prompt("Quiere utilizarla? Decir 'si' o decir 'no'")
            if (usarla == "si") {
                console.log("bienvenido");
            } else {
                console.log("Adiós");
                // probar un alert
            }
            break;
        default:
            let comprar = prompt("Desea comprar una entrada?")
            if (comprar == "si") {
                let dinero = parseInt(prompt("Decir dinero disponible"))
                if (dinero >= "1000") {
                    console.log("Entrada vendida. Bienvenido")
                } else {
                    console.log("Sin dinero suficiente")
                }
            } else {
                console.log("Chau chau")
            }
            break;
        }
    }