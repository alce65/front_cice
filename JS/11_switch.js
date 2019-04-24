// IF sobre valores discretos de una sola variable
// if (x > 5) 
// if (x == 2 && y == 3) 

let cargo // Director, Gerente, Senior, Junior, Becario
cargo = 'Gerente'
cargo = 'Senior'
cargo = 'Junior'
let bonus

switch (cargo.toLowerCase()) {
    case 'director':
    case 'gerente':
        bonus = 10000
        break
    case 'senior':
        bonus = 1000
        break
    default:
        bonus = 0
        break
}

if (cargo.toLowerCase() == 'director' || 
    cargo.toLowerCase() == 'gerente' ) {
    bonus = 10000
} else if (cargo.toLowerCase() == 'senior') {
    bonus = 1000
} else {
    bonus = 0
}

console.log(`Como eres ${cargo}, tu bonus es ${bonus}€`)

// En Java, C#..
// string name = 'Pepe'
// string nameMay = UpperCase(name)

let array = []
array.push()


let name = 'Pepe'
let nameMin = name.toLowerCase()
let nameMay = name.toUpperCase()

console.log(name, nameMin, nameMay)
