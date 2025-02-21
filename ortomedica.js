// Seleciona a barra de navegação
let navbar = document.querySelector('.navbar');

// Configura o clique no botão do menu hambúrguer
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');          // Alterna a visibilidade do menu
    searchForm.classList.remove('active');      // Fecha o formulário de busca
    cartItem.classList.remove('active');       // Fecha o carrinho
}

// Seleciona o formulário de pesquisa
let searchForm = document.querySelector('.search-form');

// Configura o clique no botão de pesquisa
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');      // Alterna a visibilidade da busca
    navbar.classList.remove('active');          // Fecha o menu
    cartItem.classList.remove('active');        // Fecha o carrinho
}

// Seleciona o container do carrinho
let cartItem = document.querySelector('.cart-items-container');

// Configura o clique no botão do carrinho
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');        // Alterna a visibilidade do carrinho
    navbar.classList.remove('active');          // Fecha o menu
    searchForm.classList.remove('active');      // Fecha a busca
}

// Configura o comportamento durante o scroll da página
window.onscroll = () => {
    navbar.classList.remove('active');          // Fecha o menu ao scrollar
    searchForm.classList.remove('active');      // Fecha a busca ao scrollar
    cartItem.classList.remove('active');        // Fecha o carrinho ao scrollar
}