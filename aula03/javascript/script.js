let numeroSecreto = parseInt(Math.random() * 11)
let maxTentativas = 4

const audioErrou = document.querySelector('audio')
const audioAcertou = document.getElementById('acertou')

function chutar() {
    let resultado = document.getElementById('resultado')
    let chute = parseInt(document.getElementById('valor').value)

    if (chute == numeroSecreto) {
        // resultado.innerHTML = 'Você acertou'        
        document.getElementById('resultado').innerHTML = "<img src='img/acertou.jpg' height='400'>"         
        audioAcertou.play()
        setTimeout(() => {
            document.getElementById('resultado').innerHTML = '<img src="">'  
        }, 2000 ) 
    } else if (chute > 10  || chute < 0) {
        resultado.innerHTML = 'Digite um número entre 0 a 10'
    } else {
        document.getElementById('resultado').innerHTML = "<img src='img/errou.png' height='400'>"
        audioErrou.play()
        
        setTimeout(() => {
            document.getElementById('resultado').innerHTML = '<img src="">' 
        }, 1900 )
        
    }


}

console.log(numeroSecreto)