var CookiesProdotto= CookiesNome.noConflict();
var e=0;
var totale=0;

const PROD=11;
$(document).ready(function(){
    for (let i = 0; i < PROD; i++){
        $("#add"+i).click(function(){
            // VARIBALILI 
            var foto=$("#foto"+i).attr("src");
            var nome=$("#nome"+i).text();
            var prezzo=$("#prezzo"+i).text();
            var quantita= parseInt($("#quantita"+i).val());

            console.log(quantita);

            CookiesProdotto.set("foto"+i ,foto,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("nome"+i ,nome,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("prezzo"+i ,prezzo,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("quantita"+i ,quantita,{expires: 1, sameSite: 'strict'});
            
            console.log("test"+i);

            CookiesProdotto.get("foto"+i);
            CookiesProdotto.get("nome"+i);
            CookiesProdotto.get("prezzo"+i);
            CookiesProdotto.get("quantita"+i);
            
            var immagine = $("<img>");
            var img = CookiesProdotto.get("foto"+i);
            immagine.attr("src", img);
            immagine.addClass("prod");

            var subtotale=parseFloat(CookiesProdotto.get("prezzo"+i))*parseFloat(CookiesProdotto.get("quantita"+i));
            console.log(subtotale);
            CookiesProdotto.set("subtotale"+i,subtotale,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.get("subtotale"+i);
            console.log(CookiesProdotto.get("subtotale"+i));

            var cella1= $("<td> </td>").append(immagine);
            var cella2= $("<td> </td>").append("<div>"+CookiesProdotto.get("nome"+i)+"</div>"+"<div class="+"fianco"+">Prezzo x Art: "
                                                +CookiesProdotto.get("prezzo"+i)+" €</div>");
            var cella3= $("<td> </td>").append("<div> Numero Art: "+CookiesProdotto.get("quantita"+i)+"</div>"+"<div class="+"fianco"+">subtotale: "+
                                                CookiesProdotto.get("subtotale"+i)+" €"+"</div>"+"<br>"+"<button id='remove"+i+"'>Rimuovi</button>");
            var riga= $("<tr> </tr>").append(cella1,cella2,cella3).attr("id","rigaCart"+i);
            var rigaCookie= $("#rigaCart"+i).;
            CookiesProdotto.set("riga"+i,rigaCookie,{expires: 1, sameSite: 'strict'});
            
            $("#carrelloso").prepend(CookiesProdotto.get("riga"+i));
            
           
            console.log(CookiesProdotto.get("nome"+i));

           
            totale += parseFloat(CookiesProdotto.get("subtotale"+i));
            $("#totale").html("Totale: "+totale+" €");

            $("#remove"+i).click(function(){
                console.log("test remove");
                $("#rigaCart"+i).remove();
                totale -= parseFloat(CookiesProdotto.get("subtotale"+i));
                $("#totale").html("Totale: "+totale+" €");
            });
        });
        }

        $("#cart").click(function(){
            if(e==0){
                $("#CARRELLO-PROD").show();
                console.log("test mostra");
                e=1;
            }else{
                $("#CARRELLO-PROD").hide();
                console.log("test nascondi");
                e=0;
            }
        });

        
    });
