

// Seleciona a barra de navegação
let navbar = document.querySelector(".navbar");






// Configura o comportamento durante o scroll da página
window.onscroll = () => {
  navbar.classList.remove("active"); // Fecha o menu ao scrollar
  searchForm.classList.remove("active"); // Fecha a busca ao scrollar
};



document.addEventListener("DOMContentLoaded", function() {
  // 1. Primeiro definimos todas as variáveis
  const toggleBtn = document.querySelector(".toggle-btn");
  const allBoxes = document.querySelectorAll(".box-container .box");
  const itemsPerLoad = 6; // Definindo a variável que estava faltando
  let visibleItems = itemsPerLoad;

  // 2. Função para atualizar a visibilidade
  function updateVisibility() {
    allBoxes.forEach((box, index) => {
      if (index < visibleItems) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });

    // 3. Atualiza o texto do botão
    toggleBtn.textContent = visibleItems >= allBoxes.length ? "Ver menos" : "Ver mais";
  }

  // 4. Evento de clique no botão
  toggleBtn.addEventListener("click", function() {
    if (visibleItems >= allBoxes.length) {
      visibleItems = itemsPerLoad; // Volta para 6 itens
    } else {
      visibleItems += itemsPerLoad; // Mostra mais 6 itens
      // Garante que não ultrapasse o total
      if (visibleItems > allBoxes.length) {
        visibleItems = allBoxes.length;
      }
    }
    updateVisibility();
  });

  // 5. Inicializa
  updateVisibility();
});




