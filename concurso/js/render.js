import { isRey } from './helper.js'

/** Function render
 * @description renderiza un mensaje en un nodo dado, dependiendo del resultado de la llamada a otra función
 * @external isRey()
 * @param {string} name
 * @param {Node} output
 * @returns: void
 */

export function render(name, output) {
    const mensajes = [
        `Ningun rey de España se ha llamado nunca ${name}`,
        `El nombre ${name} ha sido usado por un rey de España`
    ]
    output.innerHTML = mensajes[ isRey(name) ? 1 : 0]
}    