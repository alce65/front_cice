export function controller () {

    let i
    let aNodosEnlaces
    let lista

    inicio()

    let listaInicial = lista.outerHTML
    console.dir(listaInicial)
    
    const pulsador = document.querySelector('#pulsador')
    const div = document.querySelector('div')
    const section = document.querySelector('section')   
    pulsador.addEventListener('click', pulsarA)
    div.addEventListener('click', pulsarDiv)
    section.addEventListener('click', pulsarSection)

    // 3. Implemantar los manejadores de eventos

    function inicio() {
        i = 0 
        aNodosEnlaces = document.querySelectorAll('.social-menu a')
        console.log(aNodosEnlaces)
        lista = document.querySelector('.social-menu')
        aNodosEnlaces.forEach( nodo =>  nodo.addEventListener('click', onClick, true) )
     }

    function onClick (ev) {
        i++
        /* console.dir('Target')
        console.dir(ev.target)
        console.dir('CurrentTarget')
        console.dir(ev.currentTarget) */
        let nodoA = ev.currentTarget
        nodoA.outerHTML = nodoA.innerHTML + `Ops! no tengo ${nodoA.title} <br>`
        if (i == 5) {
            lista.outerHTML += `
            <div id="extra" class="social-menu">
                <p>JA, JA, JA ... estoy ilocalizable</p>
                <img src="./assets/tenor.gif">
                <audio src="./assets/010707419_prev.mp3" autoplay></audio>
            </div>
                `
            setTimeout(() => {
                document.querySelector('#extra').outerHTML = ''
                document.querySelector('.social-menu').outerHTML = listaInicial
                inicio()
            }, 3000)
        }
    }

    function pulsarA() {
        console.log('Pulsado a')
    }

    function pulsarDiv(ev) {
        ev.stopPropagation()
        console.log('Pulsado div')
    }

    function pulsarSection() {
        console.log('Pulsado section')

    }
}