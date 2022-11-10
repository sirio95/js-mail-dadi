let utente= prompt("Benvenuto, sfidante! Inserisci il tuo username");
document.getElementById("user_name").innerHTML= utente;

gioca.addEventListener('click',
    function(){
        //generatore casuale dadi
        let first_number= Math.floor(Math.random() * 6) +1;
        let second_number= Math.floor(Math.random() * 6) +1;

        //inserimento numeri dadi nel html
        document.getElementById("number_1").innerHTML= first_number;
        document.getElementById("number_2").innerHTML= second_number;

        if (first_number > second_number){
            document.getElementById("risultato").innerHTML= `<i class="fa-solid fa-champagne-glasses"></i> Complimenti, hai vinto!`;
        }else if (first_number < second_number){
            document.getElementById("risultato").innerHTML= `<i class="fa-solid fa-heart-crack"></i> Mi dispiace, hai perso!`;
        } else{
            document.getElementById("risultato").innerHTML= `<i class="fa-solid fa-handshake"></i> Pareggio! Nessuno ha vinto!`
        }
    }
)