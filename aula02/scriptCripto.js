function converter() {
    let valorElemento = document.getElementById('real');
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);

    let valorEmReal = valorEmDolarNumerico * 111.756;

    let elementoConvertido = document.getElementById('valorConvertido');
    let valorFinal = 'Você irá gastar:  ' + valorEmReal + ' Reais.';

    elementoConvertido.innerHTML = valorFinal;
}