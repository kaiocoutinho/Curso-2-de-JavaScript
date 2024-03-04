var container = document.querySelector('#container');

var paragrafo_container = document.createElement('p'); // criar elementos

paragrafo_container.appendChild(document.createTextNode ('Parágrafo do container!'))  //sempre criar os textos com o createTextNode 

container.appendChild(paragrafo_container)  //appendChild == Acrescentar filho acrescentar elementos

