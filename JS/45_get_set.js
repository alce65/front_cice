// Ejemplo de 'pseudopropiedad' getter

let persona = {
    nombre: 'Pepe',
    nacim : new Date(1965, 8, 31),
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