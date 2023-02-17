let tabela = document.querySelector('table')
tabela.addEventListener('dblclick', function(event){
    // let alvoEvento = event.target
    // let paiDoAlvo = alvoEvento.parentNode // TR = paciente = remover
    // paiDoAlvo.remove()

    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function() {
        event.target.parentNode.remove()
    },700)    
})

// listaDePacientes.forEach(function(paciente) {
//     paciente.addEventListener('dblclick', function(){
//         console.log('Fui clicado com um duplo clik');
//         this.remove()
       
//     })
// })
