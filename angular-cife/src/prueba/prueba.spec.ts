import { factorial, isPar } from './prueba';

xdescribe('La función factorial', () => {

    it('should be 1 if n=1', () => {
        const n = 1;
        expect(factorial(n)).toEqual(1);
    });

    it('should be 0 if n=0', () => {
        const n = 0;
        expect(factorial(n)).toEqual(0);

    });

    it('should be 120 if n=5', () => {
        const n = 5;
        expect(factorial(n)).toEqual(120);
    });


    it('should throw error if n=-5', () => {
        const n = -5;
        // expect(factorial.bind(n)).toThrow();
        expect(factorial.bind(n)).toThrowError('No existe el factorial de un número negativo');
    });


});

xdescribe('La función is par..', () => {

    it('should be par if n = 20', () => {
        const n = 20;
        expect(isPar(n)).toBeTruthy();
    });

    it('should be not par if n = 23', () => {
        const n = 23;
        expect(isPar(n)).toBeFalsy();
    });

    it('should be par if n = 0', () => {
        const n = 0;
        expect(isPar(n)).toBeTruthy();
    });

    it('should be par if n = -20', () => {
        const n = -20;
        expect(isPar(n)).toBeTruthy();
    });

    it('should be not par if n = -23', () => {
        const n = -23;
        expect(isPar(n)).toBeFalsy();
    });

    it('should throw error if n = 3.5', () => {
        const n = 3.5;
        expect( () => isPar(n) ).toThrowError('El valor es un numero decimal');
    });

    it('should throw error if n = "Pepe"', () => {
        const n = 'Pepe';
        expect( () => isPar(Number(n)) ).toThrowError('El valor no es un número');
    });

    /* number = {}, number = [], number = true, number = false */
});

