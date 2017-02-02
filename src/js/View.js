



export default class View{

	constructor() {
		this.productsArray = null;
		this.productString = null;
		this.categoryString = null;
		this.app = null;	

	}


	dataPopulate(productsArray, theApp){

		this.app = theApp;
		
		let output = "";
		
		for(let i = 0; i < productsArray.length; i++) {
			
		output += 
		`<div class="product item text-center product${i}" data-sku="${productsArray[i].sku}"> 						
				<img class="productImg" src="${productsArray[i].image}" alt="${productsArray[i].modelNumber}">
		  		<p class="manufacturer">"${productsArray[i].manufacturer}"</p>
		  		<h4 class="productName lineHeight-lrg">${productsArray[i].name}</h4>
		  		<p class="productPrice">${productsArray[i].regularPrice}</p>
		  		<div>
		  			<button class="quickViewBtn" id="quickView-${productsArray[i].sku}">Quick View</button>
		  			<button id="insert-${productsArray[i].sku}" class="addToCart">Add to Cart</button>
		  		</div>	
		</div>`;	
		
		}
				$("#productList").append(output);
				// owl.data('owl-Carousel').addItem(output);
				//owl.reinit();	
				
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
				// $('.owl-carousel').owlCarousel('add', output).owlCarousel('refresh');	

		this.generateQuickView(productsArray);
	}


generateQuickView(productsArray){

		let productsArr = productsArray;
		let quickViewString = '';

		$(document).on('click', '.quickViewBtn', function(){
				
				let skuNumber = $(this).attr("id").replace(/\D/g, '');
				for(let i = 0; i < productsArr.length; i++){
					if(skuNumber == productsArr[i].sku){

						 quickViewString =`<div id="popupWindow" class="modal-content">
												<img id="img" src="${productsArr[i].imag}">
												<h3>${productsArr[i].modelNumber}</h3>
												<p>${productsArr[i].manufacturer}</p>
												<p>${productsArr[i].width}</p>
												<p>${productsArr[i].color}</p>
												<p>${productsArr[i].regularPrice}</p>
												<button>Add To Cart</button>
												<h3 id="longDescription">${productsArr[i].longDescription}</h3>
											</div>`;
							break;
					}
				}
				$('#quickViewWindow').show();
				$('#quickViewContent').append(quickViewString);
		});

		$(document).on('click','#quickViewClose', function(){
			
			quickViewString = '';
			console.log('quickViewString = ' + quickViewString);
			$('#quickViewContent').append(quickViewString);
			$('#quickViewWindow').hide();
			
		});

}





























}

