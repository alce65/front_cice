{

    interface Animal {
        nombre: string
        edad: number
        isDomestic: boolean
        tipo: string
    }

    interface Herbivoro extends Animal {
        peso: number
    }
    
    class Caballo implements Herbivoro {
        /* nombre: string
        edad: number
        isDomestic: boolean
        tipo: string
        peso: number

        constructor(nombre, edad, isDomestic, tipo, peso) {
            this.nombre = nombre
            this.edad = edad
            this.isDomestic = isDomestic
            this.tipo = tipo
            this.peso = peso
        } */


        constructor(
            public nombre: string, 
            public edad: number, 
            public isDomestic: boolean, 
            public tipo: string, 
            public peso: number) {}

    }

    let c1 = new Caballo('Rufo', 2, true, 'Arabe', 300)
    console.log(c1)

}d
