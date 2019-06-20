import { Controller } from './controller.js';

describe('triggering buttons', () => {
  let eventListeners
  let btnElement
  let inputElement

  beforeEach(() => {
    btnElement = document.createElement('button')
    btnElement.id = 'btn-click'
    inputElement = document.createElement('input')
    inputElement.id = 'in-nombre'

  })

  it('any button dispatches btn click event', () => {
    eventListeners = {
      btnClickSpy : () => {}
    }
    spyOn(eventListeners, 'btnClickSpy')
    btnElement.addEventListener('click', eventListeners.btnClickSpy)
    btnElement.dispatchEvent(new Event('click'))
    expect(eventListeners.btnClickSpy).toHaveBeenCalled()
  })

  it('"Comprobar" button dispatches onProbar', () => {
    let controller = new Controller()
    spyOn(controller, 'onProbar')
    btnElement.addEventListener('click', controller.onProbar)
    btnElement.dispatchEvent(new Event('click'))
    expect(controller.onProbar).toHaveBeenCalled()
  })

  it('Input changes dispatches onProbar', () => {
    let controller = new Controller()
    spyOn(controller, 'onProbar')
    inputElement.addEventListener('change', controller.onProbar)
    inputElement.dispatchEvent(new Event('change'))
    expect(controller.onProbar).toHaveBeenCalled()
  })

})
