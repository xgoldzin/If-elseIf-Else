function Prim(){
    let num =  Number(document.getElementById("nun").value)
    if (num % 2 == 0 ){
        document.getElementById("areaNum").innerHTML = "O número é divisivel por 2"
    }
    if (num % 3 == 0){
        document.getElementById("areaNum").innerHTML = "O número é divisivel por 3"
    }
    if (num % 5 == 0){
        document.getElementById("areaNum").innerHTML = "O número é divisivel por 5"
    }
    if (num % 7 == 0){
        document.getElementById("areaNum").innerHTML = "O número é divisivel por 7"
    }
    if (
        (num % 2 == 0 && num % 3 == 0 && num % 5 == 0 && num % 7 == 0 )
        || (num ==2 || num ==3 || num ==5 || num ==7 ))
        {
        document.getElementById("areaNum").innerHTML = "O número é primo"
    }
}
