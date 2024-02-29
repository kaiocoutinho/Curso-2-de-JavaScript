let pessoa = {
    nome:'Kaio',
    idade:18,
    dizer: function(){
        console.log('Olá mundo')
    },
    soma: function( a, b){
        soma = a + b
        return soma;
    }

};

console.log(pessoa.nome)
pessoa.dizer()
var soma = pessoa.soma(4,5);

console.log(soma)