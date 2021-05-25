const listaDeUsuarios = [ //array
    {id: 500},
    {id: 400},
    {id: 300},
    {id: 200}
];

const resultado1 = listaDeUsuarios.every((user) => user.id < 1000); //Observa se array id for menor que 1000 true se for maior false. OBS: todos os intens tem que ser menor que 1000 pra dar true
console.log(resultado1)