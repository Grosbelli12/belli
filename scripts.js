document.addEventListener('DOMContentLoaded', function(){
    const baseImagens = {
        todas: ['imagem.png','cidade.png','animal.png','natureza.png'],
        natureza: ['natureza.png'],
        cidade: ['cidade.png'],
        animal: ['animal.png'],
    }
    function carregaImagens(){
        //Selecionar elementos HTML com base em um seletor
        const galeria = document.querySelector("#galeria-imagens");

        const imagens = baseImagens['todas'];
        
        imagens.forEach(img => { 
            console.log(img);
            galeria.innerHTML = '<div> <img src="imagens/ ' + img + '"/> </div>';
        })
    }
    carregaImagens();
    document.body.addEventListener('click', function(event){ //evento clique    '
    if(event.target.classList.contains('botao-categoria'));  //acessa a lista de classe de onde clicou e //procura pela classe botao-categoria

    })
})
/*  document.addEventListener('DOMContentLoaded', function(){
    const baseImagens = {
        todas: ['imagem.png','cidade.png','animal.png','natureza.png'],
        natureza: ['natureza.png'],
        cidade: ['cidade.png'],
        animais: ['animal.png'], // Corrigido de 'animais.png' para 'animal.png'
    };

    function carregaImagens(){
        const galeria = document.querySelector("#galeria-imagens");
        const imagens = baseImagens['todas'];
        
        imagens.forEach(img => { 
            const div = document.createElement('div');
            const imagem = document.createElement('img');
            
            imagem.src = 'imagens/' + img;
            div.appendChild(imagem);
            galeria.appendChild(div);
        });
    }
    
    carregaImagens(); // Chamada da função corrigida aqui, fora do loop
});

document.body.addEventListener('click', function(event){
    if(event.target.classList.contains('botao-categoria')) {
        // Lógica a ser executada quando o elemento clicado possui a classe 'botao-categoria'
    }
});*/
