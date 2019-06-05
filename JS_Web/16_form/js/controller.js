export function controller() {
    console.log('Controller cargado')

    let formData = {}
    
    let form_curso = document.querySelector('#form_curso')

    form_curso.addEventListener('submit', onSubmit)

    function onSubmit(ev) {
        console.log('Formulario enviado')
        ev.preventDefault()

        let aControles = document.querySelectorAll(`[type="text"], 
                                                        [type="email"], 
                                                        [type="password"], 
                                                        textarea`)

        aControles.forEach(item => formData[item.id] = item.value)                                        
        
        let aChecks = document.querySelectorAll('[ type="checkbox"]')

        aChecks.forEach(item => formData[item.id] = item.checked)

        let aRadioSede = document.querySelectorAll('[name="sede"]')
        setRadio(aRadioSede, formData)

        let aRadioTurno = document.querySelectorAll('[name="turno"]')
        setRadio(aRadioTurno, formData)

        let aSelects = document.querySelectorAll('select')

        aSelects.forEach(
            item => setSelect(item, formData )
        )
        
        setConfirmar(formData)
    }
}


function setRadio(radio, data) {
    radio.forEach(
        item => {
            if (item.checked) {
                // data[item.name] = item.value
                data[item.name] = {id: item.id, value: item.value}
                return
            }
        }
    )
}

function setSelect(select, data) {
    console.dir(select)
    data[select.name] = {
        clave: select[select.selectedIndex].value, 
        nombre: select[select.selectedIndex].text
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

