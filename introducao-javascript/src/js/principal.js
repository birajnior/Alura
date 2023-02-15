let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"
let pacientes = document.querySelectorAll('.paciente')
let botaoAdicionar = document.querySelector('#adicionar-paciente')

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i]

    let tdPeso = paciente.querySelector(".info-peso")
    let peso = tdPeso.textContent

    let tdAltura = paciente.querySelector('.info-altura')
    let altura = tdAltura.textContent

    let tdImc = paciente.querySelector('.info-imc')

    let pesoEhValido = true
    let alturaEhValia = true

    if (peso <= 0 || peso >= 1000) {
        console.log('Peso inválido!')
        pesoEhValido = false
        tdImc.innerHTML = 'Peso inválido!'
        paciente.classList.add('paciente-invalido')
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log('Altura inválida!')
        alturaEhValia = false
        tdImc.innerHTML = 'Altura inválida!'
        paciente.classList.add('paciente-invalido')
    }

    if (pesoEhValido && alturaEhValia) {
        let imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(1)
    }
}

titulo.addEventListener("click", function () {
    console.log('Também podemos chamar uma função anonima.');
})

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault()
    console.log('Oi, eu sou o botão e fui clicado!!!');

    let form = document.querySelector('#form-adiciona')

    let nome = form.nome.value
    let peso = form.peso.value
    let altura = form.altura.value
    let gordura = form.gordura.value

    let pacienteTr = document.createElement('tr')

    let nomeTd = document.createElement('td')
    let pesoTd = document.createElement('td')
    let alturaTd = document.createElement('td')
    let gorduraTd = document.createElement('td')
    let imcTd = document.createElement('td')

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
})