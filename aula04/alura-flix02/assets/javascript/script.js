function adicionarFilme() {
    let filmes = document.getElementById('filme').value
    if (filmes.endsWith ('.jpg') ) {
        litarFilmesNaTela(filmes)
    } else {
        console.error('Endereço de filme inválido')
    }

    document.getElementById('filme').value = ""
}

function litarFilmesNaTela(filme) {
    console.log(filme)
    let filmesFavoritos = "<img src=" + filme + ">"
    let listaFilmes = document.getElementById('listaFilmes')
    listaFilmes.innerHTML = listaFilmes.innerHTML + filmesFavoritos
}