var CookiesNome = Cookies.noConflict();
//var log=0;

if(CookiesNome.get("nome")=="true" && CookiesNome.get("pass")=="true" /*&& log!=0*/){
    $(location).prop('href', 'negozio.html');
    //log=1;
}

$(document).ready(function(){
    $("#invia").click(function(){
        if(($("#pass").val()=="locale")&&($("#nome").val()=="UTENTE")){

            CookiesNome.set("nome","true",{expires: 1, sameSite: 'strict'});
            CookiesNome.set("pass","true",{expires: 1,sameSite: 'strict'});
            //log=1;
            $(location).prop('href', 'negozio.html')}

        else{
            $("#pass,#nome").addClass("rosso");
            $("#err").css({"display":"block"});
            $("#spazio").css({"display":"none"});}
        });
})
