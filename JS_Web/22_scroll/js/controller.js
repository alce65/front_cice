export function controller() {
    console.log('Controller cargado')
    
    // Variables
    let isSticky = false;

    // Nodos
    let header = document.querySelector('#main-header')
    let aItemsMenu = document.querySelectorAll('.main-menu a')
    let aSections = document.querySelectorAll('.main-content section')
    let aOffSets = calculaOffSets()

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
    }

    function onClickMenu(ev) {
        ev.preventDefault()
        let id = +ev.target.dataset.orden
        if (id && !isSticky) { // click inicial en opción distinta de inicio 
            header.classList.add('sticky-header')
            isSticky = true
        }
        aOffSets = calculaOffSets()
        
        let destino = 0
        let offset =  aOffSets[id]        
        aItemsMenu.forEach (item => item.classList.remove('activo'))
        aItemsMenu[id].classList.add('activo')
        console.log('Item', id)
        console.log('offset', offset)
        /* if (isSticky) { */
            destino = offset - 50 
       /*  } else {
            destino = offset
        } */
        window.scrollTo(0,destino)
    }

}