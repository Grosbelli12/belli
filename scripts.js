document.addEventListener('DOMContentLoaded', function(){
    const baseImagens = {
        todas: ['imagem.jpg','cidade.jpg','animal.jpg','natureza.jpg'],
        natureza: [],
        cidade: [],
        natureza: [],

    }
    document.body.addEventListener('click', function(event){ //evento clique    '
    if(event.target.classList.contains('botao-categoria'));  //acessa a lista de classe de onde clicou e //procura pela classe botao-categoria
    alert(123);

    })
})