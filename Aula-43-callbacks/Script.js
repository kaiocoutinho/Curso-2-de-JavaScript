function exibir(qualquerCoisa){
    console.log(`A operação resultou em ${qualquerCoisa}`) // uma forma mais facil e menos repetitiva 
}


function soma(a,b, callback){
    var op = a + b;
    callback(op)
}

function multiplicacao(a, b, cb){
    var op = a * b;
    cb(op)
}
soma(4, 6, exibir);

multiplicacao(2,2, exibir)