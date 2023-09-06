'use strcit'


const mc = [
    {
        nome: "MC Daleste",
        mensagem: "+ amor - recalque!!",
        imagem: "daleste.jpg",
        tempo:"10 minutos"
    },
    {
        nome: "MC kevin",
        mensagem: "A mente é fértil, pra sonhar não tem limite!!",
        imagem: "kevin.jpg",
        tempo:"10 minutos"
    },
    {
        nome: "MC Hariel",
        mensagem: "Vivendo e aprendendo nessa louca vida!!",
        imagem: "hariel.jpg",
        tempo:"10 minutos"
    },
    {
        nome: "MC Don Juan",
        mensagem: "Em busca de um amor tranquilo!!",
        imagem: "donjuan.jpg",
        tempo:"10 minutos"
    },
    {
        nome: "MC Pedrinho",
        mensagem: "Bico sujo pousado tá impressionado no nosso estilo!!",
        imagem: "pedrinho.jpg",
        tempo:"10 minutos"
    }
]

const criarCard = (mc) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${mc.imagem}`
    imagem.alt = mc.name

    const nomeMsg = document.createElement('div')
    nomeMsg.classList.add('nomeMsg')

    const name = document.createElement('h2')
    name.textContent = mc.nome

    const mensagem = document.createElement('p')
    mensagem.classList.add('msg')
    mensagem.textContent = mc.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = mc.tempo

    card.replaceChildren(imagem, nomeMsg, tempo)
    nomeMsg.replaceChildren(name, mensagem)

    return card
}

const mostrarCards = (mc) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(mc)
    cardContainer.appendChild(card)
}

mc.forEach(mostrarCards)
