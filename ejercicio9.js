// EJERCICIO 9

let edad = parseInt(prompt("Ingresa tu edad y te diré lo que eres"));

switch (edad) {
    case edad:
        if (edad > 0 && edad <= 12) {
            alert("Eres un infante")
            break
        }
    case edad:
        if (edad > 12 && edad <= 18) {
            alert("Eres adolescente")
            break
        }
    
    case edad:
        if (edad > 18 && edad <= 45) {
            alert("Eres mayor joven")
            break
        }
    
    case edad:
        if (edad > 45 && edad <= 100) {
            alert("Eres anciano")
            break
        }
    
    default:
        alert ("Tienes realmente más de 100 años?")
        break
}