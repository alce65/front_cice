import { isLetraDNIValida } from "./dni.js";

export function controller() {
    console.log('Controller cargado')

    let formData = {}
    let form_curso = document.querySelector('#form_curso')
    let aControles = document.querySelectorAll(`[type="text"], 
                                                [type="email"], 
                                                [type="password"], 
                                                [type="date"],
                                                textarea`)
    let aChecks = document.querySelectorAll('[ type="checkbox"]')
    let aRadioSede = document.querySelectorAll('[name="sede"]')
    let aRadioTurno = document.querySelectorAll('[name="turno"]')     
    let aSelects = document.querySelectorAll('select')   
    let dni =  document.querySelector('#dni')

    form_curso.addEventListener('submit', onSubmit)

    aControles.forEach( item => {
        if (item.willValidate) {
            item.addEventListener('input', suspendValidation)
            item.addEventListener('blur', () => {
                validate(aControles[0])
            })
        }
    })

    dni.setCustomValidity('Letra del DNI incorrecta')
    dni.addEventListener('change', () => {
        console.dir(dni)
        if (isLetraDNIValida(dni.value)) {
            dni.setCustomValidity('')
        }        
    } )

    function onSubmit(ev) {
        console.log('Formulario enviado')
        ev.preventDefault()

        // Validacion    
        for (let i = 0; i < aControles.length; i++) {
            const item = aControles[i];
            console.log('VALIDANDO', item.name)
            console.dir(item)
            if(item.validationMessage && !validate(item)) {
                return
            }
        }
                                                
        aControles.forEach(item => formData[item.id] = item.value)                                                
        aChecks.forEach(item => formData[item.id] = item.checked)
        setRadio(aRadioSede, formData)
        setRadio(aRadioTurno, formData)
        aSelects.forEach(
            item => setSelect(item, formData )
        )
        
        setConfirmar(formData)
    }
}



function validate(nodo) {
    let msg = ''
    if (nodo.validity.valueMissing) {
        msg = 'Completa este campo'
    } else if (nodo.validity.tooShort) {
        msg = 'Auumenta la longitud de este campo'
    } else if (nodo.validity.patternMismatch) {
        msg = 'Adapta el campo al formato requerido'
    } else if (nodo.validity.customError) {
        msg = nodo.validationMessage
    }

    if (msg) {
        nodo.focus()
        nodo.classList.add(".invalid")
        nodo.nextElementSibling.innerHTML = msg
        nodo.nextElementSibling.hidden = false
        console.dir(nodo)
        return false
    } else {
        nodo.classList.remove(".invalid")
        nodo.nextElementSibling.hidden = true
        return true
    }
}



function suspendValidation (ev) {
    ev.target.classList.remove(".invalid")
    ev.target.nextElementSibling.hidden = true
}


function setRadio(radio, data) {
    radio.forEach(
        item => {
            if (item.checked) {
                // data[item.name] = item.value
                data[item.name] = {id: item.value, value: item.id}
                return
            }
        }
    )
}

function setSelect(select, data) {
    console.dir(select)
    data[select.name] = {
        id: select[select.selectedIndex].value, 
        value: select[select.selectedIndex].text
    }
    /* {
        clave: select.selectedOptions[0].value, 
        nombre: select.selectedOptions[0].text
    } */
}

function setConfirmar(data) {
    let dialog = document.querySelector('#confirmar')
    // dialog.open = true
    
    let datosOutput = document.querySelector('#datosOutput')
   
    datosOutput.innerHTML = mostrarObjeto(data)
    
    dialog.showModal()

    document.querySelector('#btnConfirmar')
        .addEventListener('click', ()=>{
            dialog.close()
            form_curso.submit()
        })
    
    document.querySelector('#btnNoConfirmar')
        .addEventListener('click', ()=>{
            dialog.close()
        })
   

}

function mostrarObjeto(obj) {
    let cadena = '<ul>'
    for (const key in obj) {
        const element = obj[key]
        if (typeof element != 'object') {
            cadena +=`<li>${key}: ${element}</li>`
        }
        else {  
            cadena += '<li>'+ key
            cadena +=  mostrarObjeto(element) 
            cadena += '</li>'
        }
    }
    cadena += '</ul>'
    console.log(cadena)
    return cadena
}

