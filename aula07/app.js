'use strict'

async function pegarEndereco () {

    const url = 'viacep.com.br/ws/01001-000/json/'

    const response = await fetch(url)
    const endereco = await response.json()

    return endereco.message
}

function criarTag (imagem) {
    const galeria = document.getElementById('galeria')
    const tagImg = document.createElement('img')
    tagImg.src = imagem

    galeria.appendChild(tagImg)
}