// criar elemtento
var el = document.createElement('h3');
el.classList = 'testando-classe';

var texto = document.createTextNode('Este é o meu texto');

el.appendChild(texto);

// selecionar o elemento que eu quero trocar:

var tituloSubs = document.querySelector('#title');


// selecionar o pai desse elemento
// parentNode == uma propriedade que ja busca o pai do elemento

var pai = tituloSubs.parentNode;

// trocar os elementos
pai.replaceChild(el,tituloSubs)

