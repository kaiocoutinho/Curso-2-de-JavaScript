//splice  colocar elementos no meio dos arrays
var arr = [1,2,3,4,5];

arr.splice(2, 0, 999) // primeiro parametro é a posiçao que eu desejo colocar o elemento, o segundo é quantos elementos eu quero que sejam deletados, e o ultimo é o elemento que eu quero adicionar

console.log(arr);
//deletando elementos com o splice
arr.splice(4, 1)

console.log(arr)

//indexOf   posiçao do elemento
console.log(arr.indexOf(5))

// join  transforma o array em string

var arr2 = ['O','rato', 'roeu','a','roupa'];
 console.log(arr2.join(" ")); // separador de cada palavra


 //reverse  inverte a posiçao dos elementos do array

 console.log(arr2.reverse())