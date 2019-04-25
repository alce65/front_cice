let numeros = [1, 2, 4, 6]
let amigos = ['Pepe', 'Rosa', 'Juan']
let deTodo = [1, 45, 'Perro', 'Gato', true, {nombre : 'Ramon', edad: 23}]

console.log(deTodo)

for (let i = 0; i < amigos.length; i++) {
    const element = amigos[i]
    console.log(`Hola ${element}`)
}

/**
 * 
 * Programa que compruebe si un nombre ha sido usado alguna vez por un rey de España
 * 
 */

    /**
     * Function isRey
     * @name : string
     * @returns: boolean
     */

     function isRey (name) {
        let reyes = ['Fernando', 'Isabel', 'Carlos', 'Felipe', 
                        'Luis', 'Jose', 'Amadeo', 'Alfonso', 'Juan Carlos']
        for (let i = 0; i < reyes.length; i++) {
            const rey = reyes[i];
            if (rey.toLowerCase() === name.toLowerCase()) {
                return true
            }
        }
        return false
     }

     /**
      * Function mostrar
      * @param name: string
      * @returns: void
      */

     function mostrar(name) {
         let i = 0
         let mensajes = [
             `Ningun rey de España se ha llamado nunca ${name}`,
             `El nombre ${name} ha sido usado por un rey de España`
         ]
         if (isRey(name)) {
             i = 1
         }
         console.log(mensajes[i])
     }
 
     let name = 'carlos'
     // name = 'Ernesto'
     mostrar(name)