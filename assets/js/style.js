$(document).ready(function(){
    $("#button-callback").click(function(){
        $("#header__form-callback_hidden").show(1000);
    });
      $("#form-close").click(function(){
        $("#header__form-callback_hidden").hide(1000);
    });
});
