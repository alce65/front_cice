import { GENEROS } from "./datos.js";
import { ajax } from "./ajax.js"

export function controller () {
    console.log('Controller cargado')
    console.log(GENEROS)
    const aGeneros = GENEROS
    const URLBASE = 'https://www.googleapis.com/books/v1/volumes'
    let iGenero
    let iAutor
    let html = ''

    let selectGeneros = document.querySelector('#generos')
    let selectAutores = document.querySelector('#autores')
    let btnPedir = document.querySelector("#btnPedir")
    let inNum = document.querySelector('#num')

    selectGeneros.addEventListener('change', onChangeGenero)
    selectAutores.addEventListener('change', onChangeAutores)

    btnPedir.addEventListener('click', onClickPedir)
    //btnPedir.onclick =  onClickPedir

    aGeneros.forEach ( item => {
        html += `<option value="${item.value}">${item.label}</option>`     
    })

    selectGeneros.innerHTML = html

    function onChangeGenero(ev) {
        iGenero = ev.target.selectedIndex
        let aAutores = []
        html = '<option value=""></option>'
        if (iGenero) {
            aAutores = aGeneros[iGenero].autores
            aAutores.forEach ( item => { 
                html += `<option value="${item.value}">${item.label}</option>`     
            })    
            selectAutores.focus()
        } 
        selectAutores.innerHTML = html
        btnPedir.textContent = 'Pedir titulos'
        btnPedir.disabled = true

    }

    function onChangeAutores (ev) { 
        if (ev.target.selectedIndex) {
            iAutor = ev.target.selectedIndex - 1
            btnPedir.textContent = 'Pedir titulos de ' + aGeneros[iGenero].autores[iAutor].label
            btnPedir.disabled = false
        } else {
            btnPedir.textContent = 'Pedir titulos'
            btnPedir.disabled = true
        }
    }

    function onClickPedir() {
        console.clear()
        console.log('Iniciando peticion')
        let url = URLBASE + `?q=inauthor:${aGeneros[iGenero].autores[iAutor].value}`
        url += `&fields=items(volumeInfo(publisher,title,language))`
        url += `&maxResults=${inNum.value}` 
        ajax(url, 'GET', procesarRespuesta)
    }
}

function procesarRespuesta(response) {
    let aDatos = JSON.parse(response).items
    console.log(aDatos)
    let aDatosFinal = aDatos.map( item => item.volumeInfo )
    console.log(aDatosFinal)
    mostrarRespuesta(aDatosFinal)
}

function mostrarRespuesta(aDatos) {
    let output = document.querySelector('#output')
    let tabla = '<table class="tabla">'
    tabla += '<tr><th>Título</th><th>Editorial</th><th>Idioma</th></tr>'
    aDatos.forEach( (item) => tabla += `
        <tr>
        <td>${item.title}</td>
        <td>${item.publisher?item.publisher:'n/d'}</td>
        <td>${item.language}</td></tr>`)
    tabla += '</table>'
    output.innerHTML = tabla
}