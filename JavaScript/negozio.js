var CookiesProdotto= CookiesNome.noConflict();

var e=0;
$(document).ready(function(){
    for (let i = 0; i < 10; i++){
        $("#add"+i).click(function(){
            // VARIBALILI 
            var foto=$("#foto"+i).attr("src");
            var nome=$("#nome"+i).html();
            var prezzo=$("#prezzo"+i).html();
            var quantita=$("#quantita"+i).val();
            var subtotale=prezzo*quantita; 

            CookiesProdotto.set("foto"+i,foto,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("nome"+i,nome,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("prezzo"+i,prezzo,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("quantita"+i,quantita,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("subtotale"+i,totale,{expires: 1, sameSite: 'strict'});
            
            CookiesProdotto.get("foto"+i);
            CookiesProdotto.get("nome"+i);
            CookiesProdotto.get("prezzo"+i);
            CookiesProdotto.get("quantita"+i);
            CookiesProdotto.get("totale"+i);
        });
    }

    $("#cart").click(function(){
        if(e==0){
            $("#CARRELLO-PROD").show();
            e=1;
        }else{
            $("#CARRELLO-PROD").hide();
            e=0;
        }
    });
});
