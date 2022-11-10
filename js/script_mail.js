document.getElementById("check").style.visibility= "hidden";

let name=prompt("Nome e Cognome");
document.getElementById("nome").innerHTML= name;


const mailArr= [];

lista.addEventListener('click',
    function(){
        var mail= document.querySelector("#mail").value;
        mailArr.push(mail);

        document.getElementById("check").style.visibility= "visible";

    }
)

skip.addEventListener('click',
    function(){
        document.getElementById("check").style.visibility= "visible";
    }
)

controllo.addEventListener('click',
    function(){
        var mail2= document.querySelector("#mail2");

        if (mail2.value === mail.value){
            document.getElementById("prova").innerHTML= `DIVERTITI!`
        }else{ 
            document.getElementById("prova").innerHTML= `CARPE DIEM... MA NON ALLA FESTA!`

        }
    }
)


