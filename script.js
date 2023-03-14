const botoesCarrosel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        ativarEDesativarBotao(botao)
        
        ativarEDesativarImagens(indice)
    })
})

function ativarEDesativarImagens(indice) {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')

    imagens[indice].classList.add('ativa')
}

function ativarEDesativarBotao(botao) {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
    botao.classList.add('selecionado')
}
