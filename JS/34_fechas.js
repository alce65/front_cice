Date.prototype.toStringEnEspañol =  function () {
    const aDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const aMeses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
               'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
    let fechaToString = ''
    console.log('This')
    console.log(this)
    fechaToString +=  aDias[this.getDay()] + ', '
    fechaToString += this.getDate() + ' de '
    fechaToString += aMeses[this.getMonth()] + ' de '
    fechaToString += this.getFullYear()
    return fechaToString
};

(function () {
    let hoy = new Date()
    console.log(hoy)

    let fecha = new Date(7084357034858)
    console.log(fecha)
    console.log(fecha.getFullYear())

    let nacim = new Date(1965,7,31)
    console.log(nacim.toLocaleDateString())
    console.log(nacim.toLocaleTimeString())
    console.log(nacim.toLocaleString())
    console.log(nacim.toDateString())
    console.log(nacim.getDay())
    console.log(fechaEnEspañolToString(nacim))
    // console.log(nacim.toStringEnEspañol())
})()


/**
 * Mostrar fecha como "Dia de semana, dia de Mes de Año"
 */

/**
 * fechaEnEspañolToString
 * @param fecha: Date
 * @return: string
 */

 function fechaEnEspañolToString(fecha = new Date()) {
     const aDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
     const aMeses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
     /* let fechaToString = ''
     fechaToString +=  aDias[fecha.getDay()] + ', '
     fechaToString += fecha.getDate() + ' de '
     fechaToString += aMeses[fecha.getMonth()] + ' de '
     fechaToString += fecha.getFullYear() */
     let fechaToString = aDias[fecha.getDay()] + ', '
                        + fecha.getDate() + ' de '
                        + aMeses[fecha.getMonth()] + ' de '
                        + fecha.getFullYear()
     return fechaToString
 }


