
let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(largura,altura)
}
ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
  tempo -= 1
  if(tempo < 0){
      clearInterval(cronometro)
      clearInterval(criaMosca)
      window.location.href = 'vitoria.html'
  }else{
  document.getElementById('cronometro').innerHTML = tempo
}
}, 1000)

function posicaoRandomica (){

//remover mosquito anterior (caso exista)

if(document.getElementById('mosca')){
  document.getElementById('mosca').remove()

      //console.log('elemento selecionado foi: v' + vidas)
      if(vidas > 3){
          window.location.href = 'fim_do_jogo.html'
      }else{
      document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
      vidas++
      }
}


let posicaox = Math.floor(Math.random() * largura) - 90
let posicaoy = Math.floor(Math.random() * altura) -90

posicaox = posicaox < 0 ? 0 : posicaox
posicaoy = posicaoy < 0 ? 0 : posicaoy

console.log(posicaox,posicaoy)

//criar o elemento html
let mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = tamanhoAleatorio()+ ' ' + ladoAleatorio()
mosca.style.left = posicaox +'px'
mosca.style.top = posicaoy +'px'
mosca.style.position ='absolute'
mosca.id = 'mosca'
mosca.onclick = function(){
    this.remove()
}

document.body.appendChild(mosca)

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

function ladoAleatorio (){
  let classe = Math.floor(Math.random() * 2)
  console.log(classe)

  switch(classe){
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
      
  }

}