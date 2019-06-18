interface Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    comer: () => void
}

class Perro implements Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    colorPiel: string
    comer() {}
}

class Gato implements Animal{
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    peso: number
    comer () {}
}

let a1: Animal;
let p1: Perro;
let g1: Gato;

a1 = new Perro()
p1 = new Perro()
// g1 = new Perro()