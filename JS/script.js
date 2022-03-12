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
        })
    });
})