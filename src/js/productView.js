
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
		this.generateQuickView(productsArray);
	}


generateQuickView(productsArray){
		
		let productsArr = productsArray;
		let quickViewString = '';
		let app = this.app;
			
		$(document).on('click', '.quickViewBtn', {productsArr: productsArr}, function(event){
				console.log("quickView");
				console.log(event.data.productsArr);
				let skuNumber = $(this).attr("id").replace(/\D/g, '');
				let quickViewItem = null;
				function quickViewFilter(item) {
					return item.sku == skuNumber;
				}

				for (let product of productsArr){
					console.log(product.sku);
					console.log("skuNumber=" + skuNumber);
					if (product.sku == skuNumber){
						quickViewItem = product;
					}
				}

				console.log(quickViewItem);
				quickViewString =`<div id="popupWindow" class="modal-content">
												<img class="popImg" id="img" src="${quickViewItem.image}">
												<h3>${quickViewItem.modelNumber}</h3>
												<p>${quickViewItem.manufacturer}</p>
												<p>${quickViewItem.width}</p>
												<p>${quickViewItem.color}</p>
												<p>${quickViewItem.regularPrice}</p>
												<button class="addToCart" id="quickViewAdd-${quickViewItem.sku}">Add To Cart</button>
												<h3 id="longDescription">${quickViewItem.longDescription}</h3>
											</div>`;


				$('#quickViewWindow').show();
				$('#quickViewContent').append(quickViewString);

				// app.shoppingCart.addToCart(`#quickViewAdd-${quickViewItem.sku}`);
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

