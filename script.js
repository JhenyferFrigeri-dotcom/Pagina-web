// seleciiona o botão de curtir
const botaoCurtir = document.getElementById("botao-curtir");

botaoCurtir.addEventListener("click", function() {
    let texto = botaoCurtir.querySelector("span");
    texto.textContent++;
});

//botão de modo escuro
document.getElementById("botao-escuro").addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");
});