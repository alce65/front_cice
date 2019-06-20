import { REYES } from './data.js';
import { render } from './render.js'

describe('Function render', () => {

    const aReyes = REYES
    let element

      beforeEach(() => {
        // Dom = new DomManipulation();
        element = document.createElement('output')
      })

    it ('should render "Ningun rey..." if name is not ok', () => {
        const name = '...'
        render(name, element)
        expect(element.textContent).toContain('Ningun rey de España')
    })

    for (let i = 0; i < aReyes.length; i++) {
        const name = aReyes[i];
        it (`should render "usado por un rey..." if name is ${name}`, () => {
            render(name, element)
            expect(element.textContent).toContain('usado por un rey')
        })
    }

})
