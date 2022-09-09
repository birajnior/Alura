// function Converter() {
//     let valorElemento = document.getElementById('valor');
//     let valor = valorElemento.value;
//     let valorEmDolarNumerico = parseFloat(valor);

//     let valorEmReal = valorEmDolarNumerico * 5.22;

//     let elementoValorConvertido = document.getElementById('valorConvertido');
//     let valorConvertido = 'O resultado em real é R$ ' + valorEmReal.toFixed(2);    

//     elementoValorConvertido.innerHTML = valorConvertido; 
// }

const moeda = document.getElementById('moeda');
const inputMoeda = document.getElementById('valor');

const SegMoeda = document.getElementById('seg-moeda');
const inputSegMoeda = document.getElementById('seg-valor');

const swap = document.getElementById('swap');

moeda.addEventListener('change', calcular);
inputMoeda.addEventListener('input', calcular);
segMoeda.addEventListener('change', calcular);
inputSegMoeda.addEventListener('input', calcular);

const taxInfo = document.getElementById('taxInfo');
swap.addEventListener('click', infoSwap);

main ()

function main() {
    let dinheiro = {
        'BRL': 'Real',
        'EUR': 'Euro',
        'USD': 'Dólar',
        'BTC': 'Bitcoin',
    }

    options = [];
    for (let [key, value] of Object.entries(dinheiro)) {
        options.push(`<option value='${key}'>${value}</option>`);
    }

    moeda.innerHTML = options.join('\n');
    SegMoeda.innerHTML = options.join('\n');

    calcular();
}

function infoSwap() {
    let temp = moeda.value;
    moeda.value = SegMoeda.value;
    SegMoeda.value = temp;

    calcular();
}

async function getURL(url) {
    return (await fetch(url)).json();
} 

function getInfoSelect(select) {
    return select.options[select.selectedIndex].text;
}

async function calcular() {
    let primeiro = moeda.value;
    let segundo =  SegMoeda.value; 

    let {rates } = await getURL(`https://api.exchangerate-api.com/v4/latest/${from}`);

    let rate = rates[segundo];
    tax_info.innerText = `1 ${getInfoSelect(label_from_currency)} = ${rate} ${getInfoSelect(label_to_currency)}`
  input_to_ammount.value = (input_from_ammount.value * rate).toFixed(2);

}