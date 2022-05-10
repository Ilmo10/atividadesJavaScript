function exibirArtigo(id, callbackSucesso, callbackErro){
  // lógica: recuperação o id via requisição http
  if(true){
    callbackSucesso('Função de callback em JS' , 'Função de callback são muito utilizadas....')
  } else{
    callbackErro(' Erro ao recuperar os dados.')
  }
}
let callbackSucesso = function(titulo, descricao){
document.write('<h1>' + titulo + '</h1>')
document.write('<hr/>')
document.write('<p>' + descricao + '</p>')


}
let callbackErro = function(erro){
  document.write('<p><b> Erro:</b>' + erro +'</p>')
}
exibirArtigo(1, callbackSucesso ,callbackErro)