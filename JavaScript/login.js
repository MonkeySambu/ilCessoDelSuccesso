$(document).ready(function(){
    $("#invia").click(function(){
        if(($("#pass").val()=="Admin1234")&&($("#nome").val()=="ADMIN")){
            $(location).prop('href', 'negozio.html')}
        else{
            $("#pass,#nome").addClass("rosso");
            $("#err").css({"display":"block"});
            $("#spazio").css({"display":"none"});}
        });
})

$(document).ready(function(){
    $("#logout").click(function(){
        $(location).prop('href', 'index.html');});
})