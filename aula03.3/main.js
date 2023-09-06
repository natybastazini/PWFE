'use strict'
const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('gerarMedia')
const botaoClassificar = document.getElementById('classificar')

function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2
    resultado.textContent = total
}

function identificar () {
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    let msg
    if (numero > 0) {
        msg = 'positivo'
    } else if (numero < 0){
        msg = 'negativo' 
    } else{
        msg = 'zero'
    }

    resultado.textContent = msg
}

function gerarMedia () {
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    const n3 = Number(document.getElementById('n3').value)
    const n4 = Number(document.getElementById('n4').value)
    const resultado = document.getElementById('resultado-item3')
    const media = (n1 + n2 + n3 + n4) / 4
    let exibir

    if(media <= 5){
        exibir = ('reprovado!! ' + media)
    }else if (media >= 5){
        exibir = ('aprovado!! ' + media)
    }

    resultado.textContent = exibir
}

function classificar () {
    const numero = Number(document.getElementById('numero-item4').value)
    const resultado = document.getElementById('resultado-item4')
    let revelar

    if(numero % 2 === 0 ){
        revelar = ('Par!!')
    }else{
        revelar = ('Ímpar!!')
    }

    resultado.textContent = revelar
}




botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', gerarMedia)
botaoClassificar.addEventListener('click', classificar)