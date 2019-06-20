import { REYES } from "./data.js";

/**
 * Function isRey
 * @description comprueba si un nombre ha sido usado alguna vez por un rey de España
 * @name : string
 * @returns: boolean
 */

export function isRey (name) {
    let r = false
    if (typeof name != 'string') {
        throw new Error('El tipo de dato no es válido')
    }
    REYES.some(item => {
        r = (item.toLowerCase() === name.toLowerCase()) ? true : false
        return r
    })
    return r
}