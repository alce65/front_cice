export function controller () {

    console.dir(document.querySelector('section'))

    // Procedimiento habitual

    // 1. Referencia a los Nodos del DOM que me interesan

    const aNodosQuestion = document.querySelectorAll('.question')
    /* const aNodosRespuesta = document.querySelectorAll('.respuesta') */

    // 2. Definir los manejadores de eventos

    aNodosQuestion.forEach( item =>  item.addEventListener('click', onClick) )

    // 3. Implemantar los manejadores de eventos

    function onClick(ev) {

        console.dir(ev.target)
        aNodosQuestion.forEach( item => item.classList.remove('destacado') )
        ev.target.classList.add('destacado')
        /* aNodosRespuesta.forEach( item => item.hidden = true) */
        aNodosQuestion.forEach( item => item.nextElementSibling.hidden = true )
        ev.target.nextElementSibling.hidden = false
        
    }

}