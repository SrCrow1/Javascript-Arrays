const listaDeUsuarios = [ //array
    {id:555},
    {id:444},
    {id:333},
    {id:222},
    {id:111}
];

const novaListaDeUsuarios = listaDeUsuarios.filter((user) => user.id > 333); //retorna o id que recebe um numero maior que 333

console.log(novaListaDeUsuarios);