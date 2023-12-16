var CookiesProdotto= Cookies.noConflict();

$(document).ready(function(){
    for (let i = 0; i < 10; i++){
        $("#add"+i).click(function(){
            // VARIBALILI 
            var foto=$("#foto"+i).attr("src");
            var nome=$("#nome"+i).html();
            var prezzo=$("#prezzo"+i).html();
            var quantita=$("#quantita"+i).val();
            var totale=prezzo*quantita;

            CookiesProdotto.set("foto"+i,foto,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("nome"+i,nome,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("prezzo"+i,prezzo,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("quantita"+i,quantita,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("totale"+i,totale,{expires: 1, sameSite: 'strict'});

        });
    }
});