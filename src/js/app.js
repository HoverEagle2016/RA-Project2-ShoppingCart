// import DataParse from './DataParse';

let JSONData = [];

$("document").ready(function(){
    
    $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
                });
    
    $("#Qty").hide();

    $(".shopBtn").on("click", function(){
        
    $("#Qty").show();
    var inputField = parseInt($("#Qty").val());
    $("#Qty").val(inputField + 1);

    });

}); // JQuery READY function















