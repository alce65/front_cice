let data = 11
console.log(duplicar(data))
console.log(data)

// Los datos primitivos pasan a la función como valores
function duplicar(x) {
    x = x * 2
    return x
}


let user = {nombre: 'Pepe', edad: 23}
matricular(user)
console.log(user)

function matricular(obj) {
    obj.curso = 'JavaScript'
}