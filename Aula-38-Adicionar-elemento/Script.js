//Criar elemento
var el = document.createElement('div');

el.classList = 'div-criada';

console.log(el)
var div_container = document.querySelector('#container');


// inserindo elemento filho
div_container.appendChild(el);

//inserBefore 

var el2 = document.createElement('div');
el2.classList = 'div-before';

var el3 = document.querySelector('#container .div-criada')
console.log(el3)

div_container.insertBefore(el2, el3);
