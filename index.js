$("input").on("input", function(){
    $(this).removeClass("warning");
    $("." + this.id + " .warning-sign").removeClass("show-warning");
    $("." + this.id + " .error").removeClass("show-warning");
});

$("button").click(function(){
    checkEmpty("first-name");
    checkEmpty("last-name");
    checkEmpty("email");
    checkEmpty("password");
    checkEmail();
});

function checkEmpty(name){
    if ($("." + name + " input").val().length === 0){
        $("." + name + " input").addClass("warning");
        $("." + name + " .warning-sign").addClass("show-warning");
        $("." + name + " .empty").addClass("show-warning");
    } 
}

function checkEmail(){
    if(!isEmail($(".email input").val()) && $(".email input").val().length !== 0){
        $(".email input").addClass("warning");
        $(".email .warning-sign").addClass("show-warning");
        $(".email .wrong").addClass("show-warning");
    }
}


function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
