//let data = new Date()

//document.write(data.getDate())
//document.write(data.getDate() +'/'+( data.getMonth() + 1) + '/' + (data.getFullYear()))  
// 09/05/2022

// adicionar / remover dias

/*
document.write(data.toString())
data.setDate(data.getDate() - 1)
document.write('<hr/>')
document.write(data.toString())
document.write('<br/><br/><br/><br/><hr/>')

//adicionar / remover Meses
document.write(data.toString())
data.setMonth(data.getMonth() - 1)
document.write('<hr/>')
document.write(data.toString())
document.write('<br/><br/><br/><br/><hr/>')

//adicionar / remover Meses
document.write(data.toString())
data.setFullYear(data.getFullYear() - 1)
document.write('<hr/>')
document.write(data.toString())
*/

// 15/01/2017
let data1 = new Date(2017, 0, 15)
// 23/02/2017
let data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write('<hr/>')
document.write(data2.toString())
document.write('<br/><br/><br/><br/><hr/>')

//converter datas para algo que possamos calcular

document.write(data1.getTime())
document.write('<hr/>')
document.write(data2.getTime())
document.write('<br/><br/><br/><br/><hr/>')
// encontrar a qunt de milissegundos entre as datas
let milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())

document.write(milissegundos_entre_datas)
document.write('<br/><br/><br/><br/><hr/>')

let milissegundos_por_dia = (1*24*60*60*1000)
document.write('1 dia tem:' + milissegundos_por_dia + ' Milissegundos')
document.write("<br/>")
document.write('A diferença entre data1 e data2 é de: ' + Math.ceil(milissegundos_entre_datas / milissegundos_por_dia) + ' dia(s)')
 







