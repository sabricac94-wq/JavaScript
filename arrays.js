let animales = ["perro", "perico", "gato", true, 5]
console.log(animales[0])
//ARAY MULTIDIMENSIONAL
let paises = ["Alemania", "Mexico", "Ecuador", "Colombia", "Venezuela",["Brasil", "Argentina", "Chile"]]
console.log(paises[5][0])

//CONSTANTE 
const nombre = "Sofia"
console.log(nombre)
// nombre = "Ana" 
console.log(nombre)

//OBJETOS
let persona = {
    nombre: "Fulanito Garcia", 
    direccion: "Av. Pino Suarez no. 100",
    edad: 31

}

let cliente = {
    nombre: "Fulanito Garcia", 
    direccion: "Av. Pino Suarez no. 100",
    edad: 31

}

let usuario = {
    nombre: "Fulanito Garcia", 
    direccion: "Av. Pino Suarez no. 100",
    edad: 31

}

let contenido = [persona, cliente, usuario]
console.log(contenido[1])