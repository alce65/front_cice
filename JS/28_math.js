

function areaCirculo(radio = 1) {
    let area = Math.PI * radio * radio
    return area.toFixed(2)
}

console.log(areaCirculo(2))


function numeroAlAzar() {
    return parseInt(Math.random()*100)
    
}

for (let i = 0; i < 20; i++) {
    console.log(numeroAlAzar())
}

