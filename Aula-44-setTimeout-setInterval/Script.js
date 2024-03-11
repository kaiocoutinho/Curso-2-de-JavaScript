// sitTimeout
console.log('Antes do setTimeout')
setTimeout(function(){
    console.log('testando o setTimeout')

}, 1000); // o valor é relativo a 1 milisegundo entao 1000 equivale a 1 segundo

console.log('ola')

setInterval(function(){
    console.log('Tetsnado o setInterval')
},1000);  //como se fosse um loop, realiza esse bloco repetidamente em referencia ao valor que eu colocar.

