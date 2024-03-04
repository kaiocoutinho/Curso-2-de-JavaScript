var teste = 5;

console.log(this.teste)

let pessoa = {
    nome:'Kaio',
    idade:18,
    dizer: function(){
        console.log('Olá mundo')
    },
    dizerNome: function(){
        console.log('O meu nome é '+ this.nome)
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr '+ this.nome;
    }
    
};

console.log(pessoa.dizerNome())
console.log(pessoa.idade);
pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa.idade)

var saudacao = pessoa.saudacao();

console.log('Olá '+saudacao+' seja bem vindo')

console.log(pessoa.saudacao())