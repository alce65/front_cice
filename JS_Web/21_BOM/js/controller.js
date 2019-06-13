export function controller() {
    console.log('Controller cargado')

    const btnProbar = document.querySelector('#btnProbar')

    btnProbar.addEventListener('click', onClickProbar)

    document.querySelector('#btnLocalizar').addEventListener('click' , onClick)

    
    async function onClick () {
        let position = await localizar()
        console.log(position)
    }


    function onClickProbar() {
        // window.alert('Probando')
        // window.prompt('Probando')
        // window.confirm('Probando')

        let handler = window.open()
        handler.location.assign('http://google.com')
        window.setTimeout(() =>{
            // handler.close()
        }, 2000)
        console.log(handler)

        let handTime = setTimeout(() => {}, 2000)
        clearTimeout(handTime)

        let handInterval = setInterval(() => {}, 10)
        clearInterval(handInterval)
    }


    function localizar() {
        return new Promise( (resolve, reject) => {
            navigator.geolocation.getCurrentPosition( (position) => {
                resolve(position)
            })
        })
        
    }
}