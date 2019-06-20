import { isRey } from './helper.js';
import { REYES } from './data.js';

describe('Function isRey', () => {

    const aReyes = REYES

    for (let i = 0; i < aReyes.length; i++) {
        const element = aReyes[i];
         it(`should be true if name is ${element}`, () => {
            expect(isRey(element)).toBeTruthy()
        })
    }
   
    it('should be false if name is ...', () => {
        const name = '...';
        expect(isRey(name)).toBeFalsy();
    });

    it('should be false if name is "" ', () => {
        const name = '';
        expect(isRey(name)).toBeFalsy();
    });

    it('should throw error if name is not string', () => {
        const name = true;
        // expect(isRey.bind(name)).toThrow()
        expect(isRey.bind(name)).toThrowError('El tipo de dato no es válido');
    });

});
