let btnAdicionar = document.querySelector('#buscar-paciente')

btnAdicionar.addEventListener('click', function () {
    console.log('buscando pacientes...');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json')

    xhr.addEventListener('load', function () {
        let erroAjax = document.querySelector('#erro-ajax')
        if (xhr.status == 200) {
            erroAjax.classList.add('invisivel')
            let resposta = xhr.responseText;

            let pacientes = JSON.parse(resposta)

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove('invisivel')
        }

    })

    xhr.send()
})