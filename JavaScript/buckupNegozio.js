var CookiesProdotto= CookiesNome.noConflict();
const nPRODTot=10; 
let numProdInCart=0;

$(document).ready(function(){
    for (let i = 0; i < PROD; i++){
        //BOTTONE AGGIUNGI//
        $("#add"+i).click(function(){
            if(CookiesProdotto.get("numProd")==undefined){
                numProd = 0;
            }else{
                numProd = parseInt(CookiesProdotto.get("numProd"));
            }
            // VARIBALILI RECUPERATE DALL'HTML//
            var foto=$("#foto"+i).attr("src");
            var nome=$("#nome"+i).text();
            var prezzo=parseFloat($("#prezzo"+i).text());
            var quantita=parseInt($("#quantita"+i).val());
            var subtotale=quantita*prezzo;
            subtotale=parseFloat(subtotale);
    
            //CONTROLLO IL NUMERO DI ARTICOLI//
            if(quantita==0){
                alert("Inserire un numero di articoli!!!!!");
            }else{
                if(CookiesProdotto.get("nome"+i)==undefined){
                    numProd++;
                    console.log(CookiesProdotto.get("nome"+i));
                }
                console.log(numProd);
                //INSERISCO I COOKIE//
                if(CookiesProdotto.get("quantita"+i)==null||CookiesProdotto.get("quantita"+i)==undefined){
                    CookiesProdotto.set("quantita"+i ,quantita,{expires: 1, sameSite: 'strict'});
                    CookiesProdotto.set("subtotale"+i ,subtotale,{expires: 1, sameSite: 'strict'});
                }else{
                    CookiesProdotto.set("quantita"+i ,parseInt(CookiesProdotto.get("quantita"+i))+quantita,{expires: 1, sameSite: 'strict'});
                    CookiesProdotto.set("subtotale"+i ,parseFloat(CookiesProdotto.get("subtotale"+i))+subtotale,{expires: 1, sameSite: 'strict'});
                }
                CookiesProdotto.set("foto"+i ,foto,{expires: 1, sameSite: 'strict'});
                CookiesProdotto.set("nome"+i ,nome,{expires: 1, sameSite: 'strict'});
                CookiesProdotto.set("prezzo"+i ,prezzo,{expires: 1, sameSite: 'strict'});
                //CookiesProdotto.set("subtotale"+i ,subtotale,{expires: 1, sameSite: 'strict'});
                CookiesProdotto.set("posArt"+i,i,{expires: 1, sameSite: 'strict'});

                CookiesProdotto.set("numProd",numProd,{expires: 1, sameSite: 'strict'});
                //CREO LA TABELLA
                //Elimino la riga//
                $("#rigaCart"+i).remove();
                //BR//
                var br = $("<br>");
                //immagine//
                var immagine = $("<img>");
                var img = CookiesProdotto.get("foto"+i);
                immagine.attr("src", img);
                immagine.addClass("prod");

                //bottone//
                var button =$("<button></button>");
                button.attr("id","remove"+i);
                button.text("Rimuovi");
                button.attr("onclick",id);
                //nome//
                var nome = $("<div></div>");
                nome.text(CookiesProdotto.get("nome"+i));

                //prezzo//
                var prezzo = $("<div></div>");
                prezzo.text("Prezzo X art: "+CookiesProdotto.get("prezzo"+i)+"€");
                prezzo.addClass("fianco");
                
                //quantita//
                var quantita = $("<div></div>");
                quantita.text("Num Articoli: "+CookiesProdotto.get("quantita"+i));

                //subtotale//
                var subtotaleDIV = $("<div></div>");
                subtotaleDIV.text("Subtotale: "+CookiesProdotto.get("quantita"+i)*CookiesProdotto.get("prezzo"+i)+"€");
                subtotaleDIV.addClass("fianco");

                //celle//
                var cella1= $("<td> </td>").append(immagine);
                var cella2= $("<td> </td>").append(nome);
                cella2.append(br);
                cella2.append(quantita);
                var cella3= $("<td> </td>").append(prezzo);
                cella3.append(br);
                cella3.append(subtotale);
                cella3.append(br);
                cella3.append(button);
                //riga//
                var riga = $("<tr></tr>");
                riga.append(cella1);
                riga.append(cella2);
                riga.append(cella3);
                riga.attr("id","rigaCart"+i);
                //Totale//
                //totale += parseFloat(subtotale);
                //inserisco la riga//
                $("#carrelloso").prepend(riga);
                
                //BOTTONE RIMUOVI//
                $("#remove"+i).click(function(){
                    console.log("test remove");
                    //elimino la riga//
                    //aggiorno il totale//
                    //totale -= parseFloat(CookiesProdotto.get("subtotale"+i));
                    CookiesProdotto.set("totale",totale,{expires: 1, sameSite: 'strict'});
                    //elimino i cookie//
                    CookiesProdotto.remove("subtotale"+id);
                    CookiesProdotto.remove("foto"+id);
                    CookiesProdotto.remove("prezzo"+id);
                    CookiesProdotto.remove("nome"+id);
                    CookiesProdotto.remove("quantita"+id);
                    CookiesProdotto.remove("posArt"+id);

                });
            }
        });
    }    

        $(document).ready(function(){
            if (totale >= 100){
                var img = $("img"); 
                img.attr("src","../Assets/prodotti/tazza_cesso.png"); 
                var src= $("#x");
                src.append(img);
            }
        });
        
    //BOTTONE CARRELLO//
    $("#cart").click(function(){
        if(e==0){
            //MOSTRA IL CARRELLO//
            $("#CARRELLO-PROD").show();
            e=1;
        }else{
            //NASCONDE IL CARRELLO//
            $("#CARRELLO-PROD").hide();
            e=0;
        }
    });  
});

$(document).ready(function(){
    var tot=0;
    console.log(numProd);
    for(i=0;i<numProd;i++){
        tot += parseFloat(CookiesProdotto.get("subtotale"+i))*parseInt(CookiesProdotto.get("quantita"+i));
    }
    $(".add").click(function(){
        document.getElementById("totale").innerHTML = "Totale: "+tot+"€";
    });
    document.getElementById("totale").innerHTML = "Totale: "+tot+"€";
});

$(document).ready(function(){
    for (let i = 0; i < PROD; i++){
        //CREO LA TABELLA
        //Elimino la riga//
        $("#rigaCart"+i).remove();
        //BR//
        var br = $("<br>");
        //immagine//
        var immagine = $("<img>");
        var img = CookiesProdotto.get("foto"+i);
        immagine.attr("src", img);
        immagine.addClass("prod");

        //bottone//
        var button =$("<button></button>");
        button.attr("id","remove"+i);
        var nome = $("<div></div>");
        nome.text(CookiesProdotto.get("nome"+i));
        //prezzo//
        var prezzo = $("<div></div>");
        prezzo.text("Prezzo X art: "+CookiesProdotto.get("prezzo"+i)+"€");
        prezzo.addClass("fianco");
                
        //quantita//
        var quantita = $("<div></div>");
        quantita.text("Num Articoli: "+CookiesProdotto.get("quantita"+i));
        //subtotale//
        var subtotaleDIV = $("<div></div>");
        subtotaleDIV.text("Subtotale: "+CookiesProdotto.get("quantita"+i)*CookiesProdotto.get("prezzo"+i)+"€");
        subtotaleDIV.addClass("fianco");
        //celle//
        var cella1= $("<td> </td>").append(immagine);
        var cella2= $("<td> </td>").append(nome);
        cella2.append(br);
        cella2.append(quantita);
        var cella3= $("<td> </td>").append(prezzo);
        cella3.append(br);            
        //cella3.append(subtotale);
        cella3.append(br);
        cella3.append(button);
        //riga//
        var riga = $("<tr></tr>");
        riga.append(cella1);
        riga.append(cella2);
        riga.append(cella3);
        riga.attr("id","rigaCart"+i);

        $("#remove"+i).click(function(){
            console.log("test remove");
            //elimino la riga//
            $("#rigaCart"+i).remove();
            //aggiorno il totale//
            //totale -= parseFloat(CookiesProdotto.get("subtotale"+i));
            CookiesProdotto.set("totale",totale,{expires: 1, sameSite: 'strict'});
            $("#totale").text("Totale: "+totale+"€");
            //elimino i cookie//
            CookiesProdotto.set("add"+i,false,{expires: 1, sameSite: 'strict'});
            CookiesProdotto.remove("subtotale"+i);
            CookiesProdotto.remove("foto"+i);
            CookiesProdotto.remove("prezzo"+i);
            CookiesProdotto.remove("nome"+i);
            CookiesProdotto.remove("quantita"+i);
            CookiesProdotto.remove("posArt"+i);
        });
    };
});
