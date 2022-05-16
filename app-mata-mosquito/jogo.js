
let altura = 0
let largura = 0

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(largura,altura)
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica (){

let posicaox = Math.floor(Math.random() * largura) - 90
let posicaoy = Math.floor(Math.random() * altura) -90

posicaox = posicaox < 0 ? 0 : posicaox
posicaoy = posicaoy < 0 ? 0 : posicaoy

console.log(posicaox,posicaoy)

//criar o elemento html
let mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = tamanhoAleatorio()
mosca.style.left = posicaox +'px'
mosca.style.top = posicaoy +'px'
mosca.style.position ='absolute'

document.body.appendChild(mosca)
console.log(tamanhoAleatorio())
}

function tamanhoAleatorio (){
  let classe = Math.floor(Math.random() * 3)
  console.log(classe)

  switch(classe){
    case 0:
      return 'mosca1'
    case 1:
      return 'mosca2'
    case 2:
      return 'mosca3'  
  }
}