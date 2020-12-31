$("nav").click(function(event){
    $("#mobileMenu").show(500);
});

$("#mobileMenu").click(function(event){
    $("#mobileMenu").hide(500);
});

setTimeout(function(){
    $("div:last").remove();
}, 1);
