let jb = { nome: "JB", vitorias: 2, empates: 1, derotas: 0, pontos: 0 }
let bernardo = { nome: "Bernardo", vitorias: 1, empates: 2, derotas: 0, pontos: 0 }
let gomes = { nome: "Gomes", vitorias: 1, empates: 1, derotas: 1, pontos: 0 }
let junior = { nome: "Júnior", vitorias: 0, empates: 0, derotas: 3, ponto: 0 }

function calculaPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates

    return pontos
}

// variavel pontos responsavél para calcular os resultados
bernardo.pontos = calculaPontos(bernardo)
jb.pontos = calculaPontos(jb)
gomes.pontos = calculaPontos(gomes)
junior.pontos = calculaPontos (junior)

let jogadores = [jb, bernardo, gomes, junior]

function exibeJogadores(jogadores) {
    let elemento = ""
    for (let i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias +"</td>"
        elemento += "<td>" + jogadores[i].empates +"</td>"
        elemento += "<td>" + jogadores[i].derotas +"</td>"
        elemento += "<td>" + jogadores[i].pontos +"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    let tabelaJogadores = document.getElementById('tabelaJogadores')

    tabelaJogadores.innerHTML = elemento
}

exibeJogadores(jogadores)

function adicionarVitoria(i) {
    let jogador = jogadores[i] 
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadores(jogadores)
}

function adicionarEmpate(i) {
   let jogador = jogadores[i] 
   jogador.empates++
   jogador.pontos = calculaPontos(jogador)
   exibeJogadores(jogadores)
}

function adicionarDerrota(i) {
    let jogador = jogadores[i] 
    jogador.derotas++
    // jogador.pontos = calculaPontos(jogador)
    exibeJogadores(jogadores)
}