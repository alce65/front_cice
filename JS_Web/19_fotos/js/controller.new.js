export function controller() {

    const URL = 'https://jsonplaceholder.typicode.com/photos'
    const URL_ALBUM1 = URL+'?albumId=1'
    const aFotos = []
    let sectionFigures = document.querySelector('#figures')

    /* fetch(URL).then(x)
    
    function x(response) {
        return response.json()
    } */

    fetch(URL_ALBUM1)
    .then( response => response.json())
    .then( getFotos )

    // Elementos del DOM y Manejadores de eventos
    const btnAdd = document.querySelector('#put')
    btnAdd.addEventListener('click', onAdd)

    let aBtnModificar 
    let aBtnBorrar 

    const addFotoDlg = document.querySelector('#addFotoDlg')
    const modifyFotoDlg = document.querySelector('#modifyFotoDlg')


    /*  "albumId": 1,
    */   
    function getFotos(response) {
        console.log(response)
        let html = ''
        response.forEach( item => {
                html += `
                    <figure>
                        <a href="${item.url}">
                        <figcaption>${item.title}</figcaption>
                        <img src="${item.thumbnailUrl}" alt="">
                        </a>
                        <button class="post" id="post_${item.id}" data-id-db="${item.id}">Modificar</button>
                        <button class="delete" id="delete_${item.id}" data-id-db="${item.id}">Borrar</button>
                    </figure>
                `
            });

        sectionFigures.innerHTML = html
        aBtnModificar = document.querySelectorAll('.post')
        aBtnBorrar= document.querySelectorAll('.delete')
        aBtnModificar.forEach( item => item.addEventListener('click', onModify))
        aBtnBorrar.forEach( item => item.addEventListener('click', onDelete))
    }


    function onAdd () {

        const btnAddFoto = document.querySelector('#btnAddFoto')
        const btnCancelAddFoto = document.querySelector('#btnCancelAddFoto')
        btnAddFoto.addEventListener('click', onClickDlgAdd)
        btnCancelAddFoto.addEventListener('click', onClickDlgAdd)
        
        addFotoDlg.showModal()

        function onClickDlgAdd(ev) {

            let id = ev.target.id // btnAddFoto o btnCancelAddFoto
            if (id == 'btnAddFoto') {
                // añadir
                let datos = {}
                datos.albumId = document.querySelector('#albumId').value
                datos.title = document.querySelector('#title').value
                datos.thumbnailUrl = document.querySelector('#thumbnailUrl').value
                datos.url = document.querySelector('#url').value

                let myHeaders = new Headers({
                    "Content-Type": "application/json"
                });
                

                fetch(URL, {method: 'POST', body: JSON.stringify(datos), headers: myHeaders})
                .then (response => response.json())
                .then (data =>  console.log(data))

            }
            addFotoDlg.close()
            btnAddFoto.removeEventListener('click', onClickDlgAdd)
            btnCancelAddFoto.removeEventListener('click', onClickDlgAdd)            
        }
    }



    function onModify(ev) {
        const idDB = ev.target.dataset.idDb
        console.log('Modificando', idDB)
        const btnModifyFoto = document.querySelector('#btnModifyFoto')
        const btnCancelModifyFoto = document.querySelector('#btnCancelModifyFoto')
        btnModifyFoto.addEventListener('click', onClickDlgModify)
        btnCancelModifyFoto.addEventListener('click', onClickDlgModify)

        modifyFotoDlg.showModal()

        function  onClickDlgModify(ev) {
            let id = ev.target.id
            if (id == 'btnModifyFoto') {
                let datos = {}
                datos.title = document.querySelector('#modi_title').value

                let myHeaders = new Headers({
                    "Content-Type": "application/json"
                });
                let url = URL + `/${idDB}`
                console.log(url)
                fetch(url, {method: 'PATCH', body: JSON.stringify(datos), headers: myHeaders})
                .then (response => response.json())
                .then (data =>  console.log(data))
            }
            modifyFotoDlg.close()
            btnModifyFoto.removeEventListener('click', onClickDlgModify)
            btnCancelModifyFoto.removeEventListener('click', onClickDlgModify)
        }        
    }

    function onDelete(ev) {
        console.log('Borrando', ev.target.dataset.idDb)
        let url = URL + `/${ev.target.dataset.idDb}`
        console.log(url)
        fetch('url', {method: 'DELETE'})
        .then (response => response.json())
        .then (data =>  console.log(data))
        .catch (error => console.error(error))
    }
}