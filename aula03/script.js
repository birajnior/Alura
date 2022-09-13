let numeroSecreto = parseInt(Math.random() * 11)

function chutar() {
    let resultado = document.getElementById('resultado')
    let chute = parseInt(document.getElementById('valor').value)

    if (chute == numeroSecreto) {
        // resultado.innerHTML = 'Você acertou'
        document.getElementById('resultado').innerHTML = "<img src='img/acertou.jpg' height='400'>"
    } else if (chute > 10  || chute < 0) {
        resultado.innerHTML = 'Digite um número entre 0 a 10'
    } else {
        document.getElementById('resultado').innerHTML = "<img src='img/errou.png' height='400'>"
        
    }


}

console.log(numeroSecreto)