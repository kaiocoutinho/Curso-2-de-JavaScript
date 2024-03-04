function adicionar() {
    var lista = [];
    var itensLista = document.querySelector('#produtos');
    lista.pop(itensLista);
    if (itensLista == '') {
        alert('Informe os valores corretos.')
    } else {
        var criarLista = document.querySelector('#lista');
        var novaLista = document.createElement('li');
        novaLista.appendChild(document.createTextNode(lista));
        criarLista.appendChild(novaLista)
     
        
        
    }




}