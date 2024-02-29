// lenght

var nome = 'Kaio'
console.log(nome.length)
console.log(nome[1])

var obj = 'bola';

console.log(obj.length)

//indexOf --- para saber aonde começa a palavra na frase por exemplo
console.log(nome[2]);

var frase = 'O rato roeu a roupa do rei de roma'

console.log(frase.indexOf('roeu'))

//slice ---- com esse método consigo manipular e retirar essa palavra da frase

var palavraRetirada = frase.slice(7,11);  //indico o indice de começo e o indice de termino da palavra

console.log(palavraRetirada)

// replace -- com esse método consigo substituir uma palvra por exemplo

var novaFrase = frase.replace('roeu', 'rasgou');
console.log(novaFrase);


 