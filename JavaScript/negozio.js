var CookiesProdotto= CookiesNome.noConflict();
var e=0;
var totale=0;
var numProd=0;

const PROD=11;
$(document).ready(function(){
    
});
$(document).ready(function(){
    for (let i = 0; i <= CookiesProdotto.get("numProd"); i++){
        var immagine = $("<img>");
        var img = CookiesProdotto.get("foto"+i);
        immagine.attr("src", img);
        immagine.addClass("prod");
    
        var cella1= $("<td> </td>").append(immagine);
        var cella2= $("<td> </td>").append("<div>"+CookiesProdotto.get("nome"+i)+"</div>"+"<div class="+"fianco"+">Prezzo x Art: "
                                            +CookiesProdotto.get("prezzo"+i)+" €</div>");
        var cella3= $("<td> </td>").append("<div> Numero Art: "+CookiesProdotto.get("quantita"+i)+"</div>"+"<div class="+"fianco"+">subtotale: "+
                                            CookiesProdotto.get("subtotale"+i)+" €"+"</div>"+"<br>"+"<button id='remove"+i+"'>Rimuovi</button>");
        var riga= $("<tr> </tr>").append(cella1,cella2,cella3).attr("id","rigaCart"+i);
        $("#totale").html("Totale: "+CookiesProdotto.get("totale")+" €");
        $("#carrelloso").prepend(riga);
        }
        
    for (let i = 0; i < PROD; i++){
        $("#add"+i).click(function(){
            numProd++;
            // VARIBALILI 
            var foto=$("#foto"+i).attr("src");
            var nome=$("#nome"+i).text();
            var prezzo=$("#prezzo"+i).text();
            var quantita= parseInt($("#quantita"+i).val());

            CookiesProdotto.set("foto"+i ,foto,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("nome"+i ,nome,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("prezzo"+i ,prezzo,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.set("quantita"+i ,quantita,{expires: 1, sameSite: 'strict'});

            CookiesProdotto.set("numProd",numProd,{expires: 1, sameSite: 'strict'});
            
            var immagine = $("<img>");
            var img = CookiesProdotto.get("foto"+i);
            immagine.attr("src", img);
            immagine.addClass("prod");

            var subtotale=parseFloat(CookiesProdotto.get("prezzo"+i))*parseFloat(CookiesProdotto.get("quantita"+i));
            CookiesProdotto.set("subtotale"+i,subtotale,{expires: 1, sameSite: 'strict'});

            var cella1= $("<td> </td>").append(immagine);
            var cella2= $("<td> </td>").append("<div>"+CookiesProdotto.get("nome"+i)+"</div>"+"<div class="+"fianco"+">Prezzo x Art: "
                                                +CookiesProdotto.get("prezzo"+i)+" €</div>");
            var cella3= $("<td> </td>").append("<div> Numero Art: "+CookiesProdotto.get("quantita"+i)+"</div>"+"<div class="+"fianco"+">subtotale: "+
                                                CookiesProdotto.get("subtotale"+i)+" €"+"</div>"+"<br>"+"<button id='remove"+i+"'>Rimuovi</button>");
            var riga= $("<tr> </tr>").append(cella1,cella2,cella3).attr("id","rigaCart"+i);
            
            $("#carrelloso").prepend(riga);
            
           
            console.log(CookiesProdotto.get("nome"+i));

           
            totale += parseFloat(CookiesProdotto.get("subtotale"+i))+parseFloat(CookiesProdotto.get("totale"));
            totale = totale.toFixed(2);
            CookiesProdotto.set("totale",totale,{expires: 1, sameSite: 'strict'});
            $("#totale").html("Totale: "+totale+" €");

            $("#remove"+i).click(function(){
                console.log("test remove");
                $("#rigaCart"+i).remove();
                totale -= parseFloat(CookiesProdotto.get("subtotale"+i));
                totale = totale.toFixed(2);
                CookiesProdotto.set("totale",totale,{expires: 1, sameSite: 'strict'});
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
