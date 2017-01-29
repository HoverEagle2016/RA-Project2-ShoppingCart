// import DataParse from './DataParse';


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
    }); //owl-carousel implementation

    $("#Qty").hide();

    $(".shopBtn").on("click", function(){
    $("#Qty").show();
    var inputField = parseInt($("#Qty").val());

    $("#Qty").val(inputField + 1);
    });


}); // JQuery READY function


// function init() {
//         var qtyDisplay = document.getElementById("Qty");
//         qtyDisplay.style.visibility = "hidden";
        
//         var addBtns = document.querySelectorAll(".shopBtn");
        
//         for (var i=0; i<addBtns.length; i++) {
//               var addBtn = addBtns.item(i);
//               addBtn.addEventListener("click", showQty(), false); 
//                console.log(addBtn);
//         }     
      
// }

//  function showQty() {
//             qtyDisplay.style.visibility = "visible";
//             qtyDisplay.value = parseInt(qtyDisplay.value) + 1;
            
//         }













