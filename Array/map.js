const listuser = [ //array
    {id:40},
    {id:50}
];

const newlist = listuser.map((user) => { //pega id da array e cria uma nova array com os itens antigos + 3
    user.id += 3; 
    return user;
});

console.log(newlist);