document.addEventListener('DOMContentLoaded',function() {

//alert(123);

//tipos de dados */
//String: Sequencia de caracter */
//Number: nú,meros inteiros ou pontos flutuantes (10.4) */
//Boolean:Retorna dois valores, true ou false */
//object:estrutura de dados que pode armazenar multiplos valores
//NULL:quando está vazio;
//array:objeto especial ordenado 
//function: blopco de código reutilizável;
  
 const teste = 50; //const é usado para declarar uma variável cujo o valor é permanente 

 //let é usado para declarar  variáveis que os valores podem ser retribuidos//

 let C = 0 

 console. log(C)

 const notaMedia = 3;

 if(notaMedia >= 6){
  //alert("Aluno passou");
 }
 else if (notaMedia >= 4 && notaMedia < 6) {
  //alert("aluno quase passou")
 }
 else {
  //alert("aluno reprovou")
 }
 //------Operadores------//
 // = sinal de atribuição, recebe
 // == sinal de comparação
 // === verifica se os dois são iguai e têm o mesmo tipo de dados
 // != se é diferente
 // !== se é estritamente diferente 
 // > maior
    // < menor   
    
    const num = 6;
    if(num == 6){
      //alert("é igual");
    }
    else {
      //alert("não é igual");
    }
    const professor = "João"
if (professor == "Lucas") {
  console.log('Sim é Lucas')
}else {
  console.log('Não é Lucas')
}
// --------- / --------
// Funções são blocos blocos de código que podem ser chamados e reutilizados//

//}
//primeiraoFuncao();
 
// dentro dos parenteses da função vai osparâmetros/propriedades essenciais
function primeiraFuncao(parametro, segundoParametro) {
return parametro + segundoParametro;
} 
const parametro = " essa é uma função com parâmetro";
const segundoParametro = "agora com dois parametros"; 

  console.log(primeiraFuncao(parametro, segundoParametro));

  //--------- / ----------
  //arrays em javascript são estruturas de dados que permitem 
  //armazenar uma coleção ordenada de elementos( strings, números, objetos.arrays)

  let primeiroarray = [ 'Lucas','João', 'Paulo', 'Marcos'];
  console.log(primeiroarray[2]); //número 2  vai puxar o que estiver na var conforme o número

  //------ / ---------

  //Os objetos são coleções NÃO ORDENADAS de pares de chave-valor,
  //onde cada valor é associado á uma chave única 
  let pessoa = {
    nome: 'Maria',
    idade: '22' ,
    profissao:'Programadora'
  }
  console.log(pessoa['profissao']); // [] é oq vai puxar um determinado item que voce desejar 
   //------ / ---------
   const numeros = ["A", "B", "C", "D"]

   numeros.forEach(nume => {
    console.log(nume)
   })
});