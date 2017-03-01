import BestBuyWebService from './BestBuyWebService';
import View from './View';
import ShoppingCart from './ShoppingCart';

import DataStorage from './dataStorage.js';

 
export default class App {

	constructor() {
		this.dataObject = {};
		this.productsArray = null;
		this.data = new DataStorage();
	 	this.initBestBuyService();
	 	this.view = new View();
	 	this.total = 0;	
	 	
	}

	initBestBuyService() {
		this.bbs = new BestBuyWebService();
		for(let key in this.data.categoryURL){
			// console.log(this.data.categoryURL[key]);
			this.bbs.getData(this, this.data.categoryURL[key], key);
		}

		// this.bbs.getData(this, null);
		// this.changeCategory();
	}


	changeCategory(){
			$(document).on('click', '#home_Audio',{theApp:this}, function(event){
			event.data.theApp.bbs.getData(event.data.theApp, "pcmcat241600050001");
			// $("#productList").hide();

		});
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


	





