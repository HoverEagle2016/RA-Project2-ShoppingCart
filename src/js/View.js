

$("document").ready(function(){  
    $("#Qty").hide();
    $(".shopBtn").on("click", function(){
    $("#Qty").show();
    var inputField = parseInt($("#Qty").val());
    $("#Qty").val(inputField + 1);
    });

}); // JQuery READY function

export default class View{

	dataPopulate(theData){
		let JSONData = JSON.parse(theData);
		let output = "";

		for(let i = 0; i < JSONData.products.length; i++) {
			 output += 
		`<div class="product text-center product${i}" data-sku="${JSONData.products[i].sku}"> 						
				<img class="productImg" src="${JSONData.products[i].image}" alt="${JSONData.products[i].modelNumber}">
		  		<p class="manufacturer">"${JSONData.products[i].manufacturer}"</p>
		  		<h4 class="productName lineHeight-lrg">${JSONData.products[i].name}</h4>
		  		<p class="productPrice">${JSONData.products[i].regularPrice}</p>
		  		<div>
		  			<button>Quick View</button>
		  			<button class="shopBtn color-white">Add to Cart</button>
		  		</div>	
		</div>`;	
		}
		
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
				// owl.data('owl-Carousel').addItem(output);
				//owl.reinit();	
				$('.owl-carousel').owlCarousel('add', output).owlCarousel('refresh');		

		}
}

