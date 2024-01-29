const botao = document.querySelector(".btn-plataformas");
const elemontosPlataformas = document.querySelector(".btn-plataformas .plataformas");

botao.addEventListener("click", () => {
        elemontosPlataformas.classList.toggle("ativo");
});
