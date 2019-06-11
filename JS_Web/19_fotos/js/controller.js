import { ajax } from "./ajax.js";

export function controller() {
    const URL = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
    const URL_USERS = "https://randomuser.me/api/?results=10"
    const aFotos = []
    let sectionFigures = document.querySelector('#figures')
    ajax(URL, 'GET', getFotos )

    // Elementos del DOM
    const btnAdd = document.querySelector('#put')
    let aBtnModificar 
    let aBtnBorrar 

    // Manejadores de eventos
    btnAdd.addEventListener('click', onAdd)
    

    /*  "albumId": 1,
    */   
    function getFotos(response) {
        console.log(response)
        let html = ''
        JSON.parse(response)     
            .forEach( item => {
                html += `
                    <figure>
                        <a href="${item.url}">
                        <figcaption>${item.title}</figcaption>
                        <img src="${item.thumbnailUrl}" alt="">
                        </a>
                        <button class="post" id="post_${item.id}">Modificar</button>
                        <button class="delete" id="delete_${item.id}">Borrar</button>
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
        console.log('Añadiendo')
    }

    function onModify(ev) {
        console.log('Modificando', ev.target.id)
    }

    function onDelete(ev) {
        console.log('Borrando', ev.target.id)
    }
}