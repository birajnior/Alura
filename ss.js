var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");
  var elementoDica = document.getElementById("dica");
  var elementoTentativas = document.getElementById("tentativas");
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, você acertou!";
    elementoDica.innerHTML = "Reinicie a página para obter um novo número.";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = chute + " - Errou";
    tentativas--;
    elementoDica.innerHTML =
      "Dica: o número secreto é maior que o seu chute, você tem mais " +
      tentativas +
      " tentativas";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = chute + " - Errou";
    elementoDica.innerHTML =
      "Dica: o número secreto é menor que o seu chute, você tem mais " +
      tentativas +
      " tentativas";
  }
  if (tentativas <= 0) {
    elementoResultado.innerHTML = "Você perdeu!";
    elementoDica.innerHTML = "O número secreto era " + numeroSecreto;
  }
}
//Desafio
//Colocar um número de tentativas
//Colocar na mensagem "errou, o número secreto é maior/menor do que vc colocou"
