// CAIXA BAIXA E CAIXA ALTA
//toLowerCase e toUpperCase

var frase = 'Esta é a frase que vamos manipular';

var fraseCaixaAlta = frase.toUpperCase();

console.log(frase.toLocaleLowerCase());

console.log(fraseCaixaAlta);

// trim TIRA O ESPAÇAMENTO SE HOUVER

var nome = '        Kaio          '

var nomeTrim = nome.trim();

console.log(nome)

console.log(nomeTrim)


// split  trasforma as variaveis em objetos / arrays

console.log(frase.split(" "))

var tags = 'HTML, CSS, JavaScript, PHP'

console.log (tags.split(", "))

// lastindexOf
// Encontra o ultimo elemento que eu quero se por acaso tiver dois ou mais, exemplo:

var frase = 'Eu moro em Vila Velha em Vila Velha eu moro'

console.log(frase.indexOf('Vila Velha'))
console.log(frase.lastIndexOf('Vila Velha'))

var palavra = frase.slice(11,21)
console.log(palavra)

var fraseNova = frase.replace('Vila Velha', 'Ataíde')
 console.log(fraseNova)