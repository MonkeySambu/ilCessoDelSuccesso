/*$(document).load(function(){
    $("#err").hide;
});*/
$("#invia").click(function(){
    if(($("#pass").val()=="Admin1234")&&($("#nome").val()=="ADMIN")){
        $(location).prop('href', 'http://www.google.com')}
    else{
        $("#pass,#nome").addClass("rosso");
        $("#err").hide;}
        console.log("prova");
    });
