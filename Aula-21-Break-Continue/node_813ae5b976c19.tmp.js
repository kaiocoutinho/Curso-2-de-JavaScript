for(var i = 10; i > 0; i--){
    console.log(i)
    if(i === 5){
        break
    }
}
console.log('Deu break');

var x = 10;
while(x < 100){
    
    if(x === 60){
        console.log('Continue')
        continue
    }
    console.log('Testando continue' + x)
}