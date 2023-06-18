// let ingresarNombre = prompt("Ingresa tu Nombre")

// for (let index = 1; index <= 10; index++) {
// alert(ingresarNombre + " tiene el turno: " +index)
// ingresarNombre = prompt("Ingresa tu Nombre")
    
// }


let ingresarNumero = parseInt(prompt("Ingresa un numero"))



    while (ingresarNumero !== "Esc") {
        for (let index = 1; index <= 10; index++) {
        let resultado = ingresarNumero * index
        alert("El resultado es " + resultado)
        ingresarNumero = parseInt(prompt("Ingresa un numero"))
        }
    }
    
    
