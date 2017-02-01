
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
		  			<button>Quick View</button>
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
		}

		test() {
			alert("hello");
		}
}

