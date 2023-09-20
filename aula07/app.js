'use strict'

const cepInput = document.getElementById('cep')

async function pegarCep (cep) {

    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const cepInfo = await response.json()
    return cepInfos
}

async function preencherCampos () {
    const endereco = document.getElementById('endereco')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')

    const cep = await pegarCep(cepInput.value)
    
    endereco.value = cep.logradouro
    bairro.value = cep.bairro
    cidade.value = cep.localidade
    estado.value = cep.uf

}


cepInput.addEventListener('focusout', preencherCampos)
