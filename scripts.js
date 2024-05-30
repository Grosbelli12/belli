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
    galeria.innerHTML=''; //limpar bloco, apaga tudo dentro dele
    
        const imagens = baseImagens[categoria]
        
        imagens.forEach(img => { 
            console.log(img);
            galeria.innerHTML += '<div class="imagem-item"> <img src="imagens/' + img + '"/> </div>';
        })
    }
    function ordenaImagens(ordem){
    const imagens = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item"));
    imagens.sort((a, b) => {
console.log(a);
    })
    }
    carregaImagens('todas');
    document.body.addEventListener('click', function(event){ //evento clique    '
        if(event.target.classList.contains('botao-categoria')) {//acessa a lista de classe de onde clicou e //procura pela classe botao-categoria
            
            const categoria = event.target.dataset.categoria;
            
            //alert(categoria);
            carregaImagens(categoria);
        }; 
        if(event.target.classList.contains('botao-ordenar')) {
            const ordem = event.target.dataset.ordem;
            ordenaImagens(ordem);
            
        }

    });
});