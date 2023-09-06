'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')

function trocarCor () {
    forma1.classList.toggle('amarelo')
}

function trocarForma () {
    forma2.classList.toggle('circulo')
}

function trocarFigura () {
    forma3.classList.toggle('triangulo')
}

function girar () {
    forma4.classList.toggle('girar')
}

function trocarImagem () {
    forma5.classList.toggle('imagem')
}

function aumentar () {
    forma6.classList.toggle('aumentar')
}

function desaparecer () {
    forma7.classList.toggle('desaparecer')
}

forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', trocarFigura)
forma4.addEventListener('click', girar)
forma5.addEventListener('click', trocarImagem)
forma6.addEventListener('click', aumentar)
forma7.addEventListener('click', desaparecer)