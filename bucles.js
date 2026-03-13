//variable de inicializacion; condicion; suma, resta o multiplicacion
/*
for (let colima = 5; colima <= 10 ; colima++) { 
    console.log(colima)
    
}
//Imprime los numeros del 10 al 0
for (let index = 10; index >= 0 ; index--) {
    console.log(index)
    
}
*/
// imprime los numeros sumando de dos en dos
/*for (let index = 0; index <= 20 ; index = index+2) {
    console.log(index)
    
}

for (let index = 0; index < 10 ; index++) {
    if (index === 6) {
        break
    }
    console.log(index)

    
}*/

//un igual significa asignacion, o sea que le estamos dando un valor
//== significa comparar el valor
//=== significa comparar valor y tipo de dato

/*for (let index = 1 ; index < 10 ; index++) {
    if (index === 5) {
        continue
    }
    console.log(index)
    
}*/
//imprime los nombres a partir de la posicion 0 
/* es un bucle que recorre la sposiciones de memoria del array clientes cada uno
de los espacios de memoria contiene el nombre de un cliente
let clientes = [
    "Sofia",
    "Ricardo",
    "Maria",
    "Juan",
    "Pablo"
]
for (let index = 0; index < 5; index++) {
    console.log(clientes[index])
    
}

for (let index = 0; index <= 5; index++) {
    let PuntoDecimal = index + "."
    for (let i = 0; i < 10; i++) {
        console.log(PuntoDecimal + i)
        
    }
    
}*/

let calificaciones = [
    [8, 9, 10, 8, 7],
    [9, 5, 6, 8, 9],
    [10, 8, 7, 6, 9],
    [6, 8, 7, 5, 4]
]

/*for (let index = 0; index < calificaciones.length; index++) {
    for (let colima = 0; colima < calificaciones.length; colima++) {
        console.log(calificaciones[index][colima])
        
    }
    
}*/

for (let index = 0; index < calificaciones.length; index++) {
    console.log(calificaciones[index])
    
}

//console.log(calificaciones.length)