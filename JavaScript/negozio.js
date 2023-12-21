var CookiesProdotto= CookiesNome.noConflict();
var e=0;
var numProd=[];

const PROD=11;

$(document).ready(function(){
    for (let i = 0; i < PROD; i++){
        $("#add"+i).click(function(){
            numProd=CookiesProdotto.get("numProd");
            numProd++;
            // VARIBALILI 
            var foto=$("#foto"+i).attr("src");
            var nome=$("#nome"+i).text();
            var prezzo=$("#prezzo"+i).text();
            var quantita=parseInt($("#quantita"+i).val());

            var check= CookiesProdotto.get("add"+i);
            var cazzo= CookiesProdotto.get("quantita"+i);
            console.log(check);
            console.log(quantita);
            console.log(cazzo);
            if(check==true){
                quantita = ((parseInt(cazzo)*100) + (quantita*100))/100;
            }
            console.log(quantita);

            if(quantita==0){
                alert("Inserire un numero di articoli!!!!!");
            }else{
                CookiesProdotto.set("foto"+i ,foto,{expires: 1, sameSite: 'strict'});
                CookiesProdotto.set("nome"+i ,nome,{expires: 1, sameSite: 'strict'});
                CookiesProdotto.set("prezzo"+i ,prezzo,{expires: 1, sameSite: 'strict'});
                CookiesProdotto.set("quantita"+i ,quantita,{expires: 1, sameSite: 'strict'});
                CookiesProdotto.set("posArt"+i,i,{expires: 1, sameSite: 'strict'});

                CookiesProdotto.set("add"+i,true,{expires: 1, sameSite: 'strict'});
                
                var immagine = $("<img>");
                var img = CookiesProdotto.get("foto"+i);
                immagine.attr("src", img);
                immagine.addClass("prod");


                var subtotale=parseFloat(CookiesProdotto.get("prezzo"+i))*parseFloat(CookiesProdotto.get("quantita"+i));
                CookiesProdotto.set("subtotale"+i,subtotale,{expires: 1, sameSite: 'strict'});

                $("#rigaCart"+i).remove();
                var cella1= $("<td> </td>").append(immagine);
                var cella2= $("<td> </td>").append("<div>"+CookiesProdotto.get("nome"+i)+"</div>"+"<div class="+"fianco"+">Prezzo x Art: "+CookiesProdotto.get("prezzo"+i)+" €</div>");
                var cella3= $("<td> </td>").append("<div> Numero Art: "+CookiesProdotto.get("quantita"+i)+"</div>"+"<div class="+"fianco"+">subtotale: "+CookiesProdotto.get("subtotale"+i)+" €"+"</div>"+"<br>"+"<button id='remove"+i+"'>Rimuovi</button>");
                var riga= $("<tr> </tr>").append(cella1,cella2,cella3).attr("id","rigaCart"+i);
            
                $("#carrelloso").prepend(riga);
                
                totale += parseFloat(CookiesProdotto.get("subtotale"+i));

                CookiesProdotto.set("totale",totale,{expires: 1, sameSite: 'strict'});
                $("#totale").html("Totale: "+totale+" €");
            }

            $("#remove"+i).click(function(){
                console.log("test remove");
                $("#rigaCart"+i).remove();
                CookiesProdotto.set("add"+i,false,{expires: 1, sameSite: 'strict'});
                CookiesProdotto.remove("foto"+i);
                CookiesProdotto.remove("nome"+i);
                CookiesProdotto.remove("prezzo"+i);
                CookiesProdotto.remove("quantita"+i);
                CookiesProdotto.remove("subtotale"+i);
                CookiesProdotto.remove("posArt"+i);

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
    $("#totale").remove();
$(document).ready(function(){
    for (let i = 0; i < PROD; i++){
                
        setTimeout(function(){
            if(CookiesProdotto.get("posArt"+i)==i){
                var immagine = $("<img>");
                var img = CookiesProdotto.get("foto"+i);
                immagine.attr("src", img);
                immagine.addClass("prod");
                
                var cella1= $("<td> </td>").append(immagine);
                var cella2= $("<td> </td>").append("<div>"+CookiesProdotto.get("nome"+i)+"</div>"+"<div class="+"fianco"+">Prezzo x Art: "+CookiesProdotto.get("prezzo"+i)+" €</div>");
                var cella3= $("<td> </td>").append("<div> Numero Art: "+CookiesProdotto.get("quantita"+i)+"</div>"+"<div class="+"fianco"+">subtotale: "+CookiesProdotto.get("subtotale"+i)+" €"+"</div>"+"<br>"+"<button id='remove"+i+"'>Rimuovi</button>");
                var riga= $("<tr> </tr>").append(cella1,cella2,cella3).attr("id","rigaCart"+i);
                $("#totale").html("Totale: "+CookiesProdotto.get("totale")+" €");
                $("#carrelloso").prepend(riga);
                }
            },1000);
    }});
