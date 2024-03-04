// tag acessando elemento pela tag dele
var titulo = document.getElementsByTagName('h1')[0]; //como pega todos os h1 da pagina consigo informar qual quero pegar entre as [] como nos arrays

console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis);

// id  buscando o elemento pelo id dele
var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

// class  Buscando os elementos pela class definida no html
var itemDaLista = document.getElementsByClassName('item')

console.log(itemDaLista)