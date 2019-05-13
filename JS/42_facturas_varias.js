/**
 * Reacemos el ejercicio empleando una funcion constructora
 */

function Factura (empresa, cliente, items, tipoIVA, formaPago) {
    this.empresa = empresa
    this.cliente = cliente
    this.items = items
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
}

Factura.prototype.calculaImporte = function() {
    let iva = this.tipoIVA < 1 ? 1 + this.tipoIVA : this.tipoIVA
    return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva 
}

Factura.prototype.muestraImporte = function () {
        let msg = 'El importe total (IVA incluido) es ' + this.calculaImporte().toFixed(2) + ' €'
        console.log(msg)
    }

function Empresa (nombre, direccion, telefono, NIF) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.NIF = NIF
}

function Item (descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

const factura1 = new Factura(
    new Empresa('Ediciones Boracay', 'c/ Pez','916583764', 'B-64539874'),
    new Empresa('Libros Tuatalug', 'c/ Marques de ', '917256983', 'M-64584741'), 
    [   new Item('Libro 1', 20, 12),
        new Item('Libro 2', 24.8, 10),
        new Item('Libro 3', 34.7, 7)],
    0.23,
    'efectivo'
)


console.log(factura1)
factura1.muestraImporte()

// Dependencia : método adoptarMaccota

// Asociación : atributo mascota = new Mascota