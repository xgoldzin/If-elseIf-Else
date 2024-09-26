function Prim(){
    document.getElementById("areaNum").innerHTML = ""
    let num =  Number(document.getElementById("nun").value)
    if (num % 2 == 0 ){
        document.getElementById("areaNum").innerHTML += " <p> O número é divisivel por 2 </p>"
    }
    if (num % 3 == 0){
        document.getElementById("areaNum").innerHTML += "<p> O número é divisivel por 3 </p>"
    }
    if (num % 5 == 0){
        document.getElementById("areaNum").innerHTML += "<p> O número é divisivel por 5 </p>"
    }
    if (num % 7 == 0){
        document.getElementById("areaNum").innerHTML += "O número é divisivel por 7 </p>"
    }
    if (
        (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0 )
        ||
        (num ==2 || num ==3 || num ==5 || num ==7 )
    )
        {document.getElementById("areaNum").innerHTML += "O número é primo"}
}

function atlIda(){
    let idade = Number(document.getElementById("ida").value)
    if (idade >= 6 & idade <=11){
        document.getElementById("areaIdade").innerHTML = "Categoria Infantil"
    }
    else if (idade >= 12 & idade <=17){
        document.getElementById("areaIdade").innerHTML = "Categoria Juvenil"
    }
    else if (idade >= 18 & idade <=34){
        document.getElementById("areaIdade").innerHTML = "Categoria Adulto"
    }
    else{
        document.getElementById("areaIdade").innerHTML = "Não é permitido competir"
    }
}

function calcInd(){
    document.getElementById("areaInd").innerHTML = ""
    let indice = Number(document.getElementById("ind").value)
    if (indice > 30 & indice <= 50){
        document.getElementById("areaInd").innerHTML += "<p> Grupo 1 notificado </p>"
    }
    if (indice > 40 & indice <= 50){
        document.getElementById("areaInd").innerHTML += " <p> Grupo 2 notificado </p>"
    }
    if (indice > 50){
        document.getElementById("areaInd").innerHTML += " <p> Todos os grupos parem suas atividades </p>"
    }
    else{
        document.getElementById("areaInd").innerHTML += "<p> Medidor com defeito</p>"
    }

}

function aposent(){
    document.getElementById("areaAps").innerHTML = ""
    let nasci = Number(document.getElementById("nasc").value)
    let ingresso = Number(document.getElementById("ingresso").value)
    idade = (2024 - nasci)
    trabalhado = (2024 - ingresso)
    if(idade >= 65)
        document.getElementById("areaAps").innerHTML += "<p> Pode aposentar</p>"
    if(trabalhado >= 30)
        document.getElementById("areaAps").innerHTML += "<p> Pode aposentar</p>"
    if(idade >= 60 & trabalhado == 25){
        document.getElementById("areaAps").innerHTML += "<p> Pode aposentar</p>"
    }
    else{
        document.getElementById("areaAps").innerHTML += "<p> Não pode aposentar</p>"
    }
}
