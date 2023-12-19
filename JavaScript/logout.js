var CookiesNome = Cookies.noConflict();

$(document).ready(function(){
    if(CookiesNome.get("pass") != "true"){
    window.location.replace("index.html");
    //log=0;    
    }
})


$(document).ready(function(){
    $("#logout").click(function(){
        $(location).prop('href', 'index.html');});
}) 