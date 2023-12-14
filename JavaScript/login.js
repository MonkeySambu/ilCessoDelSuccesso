var CookiesNome = Cookies.noConflict();
var log=0;

if(CookiesNome.get("nome")=="true" && CookiesNome.get("pass")=="true" && log!=0){
    $(location).prop('href', 'negozio.html');
    log=1;
}

$(document).ready(function(){
    $("#invia").click(function(){
        if(($("#pass").val()=="Admin1234")&&($("#nome").val()=="ADMIN")){

            CookiesNome.set("nome","true",{expires: 1, sameSite: 'strict'});
            CookiesNome.set("pass","true",{expires: 1,sameSite: 'strict'});
            log=1;
            $(location).prop('href', 'negozio.html')}

        else{
            $("#pass,#nome").addClass("rosso");
            $("#err").css({"display":"block"});
            $("#spazio").css({"display":"none"});}
        });
})

if(CookiesNome.get("pass") != "true"){
    window.location.replace("index.html");
    log=0;
}

$(document).ready(function(){
    $("#logout").click(function(){
        $(location).prop('href', 'index.html');});
})