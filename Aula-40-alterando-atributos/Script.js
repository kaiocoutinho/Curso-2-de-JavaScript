// adcionando atributos

var titulo = document.querySelector('#title');

titulo.setAttribute("class", "testado-atributo");

var button = document.querySelector('#btn');

button.setAttribute('disabled', 'disabled');

var subtitulo = document.querySelector('.subtitulo')

subtitulo.setAttribute('id', 'subtitle')

//remover atributo

var lista = document.querySelector('#lista');

lista.removeAttribute('id') //removeu o id 

//com o set atribute consigo mudar varias coisas, o endereço do link, o 'src' da imagem e etc..

var link = document.querySelector('a');
link.setAttribute('href','https://www.youtube.com/watch?v=NvaRXr4gdWU&list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6&index=44')