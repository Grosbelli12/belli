document.addEventListener('DOMContentLoaded', function(){

    const baseImagens = {
        todas: ['cidade.png','animal.png','natureza.png'],
        natureza: ['natureza.png'],
        cidade: ['cidade.png'],
        animal: ['animal.png'],
    }
    function carregaImagens(categoria){
        //Selecionar elementos HTML com base em um seletor
        const galeria = document.querySelector("#galeria-imagens");

        const imagens = baseImagens['todas']
        
        imagens.forEach(img => { 
            console.log(img);
            galeria.innerHTML = '<div> <img src="imagens/' + img + '"/> </div>';
        })
    }
    carregaImagens('todas');
    document.body.addEventListener('click', function(event){ //evento clique    '
    if(event.target.classList.contains('botao-categoria')) {
        alert(123);
    };  //acessa a lista de classe de onde clicou e //procura pela classe botao-categoria

    })
})