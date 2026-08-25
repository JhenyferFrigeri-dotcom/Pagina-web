 const botao = document.querySelector("button");
        botao.addEventListener("click", botaoClicado);

        function botaoClicado() {
            console.log("Fui clicado");
            let texto = botao.querySelector("span");
            texto.textContent++;
        }
        document.getElementById("botao-escuro").addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");
});