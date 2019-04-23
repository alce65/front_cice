let data = 11
console.log(duplicar(data))
console.log(data)

// Los datos primitivos pasan a la función como valores
function duplicar(x) {
    x = x * 2
    return x
}

let user1 = {nombre: 'Pepe', edad: 23}
matricular(user1, 'HTML')
console.log(user1)
let user2 = {nombre: 'Rosa'}
matricular(user2)
console.log(user2)

function matricular(obj, curso = 'JavaScript') {
    obj.curso = curso
}