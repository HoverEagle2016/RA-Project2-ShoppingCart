import BestBuyWebService from './BestBuyWebService';
import View from './View';
import ShoppingCart from './ShoppingCart';

 
export default class App {

	constructor() {
		 this.productsArray = null;
		 this.initBestBuyService();
		 this.view = new View();
		 this.total = 0;	 
	}

	initBestBuyService() {
		this.bbs = new BestBuyWebService();
		this.bbs.getData(this);		
	}

	// Populate data into the products section
	productsPopulate(productsArray,theApp) {
		this.view.dataPopulate(productsArray, theApp);
		this.productsArray = productsArray;	
		this.initShoppingCart();
		
	}

	initShoppingCart(){	
		
		this.shoppingCart = new ShoppingCart(this.productsArray, this);

		$(document).on('click', '#cart', {theApp:this}, function(event){

			if(sessionStorage.getItem('quantity') === null){
				return;
			} else {
				$('#cartWindow').show();
				event.data.theApp.shoppingCart.generateCartView();
			}	
		});

		$(document).on('click', '#cartClose', function(){
			$('#cartWindow').hide();
			
		});
		
	}


}






