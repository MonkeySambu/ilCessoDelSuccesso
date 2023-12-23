var CookiesProdotto= CookiesNome.noConflict();
const nPRODTot=10;
var numProdInCart=0;
let totale=0;
var e=0;

$(document).ready(function(){
    //CONTROLLO SE ESISTONO PRODOTTI NEL CARELLO//
    if(CookiesProdotto.get("NProdotti")==undefined){
        CookiesProdotto.set("NProdotti",0, {path: "/"}, {sameSite: "strict"}, {expires: 1});
        numProdInCart = 0;
    }else{
        numProdInCart=CookiesProdotto.get("NProdotti");
    }
});

function add(id) {
    if($("quantita"+id).val()!=""){
        if(CookiesProdotto.get("nome"+id)==undefined){
            numProdInCart++;
            console.log(numProdInCart);
            nome = document.getElementById("nome"+id).innerHTML;
            CookiesProdotto.set("NProdotti",numProdInCart, {path: "/"}, {sameSite: "strict"}, {expires: 1});
            CookiesProdotto.set("nome"+id,nome, {path: "/"}, {sameSite: "strict"}, {expires: 1});
        }
        if(CookiesProdotto.get("quantita"+id)==undefined){
            quantita = document.getElementById("quantita"+id).value;
            CookiesProdotto.set("quantita"+id,quantita, {path: "/"}, {sameSite: "strict"}, {expires: 1});
        }else{
            quantita = parseInt(CookiesProdotto.get("quantita"+id));
            quantita += parseInt(document.getElementById("quantita"+id).value);
            CookiesProdotto.set("quantita"+id,quantita, {path: "/"}, {sameSite: "strict"}, {expires: 1});
        }
        quantita = document.getElementById("quantita"+id).value;
        prezzo = document.getElementById("prezzo"+id).innerHTML;
        CookiesProdotto.set("prezzo"+id,prezzo, {path: "/"}, {sameSite: "strict"}, {expires: 1});
        CookiesProdotto.set("img"+id,id+".png", {path: "/"}, {sameSite: "strict"}, {expires: 1});
    }
}


$(document).ready(function(){
    //Creo il carello al caricamento della pagina//
    CookiesProdotto.set("totale",0);
    $("#totale").text("TOTALE CARRELLO: "+"0.00"+"€");
    for(var i=0;i<11;i++){
        let id = i;
        if(CookiesProdotto.get("nome"+id)!=undefined){
            //BR//
            var br = $("<br>");
            //immagine//
            var immagine = $("<img>");
            var img = CookiesProdotto.get("img"+id);
            immagine.attr("src", "../Assets/prodotti/"+img);
            immagine.addClass("prod");

            //bottone//
            var button =$("<button></button>");
            button.attr("id","remove"+id);
            button.text("Rimuovi");
            button.attr("onclick","remove("+id+")");
            button.addClass("add");
            //nome//
            var nome = $("<div></div>");
            nome.text(CookiesProdotto.get("nome"+id));

            //prezzo//
            var prezzo = $("<div></div>");
            prezzo.text("Prezzo X art: "+CookiesProdotto.get("prezzo"+id)+"€");
            prezzo.addClass("fianco");
            
            //quantita//
            var quantita = $("<div></div>");
            quantita.text("Num Articoli: "+CookiesProdotto.get("quantita"+id));
            //celle//
                //cella1//
            var cella1= $("<td></td>").append(immagine);
                //cella2//
            var cella2= $("<td></td>").append(nome);
                //cella3//
            var cella3= $("<td></td>").append(prezzo);
                cella3.append(quantita);
                cella3.append(button);
            //riga//
            var riga = $("<tr></tr>");
                riga.append(cella1);
                riga.append(cella2);
                riga.append(cella3);
                riga.attr("id","rigaCart"+id);
            //Aggiungo la riga alla tabella//
            $("#carrelloso").prepend(riga);
            //Aggiorno il totale //
            if(CookiesProdotto.get("totale")!=undefined)
                totale = parseFloat(CookiesProdotto.get("totale"));
            else
                totale=0;
            totale += parseFloat(CookiesProdotto.get("quantita"+id))*parseFloat(CookiesProdotto.get("prezzo"+id));
            totale = totale.toFixed(2);
            CookiesProdotto.set("totale",totale, {path: "/"}, {sameSite: "strict"}, {expires: 1});
            $("#totale").text("TOTALE CARRELLO: "+totale+"€");
        }
    }
});
function remove(id){
    //Elimino la riga//
    let riga=document.getElementById("rigaCart"+id);
    riga.remove();
    //Aggiorno il numero di prodotti nel carrello//
    numProdInCart--;
    numProdInCart=CookiesProdotto.get("NProdotti");
    //Aggiorno il totale //
    totale -= parseFloat(CookiesProdotto.get("quantita"+id))*parseFloat(CookiesProdotto.get("prezzo"+id));
    totale = totale.toFixed(2);
    $("#totale").text("TOTALE CARRELLO: "+totale+"€");
    CookiesProdotto.set("totale",totale, {path: "/"}, {sameSite: "strict"}, {expires: 1});
    //Elimino i cookies//
    CookiesProdotto.remove("img"+id);
    CookiesProdotto.remove("prezzo"+id);
    CookiesProdotto.remove("nome"+id);
    CookiesProdotto.remove("quantita"+id);
    CookiesProdotto.remove("posArt"+id);

}
$(document).ready(function(){
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
