const listaDeUsuarios = [ //array
    {id:000},
    {id:111},
    {id:222}
]

const resultado = listaDeUsuarios.some((user) => user.id < 111); //Observa se UM item da array é menor que 111 se for menor true

console.log(resultado)