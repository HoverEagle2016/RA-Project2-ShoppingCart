import BestBuyWebService from './BestBuyWebService';
import View from './View';
import ShoppingCart from './ShoppingCart';

$("document").ready(function(){  $("#Qty").hide();  });

 
export default class App {

	constructor() {
		 this.productsArray = null;
		 this.initBestBuyService();
		 this.view = new View();	 
	}

	initBestBuyService() {
		this.bbs = new BestBuyWebService();
		this.bbs.getData(this);		
	}

	// Populate data into the products section
	productsPopulate(productsArray,theApp) {
		this.view.dataPopulate(productsArray);
		this.productsArray = productsArray;	
		this.initShoppingCart();
	}

	initShoppingCart(){	
		
		this.shoppingCart = new ShoppingCart(this.productsArray);

		$(document).on('click', '#cart', {theApp:this}, function(event){
			$('#cartWindow').show();
			event.data.theApp.shoppingCart.generateCartView();
		});

		$(document).on('click', '#cartClose', function(){
			$('#cartWindow').hide();
			
		});
		
	}


}






