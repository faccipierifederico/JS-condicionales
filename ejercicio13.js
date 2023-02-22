// EJERCICIO 13

let nombre = prompt("Ingresar nombre");
let apellido = prompt("Ingresar apellido");
let edad = prompt("Ingresar edad");
let fechaNac = prompt("Ingresar fecha de nacimiento");
let nacionalidad = prompt("Ingresar nacionalidad");

let esCorrecto = prompt("¿Son correctos los siguientes datos?: Su nombre es " + nombre + ". Su apellido es " + apellido + ". Su edad es " + edad + ". Su fecha de nacimiento es " + fechaNac + ". Su nacionalidad es " + nacionalidad + ".");

if (esCorrecto == "si") {
    let dni = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        fechaNac: fechaNac,
        nacionalidad: nacionalidad
    }
    console.table(dni);
    alert("Registro exitoso");
} else {
    alert("Datos rechazados. Vuelve a intentarlo en 1 mes");
}