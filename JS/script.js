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

    let pics = ['1', '2', '3', '4', '5', '6', '7', '8']
    // Designing the pop up
    pics.forEach( pic => {
        if($("#p" + pic).is(":visible")){
            $('#p' +pic).hide();
        }
    
        $("#pic" + pic).hover(()=> {
            $("#pic" + pic).css({
                "position": "relative",
    
            });
    
            $("#p" + pic).show();
            
            $("#p" + pic).css({
                "z-index" : "1000",
                "position" : "absolute",
                "background-color" : "#e69900",
                "color" : "white",
                'top' : "30px",
                "left" : "20px",
                "padding" : "20px",
                "font-size" : "2.5vh"
            });
        });

        $('#pic' + pic).mouseleave(() => {
            $("#p" + pic).hide("slow");
        });
    });

    $("form").submit(() => {
        if($('#mce-FNAME').val() === "" || $("#mce-EMAIL").val() === "" || $('#mce-MMERGE6').val() === ''){
            alert('Fill in all the blank space')
        }
    })
    
    (function($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0] = 'EMAIL';
        ftypes[0] = 'email';
        fnames[1] = 'FNAME';
        ftypes[1] = 'text';
        fnames[2] = 'LNAME';
        ftypes[2] = 'text';
        fnames[3] = 'ADDRESS';
        ftypes[3] = 'address';
        fnames[4] = 'PHONE';
        ftypes[4] = 'phone';
        fnames[5] = 'BIRTHDAY';
        ftypes[5] = 'birthday';
        fnames[6] = 'MMERGE6';
        ftypes[6] = 'text';
    }(jQuery));
    // var $mcj = jQuery.noConflict(false);
});