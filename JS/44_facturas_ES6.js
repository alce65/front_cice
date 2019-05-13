/**
 * Reacemos el ejercicio empleando una funcion constructora
 */

class Item  { 
    constructor (descripcion, precio, cantidad) {
        this.descripcion = descripcion
        this.precio = precio
        this.cantidad = cantidad
    }
}

class Factura {
    constructor  (cliente, tipoIVA, formaPago) {
        // this.empresa = new Empresa('Ediciones Boracay', 'c/ Pez','916583764', 'B-64539874')
        this.cliente = cliente
        this.items = []
        this.tipoIVA = tipoIVA
        this.formaPago = formaPago
    }
    get empresa() {
        return new Empresa('Ediciones Boracay', 'c/ Pez','916583764', 'B-64539874')
    }
    addItem (item = new Item()) {
        this.items.push(item)
    }
    calculaImporte () {
        let iva = this.tipoIVA < 1 ? 1 + this.tipoIVA : this.tipoIVA
        return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva 
    }
    muestraImporte () {
        let msg = 'El importe total (IVA incluido) es ' + this.calculaImporte().toFixed(2) + ' €'
        console.log(msg)
    }
}

class Empresa {
    constructor (nombre, direccion, telefono, NIF) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.NIF = NIF
    }
}

(function () {

    // const cliente1 = new Empresa('Libros Tuatalug', 'c/ Marques de ', '917256983', 'M-64584741')
    // const factura1 = new Factura(cliente1, 0.23, 'efectivo')

    const factura1 = new Factura(
        new Empresa('Libros Tuatalug', 'c/ Marques de ', '917256983', 'M-64584741'), 
        0.23, 
        'efectivo')

    factura1.addItem(new Item('Libro 1', 20, 12))
    factura1.addItem(new Item('Libro 2', 24.8, 10))
    factura1.addItem(new Item('Libro 3', 34.7, 7))

    console.log(factura1.empresa)
    console.log(factura1)
    factura1.muestraImporte()

    // Dependencia : método adoptarMaccota

    // Asociación : atributo mascota = new Mascota

})()

