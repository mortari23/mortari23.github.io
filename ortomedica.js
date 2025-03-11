// Seleciona a barra de navegação
let navbar = document.querySelector(".navbar");

// Configura o clique no botão do menu hambúrguer
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active"); // Alterna a visibilidade do menu
  searchForm.classList.remove("active"); // Fecha o formulário de busca
};

// Seleciona o formulário de pesquisa
let searchForm = document.querySelector(".search-form");

// Configura o clique no botão de pesquisa
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active"); // Alterna a visibilidade da busca
  navbar.classList.remove("active"); // Fecha o menu
};

// Configura o comportamento durante o scroll da página
window.onscroll = () => {
  navbar.classList.remove("active"); // Fecha o menu ao scrollar
  searchForm.classList.remove("active"); // Fecha a busca ao scrollar
};

// Adicione no final do seu arquivo JS
function toggleProducts() {
  const boxContainer = document.querySelector(".products .box-container");
  const toggleBtn = document.querySelector(".toggle-btn");
  const allBoxes = document.querySelectorAll(".products .box");
  const initialItems = 6; // Número de itens visíveis inicialmente

  // Verifica se está mostrando todos
  const isCollapsed = boxContainer.classList.contains("collapsed");

  if (isCollapsed) {
    // Mostrar todos
    boxContainer.classList.remove("collapsed");
    toggleBtn.textContent = "Ver menos";
    allBoxes.forEach((box) => box.classList.remove("hidden"));
  } else {
    // Recolher para estado inicial
    boxContainer.classList.add("collapsed");
    toggleBtn.textContent = "Ver mais";
    allBoxes.forEach((box, index) => {
      if (index >= initialItems) box.classList.add("hidden");
    });
  }
}

// Inicialização automática
document.addEventListener("DOMContentLoaded", () => {
  const allBoxes = document.querySelectorAll(".products .box");
  const initialItems = 6;

  allBoxes.forEach((box, index) => {
    if (index >= initialItems) {
      box.classList.add("hidden");
    }
  });
});

///////////////////
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(
    ".filter-buttons .btn[data-filter]"
  );
  const products = document.querySelectorAll(".products .box");

  function filterProducts(filter) {
    products.forEach((product) => {
      const category = product.dataset.category || "todos"; // Fallback seguro

      if (filter === "todos" || category === filter) {
        product.style.display = "block"; // Mostrar o produto
        product.classList.remove("hidden");
      } else {
        product.style.display = "none"; // Ocultar o produto
        product.classList.add("hidden");
      }
    });
  }

  // Inicialização correta do estado ativo
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remover a classe 'active' de todos os botões
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Adicionar a classe 'active' ao botão clicado
      button.classList.add("active");

      // Filtrar os produtos com base no valor de data-filter
      filterProducts(button.dataset.filter);

      // Resetar o botão "Ver mais"
      const toggleBtn = document.querySelector(".toggle-btn");
      toggleBtn.textContent = "Ver mais";
      document
        .querySelector(".products .box-container")
        .classList.remove("collapsed");
    });

    // Ativar "Todos" por padrão
    if (button.dataset.filter === "todos") {
      button.classList.add("active");
      filterProducts("todos");
    }
  });
});
