'use strict'

// 3 - var = mutável -> global.
// 2 - let = mutável -> bloco.
// 1 - const = imutável -> bloco.

// document.getElementById - serve para identificar o objeto e possibilitar a manipulação.
// prompt -interagir com o usuário. 

function trocarTitulo () {
    const titulo = document.getElementById('titulo')

    let tituloDigitado = prompt('Digite um título:')
    const corEscolhida = prompt('Escolha uma cor')

    if(tituloDigitado == ''){
        tituloDigitado = 'Escola SENAI 1.27'
    }

    titulo.textContent = `Título: ${tituloDigitado}`
    if (corEscolhida == 'verde') {
        titulo.classList.add('verde')
    } else if (corEscolhida == 'azul') {
        titulo.classList.add('azul')
    }

}

const botaoTrocarTitulo = document.getElementById('trocar-titulo')

// addEventListener - sua função é configurar funções a serem chamadas quando um evento específico acontece.
botaoTrocarTitulo.addEventListener('click', trocarTitulo)


function cadastrar() {

    const nome = document.getElementById('nome')
    let nomeDigitado = prompt('Digite seu nome:')
    nome.textContent = "nome: " +  nomeDigitado

    const idade = document.getElementById('idade')
    let idadeDigitado = prompt('Digite sua idade:')
    idade.textContent = "idade: " +  idadeDigitado

    const cidade = document.getElementById('cidade')
    let cidadeDigitado = prompt('Digite sua cidade:')
    cidade.textContent = "cidade: " +  cidadeDigitado
}

const botaoCadastrar = document.getElementById('cadastrar')
botaoCadastrar.addEventListener('click', cadastrar)