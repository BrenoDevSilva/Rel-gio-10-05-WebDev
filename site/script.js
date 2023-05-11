//RETORNANDO A HORA 
let horas = new Date()
document.write(horas.getHours());
document.write("<br><br>")

//RETORNANDO OS MINUTOS
let minutos = new Date()
document.write(minutos.getMinutes());
document.write("<br><br>")

//RETORNANDO OS SEGUNDOS
let segundos = new Date()
document.write(segundos.getSeconds());
document.write("<br><br>")

//SETANDO A HORA
let horas1 = new Date()
horas1.setHours(horas1.getHours()+3)
document.write(horas1.getHours())
document.write("<br><br>")
document.write(horas1.toLocaleDateString())

//USANDO setTimeout

function BemVindo(){
    alert("Olá, tudo bem?")
}
setTimeout(BemVindo,1000)