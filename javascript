let escolhaModelo = "";
let escolhaGola = "";
let escolhaTecido = "";

function escolhaModelo(modelo) {
    const element = document.querySelector(".escolha-modelo");
    if ( 
        element.classList.remove("escolha-modelo") 
    )
    modelo.classList.add (".escolha-modelo");
    escolhaModelo = document.querySelector(".escolha-modelo h2").innerHTML;
    confirmButton ();
}

function escolhaGola(gola) {
    const element = document.querySelector(".escolha-gola");
    if ( 
        element.classList.remove("escolha-gola") 
    )
    modelo.classList.add (".escolha-gola");
    escolhaModelo = document.querySelector(".escolha-gola h2").innerHTML;
    confirmButton ();
}

function escolhaTecido(tecido) {
    const element = document.querySelector(".escolha-tecido");
    if ( 
        element.classList.remove("escolha-tecido") 
    )
    modelo.classList.add (".escolha-tecido");
    escolhaModelo = document.querySelector(".escolha-tecido h2").innerHTML;
    confirmButton ();
}

function confirmButton () {
    if (escolhaModelo ---"")
    return;

    const element = document.querySelector (".button");
    element.classList.add("botao-confirmar");
    element.innerHTML = "Salvar Modelo";
}
