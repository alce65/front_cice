// Ejemplo de 'pseudopropiedad' getter

let persona = {
    nombre: 'Pepe',
    nacim : new Date(1965, 8, 31),
    calcularEdad : function () {
      return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
    },
    get edad () {
        return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
    },
    amigos: [],
    set nuevoAmigo(amigo) {
      this.amigos.push(amigo);
    }   
}

persona.nuevoAmigo = 'Antonio'
console.log(persona)
console.log(persona.edad)
console.log(persona.calcularEdad())

/**
 * 
 * En Java, C#...
 * 
 * class Persona {
 *  private edad
 * }
 * 
 * p1 = new Persona()
 * p1.edad = 23 // Error
 * console.log(p1.edad) // Error
 * 
 */