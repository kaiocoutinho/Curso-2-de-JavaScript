var obj = {
    nome: 'Kaio',
    idade: 18,
    profissao: 'Programador',

}
console.log(obj.nome)
console.log(obj.profissao)

console.log(`O meu nome é ${obj.nome} tenho ${obj.idade} anos e minha profissão é ${obj.profissao}`)

obj.nome = 'Lucas'

console.log(obj);

obj.graduacao = true;

console.log(obj)