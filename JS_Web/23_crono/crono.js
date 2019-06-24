// Definición de la Función Constructora de la Pseudoclase Crono
export class Crono {
    constructor(posicion) {
        this.t = 0;
        this.posicion = posicion;
    }
    
    // Se añade el método mostrar al prototipo 
    mostrar() {
        var oCrono = document.getElementById('crono'+this.posicion),
            timeCrono = +oCrono.innerHTML + 0.1;
        oCrono.innerHTML = timeCrono.toFixed(1); // Convierte el número a string con 1 decimal
    }; 

    arrancar() { this.t = setInterval(this.mostrar.bind(this), 100); };

    parar() { clearInterval(this.t); this.t = undefined; };

    limpiarCrono() {
        document.getElementById('crono'+this.posicion).innerHTML = "0.0";
    };

    cambiarCrono() {
        if (!this.t) { this.arrancar(); }
        else { this.parar(); }
    };
}
