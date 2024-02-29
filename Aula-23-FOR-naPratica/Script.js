var lista = ['Laranja', 'Maçã', 'Banana']

var listaUl = document.createElement('ul');

var body = document.getElementsByName('body');

//console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul')

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var textoLi = document.createElement(lista[i]);

    liFor.appendChild(texto.li);

    listaNoBody[0].appendChild(liFor)
}

