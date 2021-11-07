// VARIAVEL
// const PRODUTO = {
//     nome: 'Tenis Nike',
//     valor: 1000,
//     emEstoque: false

// }

// //Funcoes - Realiza alguma acao

// function darOi() {
//     alert('Oi!')

// }

// darOi()

// //Condicionais - Realizam acoes conforme uma condicao

// if(1 === 1) {
    
// }

// BUSCAR OS ITENS DA TELA
const itensPerguntasERespostas = document.querySelectorAll('.item');

// ENTEDER QUE O ITEM FOI CLICADO
itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click', function() {

    // VERIFICAR SE A PERGUNTA CLICADA ESTA ATIVA
        const estaAtiva = item.classList.contains('ativo')
        // SE A PERGUNTA NAO ESTA ATIVA
         // preciso fechar FECHAR TODAS 
        itensPerguntasERespostas.forEach(function(item) {
             item.classList.remove('ativo')
         }) 
         // ABRIR A RESPOSTA ATUAL, MAS FECHAR  AS OUTRAS
         if(!estaAtiva) {
            item.classList.add('ativo')
        } else {
            item.classList.remove('ativo')
        }
    })
})


        