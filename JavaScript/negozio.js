var CookiesProdotto= CookiesNome.noConflict();

var e=0;
const PROD=11;
$(document).ready(function(){
    for (let i = 0; i < PROD; i++){
        $("#add"+i).click(function(){
            // VARIBALILI 
            var foto=$("#foto"+i).attr("src");
            var nome=$("#nome"+i).text();
            var prezzo=$("#prezzo"+i).text();
            var quantita=$("#quantita"+i).val();

            console.log(quantita);
            console.log


            CookiesProdotto.set("foto"+i ,foto,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("nome"+i ,nome,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("prezzo"+i ,prezzo,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("quantita"+i ,quantita,{expires: 1, sameSite: 'strict'});
            
            console.log("test"+i);

            CookiesProdotto.get("foto"+i);
            CookiesProdotto.get("nome"+i);
            CookiesProdotto.get("prezzo"+i);
            CookiesProdotto.get("quantita"+i);

            $("#carrelloso").append("<tr><td>"+CookiesProdotto.get("foto"+i)+"</td><td>"+CookiesProdotto.get("quantita"+i)+"</td></tr>");

            console.log(CookiesProdotto.get("nome"+i));

            var subtotale=parseInt(CookiesProdotto.get("prezzo"+i))*parseInt(CookiesProdotto.get("quantita"+i));
            CookiesProdotto.set("subtotale"+i,subtotale,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.get("subtotale"+i);
            console.log(CookiesProdotto.get("subtotale"+i));

            var totale=0;
            totale+=parseInt(CookiesProdotto.get("subtotale"+i));
            $("#totale").html("Totale:"+totale+"€");
            });
        }});

    $("#cart").click(function(){
        if(e==0){
            $("#CARRELLO-PROD").show();
            e=1;
        }else{
            $("#CARRELLO-PROD").hide();
            e=0;
        }
    });
