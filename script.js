// seleciiona o botao de curtir
const botaoCurtir = document.getElementById("botao-curtir");

// variavel para controlar se o botao ja foi clicado (inicia como falso)
let curtiu = false;

botaoCurtir.addEventListener("click", function() {
    let texto = botaoCurtir.querySelector("span");

    // se ainda nao curtiu soma +1 e muda a variavel para true
    if (curtiu === false) {
        texto.textContent++;
        curtiu = true;
    } 
    // se ja tinha curtido e clicou de novo subtrai -1 e volta para false
    else {
        texto.textContent--;
        curtiu = false;
    }
});

// Botao de modo escuro
document.getElementById("botao-escuro").addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");
});