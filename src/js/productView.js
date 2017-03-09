
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
		// clear previous divs
		// clear previous events associated with buttons
		// non jquery
		// document.getElementById(`insert-${productsArray[i].sku}`).removeEventListener("click",)
		// $(`.product${i}`).html("");

		this.output += 
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
		// create new object for this
				$("#productList").html(this.output);
				// owl.data('.owl-Carousel').addItem(output);		
			
				// $('.owl-carousel').owlCarousel('add', output).owlCarousel('refresh');	

		this.generateQuickView(productsArray);
	}


generateQuickView(productsArray){
		
		let productsArr = productsArray;
		let quickViewString = '';
		let app = this.app;
			
		$(document).on('click', '.quickViewBtn', function(){
				
				let skuNumber = $(this).attr("id").replace(/\D/g, '');

				function quickViewFilter(item) {
					return item.sku == skuNumber;
				}

				let quickViewItem = productsArr.filter(quickViewFilter)[0];

				quickViewString =`<div id="popupWindow" class="modal-content">
												<img class="popImg" id="img" src="${quickViewItem.image}">
												<h3>${quickViewItem.modelNumber}</h3>
												<p>${quickViewItem.manufacturer}</p>
												<p>${quickViewItem.width}</p>
												<p>${quickViewItem.color}</p>
												<p>${quickViewItem.regularPrice}</p>
												<button id="quickViewAdd-${quickViewItem.sku}">Add To Cart</button>
												<h3 id="longDescription">${quickViewItem.longDescription}</h3>
											</div>`;


				$('#quickViewWindow').show();
				$('#quickViewContent').append(quickViewString);

				app.shoppingCart.addToCart(`#quickViewAdd-${quickViewItem.sku}`);
				$(`#quickViewAdd-${quickViewItem.sku}`).click(function(){
					alert("You have successfully add the item into your cart!");
				});
		});

		$(document).on('click','#quickViewClose', function(){
			
			$('#quickViewWindow').hide();
			$('#quickViewContent').html('');
			
		});

}





















}

