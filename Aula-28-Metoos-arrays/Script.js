//length  tamanho

var arr = [1,2,3,4,5]

console.log(arr.length);


// push Adiciono elementos ao array

arr.push(6);
arr.push('Qualquer coisa pode ser adiconada')

console.log(arr)

//pop REMOVE A ULTIMA PROPRIEDADE DO ARRAY;

arr.pop();
console.log(arr);

// unshift ADICIONO UM ELEMENTO NO COMEÇO DO ARRAY
arr.unshift(0);
arr.unshift('teste')
console.log(arr);

//shift  REMOVO O PRIMEIRO ELEMENTO DO ARRAY

arr.shift();
console.log(arr)
//palavra teste retirada

//acessar o ultimo elemento do array

console.log(arr[arr.length - 1])  

//isArray
console.log(Array.isArray(5))

console.log(Array.isArray(arr))

