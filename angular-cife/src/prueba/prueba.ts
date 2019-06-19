export function factorial(n: number) {
    if (n === 0 || n === 1 ) {
        return n;
    } else if ( n > 1) {
        return n * factorial(n - 1);
    } else {
        throw new Error('No existe el factorial de un número negativo');
    }
}
