/**
 * Creamos un objeto con los nombres de los meses en español como propiedades
 * y sus equiovalentes en otro idioma (e.g. ingles) como valor
 * y añadimos una función que muestre por consola la frase 
 * "El mes ... en inglés se dice ... " para cada uno de los meses
 */

let mesesEnRuso = {
    enero: 'январь',
    febrero: 'февраль',
    marzo: 'март',
    abril: 'апрель',
    mayo: 'май',
    junio: 'июнь',
    julio: 'июль',
    agosto: 'август',
    septiembre: 'сентябрь',
    octubre: 'октябрь',
    noviembre: 'ноябрь',
    diciembre: 'декабрь',
    toString: function() {
        let output = ''
        for (const key in this) {
            const element = this[key]
            if (typeof element === 'function') {
                continue
            }
            output += `El mes ${key} en ruso se dice ${element}` + '\n'
        }
        return output
    },
    mostrar: function() {
        console.log(this.toString())
    },    
}
mesesEnRuso.mostrar()


                  

                  

               

           

             

               