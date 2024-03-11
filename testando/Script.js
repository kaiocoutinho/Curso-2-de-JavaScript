function adicionar() {
    var input = document.querySelector('#itemLista');
    var input2 = String(input.value)
    var pai = document.querySelector('#container_lista')
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `${input2}`
    pai.appendChild(li);
}       