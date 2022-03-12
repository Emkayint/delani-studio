$(document).ready(() => {
    let divs = ['1', '2', '3'];
    divs.forEach((div) => {
        if($('.text' + div).is(":visible")){
            $(".text"+ div).hide();
        }
        $(".div" + div).click(() =>{
            if($(".image" + div).is(":visible")){
                $(".image" + div).hide();
                $(".text" + div).show();
            } else if($(".text" + div).is(":visible")){
                $(".text" + div).hide();
                $(".image" + div).show();
            }
        });
    });


    // Designing the pop up

    $("#pic1").hover(()=> {
        $("#pic1").css({
            "position": "relative",
        })
        $("#p1").css({
            "z-index" : "1000",
            "position" : "absolute",
            "background-color" : "black",
            "color" : "white",
            'top' : "0"
        })
    })
});