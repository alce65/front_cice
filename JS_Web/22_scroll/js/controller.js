export function controller() {
    console.log('Controller cargado')
    
    // Variables
    let isSticky = false;

    // Nodos
    let header = document.querySelector('#main-header')
    let aItemsMenu = document.querySelectorAll('.main-menu a')
    let aSections = document.querySelectorAll('.main-content section')
    let aOffSets = []

    // Manejadores de eventos
    window.addEventListener('scroll', onScroll)
    aItemsMenu.forEach( item => item.addEventListener('click', onClickMenu))

    function calculaOffSets() {
        let aDatos = []
        aSections.forEach( item => aDatos.push(item.offsetTop)) 
        aDatos[0] = 0
        console.dir(aDatos)
        return aDatos
    }

    function onScroll(ev) {
        console.dir(scrollY)
        if(scrollY >= 40 && !isSticky) { 
            header.classList.add('sticky-header')
            isSticky = true
            aOffSets = calculaOffSets()
        } else if (scrollY < 40 && isSticky) {
            header.classList.remove('sticky-header')
            isSticky = false
        }
        let id
        if (scrollY < aOffSets[1] - 50 ) {
            // estoy en inicio
            id  = 0
        } else if (scrollY < aOffSets[2] - 50 ) {
            // estoy en seccion 1 (porfolio)
            id = 1
        } else if (scrollY < aOffSets[3] - 50 ) {
            // estoy en sección 2 (clientes) 
            id = 2
        } else { 
            // estoy en sección 3 (nosotros) 
            id = 3
        }
        ponActivo(id)
    }

    function onClickMenu(ev) {
        ev.preventDefault()
        let id = +ev.target.dataset.orden
        if (id && !isSticky) { // click inicial en opción distinta de inicio 
            header.classList.add('sticky-header')
            isSticky = true
            aOffSets = calculaOffSets()
        }
        const altoStickyMenu = 50
        let destino = 0
        let offset =  aOffSets[id]        
        console.log('Item', id)
        console.log('offset', offset)
        destino = offset - altoStickyMenu 
        window.scrollTo(0,destino)
        ponActivo(id)
        // window.scrollTo(0, aOffSets[id]-altoStickyMenu )
    }


    function ponActivo(id) {
        aItemsMenu.forEach (item => item.classList.remove('activo'))
        aItemsMenu[id].classList.add('activo')
    }
}