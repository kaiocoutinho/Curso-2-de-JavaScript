var itemClasses = document.getElementsByClassName('item');

console.log(itemClasses);

var itensQuery = document.querySelectorAll('#lista-2 li') //Chamo os itens como no css usando # para id e '.' para as class

console.log(itensQuery)

var itensQuery2 = document.querySelectorAll('#lista .item'); //Outro exemplo

console.log(itensQuery2);

// querySelector  // Encontra apenas um elemento e sempre o primeiro
var lista = document.querySelector('#lista .item');

console.log(lista);

var span = document.querySelector('#paragrafo span');

console.log(span);
