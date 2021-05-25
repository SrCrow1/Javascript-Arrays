const listaDeUsuarios = [ //array
    {token:777, id:877},
    {token:661, id:87},
    {token:555, id:8777},
    {token:444, id:84277},
    {token:333, id:8767}
]

const token = listaDeUsuarios.find((user) => user.token === 777) //retornar a array que token recebe 777
console.log(token)