$(".home").click(function() {
    $('html,body').animate({
        scrollTop: $("body").offset().top
    },'slow');
    changeNav("home");
});
$(".about").click(function() {
    $('html,body').animate({
        scrollTop: $("#toni").offset().top
    },'slow');
});


const targetElement = document.getElementById("toni");
let navRadio= $(".navRadio");
let textNav= $("nav label");
let home= true;
let about= true;
let wip= true;

window.addEventListener("scroll", function() {
    const targetPosition = targetElement.getBoundingClientRect();
    if (targetPosition.top < window.innerHeight && targetPosition.bottom > 0) {
        if(about){
            console.log("El elemento ha sido desplazado por encima");
            changeNav("about");
            about=false;
            wip=true;
            home=true;
        }
    }else{
        if (targetPosition.top < window.innerHeight){
            console.log("debajo");
            changeNav("wip");
            wip=false;
        }else{
            changeNav("home");
            home=false;
        }
        about=true;
    }
});

function changeNav(who){
    textNav.each(function(){
        $(this).css("color", "#fa9a66");
        if($(this).prop("class") == who){
            $(this).css("color", "#fff");
        }
    })
    navRadio.each(function() {
        $(this).removeAttr('checked');
        if ($(this).prop("id") == who) {
            $(this).attr('checked', true);
            switch (who) {
                case "home":
                    $(".slider").css('left', "0%");
                    break;
                case "about":
                    $(".slider").css('left', "20%");
                    break;
                case "wip":
                    $(".slider").css('left', "40%");
                    break;
                case "done":
                    $(".slider").css('left', "60%");
                    break;
                case "contact":
                    $(".slider").css('left', "70%");
                    break;
            
                default:
                    break;
            }
            
        }
    });
}