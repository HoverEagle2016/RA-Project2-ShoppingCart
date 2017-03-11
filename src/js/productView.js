
export default class ProductView{

	constructor() {
		this.productsArray = null;
		this.productString = null;
		this.categoryString = null;
		this.app = null;	
		this.output = "";			
	}

	dataPopulate(productsArray, theApp){
		this.app = theApp;
		this.output ="";
		for(let i = 0; i < productsArray.length; i++) {	
		
		this.output += 
		`<div class="product item text-center product${i}" data-sku="${productsArray[i].sku}"> 						
				<img class="productImg" src="${productsArray[i].image}" alt="${productsArray[i].modelNumber}">
		  		<p class="manufacturer">"${productsArray[i].manufacturer}"</p>
		  		<h4 class="productName lineHeight-regular">${productsArray[i].name}</h4>
		  		<p class="productPrice">$${productsArray[i].regularPrice}</p>
		  		<div>
		  			<button class="quickViewBtn" id="quickView-${productsArray[i].sku}">Quick View</button>
		  			<button id="insert-${productsArray[i].sku}" class="addToCart">Add to Cart</button>
		  		</div>	
		</div>`;			
		}
		// create new object for this
				$("#productList").html(this.output);
				// owl.data('.owl-Carousel').addItem(output);	

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
			    }, 
			    });

				// $('.owl-carousel').owlCarousel('add', output).owlCarousel('refresh');	
		//console.log(productsArray)
		let quickViewBtns = document.getElementsByClassName("quickViewBtn");

		for(let btn of quickViewBtns){
			btn.addEventListener('click', this.generateQuickView(productsArray), false);
		}		
}



generateQuickView(productsArray){
					
	let returnFunction = function(e) {
			
		let skuNumber = $(this).attr("id").replace(/\D/g, '');
		let quickViewItem = null;
		
		function quickViewFilter(item) {
			return item.sku == skuNumber;
		}

		for (let product of productsArray){
			if (product.sku == skuNumber){
				 quickViewItem = product;
			}
		}

	let quickViewString =`<div id="popupWindow" class="modal-content">
										<div class="popImg"> 
											<img id="img" src="${quickViewItem.image}">
										</div>
										<p><span>Model Number: </span>${quickViewItem.modelNumber}</p>
										<p class="manufacturer"><span>Manufacturer: </span>${quickViewItem.manufacturer}</p>
										<p><span>Width: </span>${quickViewItem.width}</p>
										<p><span>Color: </span>${quickViewItem.color}</p>
										<p class="price"><span>Price: </span>$${quickViewItem.regularPrice}</p>
										<button class="addToCart" id="quickViewAdd-${quickViewItem.sku}">Add To Cart</button>
										<p class="longDescription" id="longDescription"><span>Description: </span>${quickViewItem.longDescription}</p>
									</div>`;

		$('#quickViewWindow').show();
		$('#quickViewContent').append(quickViewString);
	
		$(`#quickViewAdd-${quickViewItem.sku}`).click(function(){
			alert("You have successfully add the item into your cart!");
		});
	};// returnFunction ends
		
		$(document).on('click','#quickViewClose', function(){	
			$('#quickViewWindow').hide();
			$('#quickViewContent').html('');	
		});

		return returnFunction;

	} // end of generateQuickView()

} // end of productView class



