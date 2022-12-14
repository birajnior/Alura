let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalc = document.querySelector('#btn-calc')
let btnLimpar = document.querySelector('#btn-limpar')

let cxNota1 = document.querySelector('#n1')
let cxNota2 = document.querySelector('#n2')
let cxNota3 = document.querySelector('#n3')
let cxNota4 = document.querySelector('#n4')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

function calcularMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4
}

function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''

    if (mediaFinal >=7) {
        situacaoFinal = 'Aprovado(a)'
    } else {
        situacaoFinal = 'Reporavado(a)'
    }
    return situacaoFinal
}

function formatarSituacao(situacaoFinal) {
    console.log('Situação Final' + situacaoFinal)
    switch(situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
            break

        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
            break

        default:
            console.log('Situação Indefinida')
    }
}

function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    let num3 = cxNota3.value
    let num4 = cxNota4.value
    
    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10 || num4 < 0 || num4 > 10) {
        formulario.rest()
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000);
    }
}

btnCalc.addEventListener('click', function(e) {
    console.log('Calcular Média')

    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let nota3 = parseFloat(cxNota3.value)
    let nota4 = parseFloat(cxNota4.value)
    let media = calcularMedia(nota1, nota2, nota3, nota4)

    

    if (isNaN(media) || media < 0) {
        console.log('Não é um número')
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = sitauacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

btnLimpar.addEventListener('click', function() {
    cxNota1.value = ''
    cxNota2.value = ''
    cxNota3.value = ''
    cxNota4.value = ''
    cxMedia.value = ''
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
})