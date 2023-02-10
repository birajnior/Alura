let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

let pacientes = document.querySelectorAll('.paciente')

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
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log('Altura inválida!')
        alturaEhValia = false
        tdImc.innerHTML = 'Altura inválida!'
    }

    if (pesoEhValido && alturaEhValia) {
        let imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(1)
    }
}