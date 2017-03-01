import BestBuyWebService from './BestBuyWebService';
import ProductView from './productView';
import ShoppingCart from './ShoppingCart';

import DataStorage from './dataStorage.js';

 
export default class App {

	constructor() {
		this.dataObject = {};
		this.productsArray = null;
		this.dataStorage = new DataStorage();
	 	this.initBestBuyService();
	 	this.productView = new ProductView();
	 	this.total = 0;	
	 	
	}

	initBestBuyService() {
		this.bbs = new BestBuyWebService();
		for(let key in this.dataStorage.categoryURL){
			// console.log(this.data.categoryURL[key]);
			this.bbs.getData(this, this.dataStorage.categoryURL[key], key);
			
		}
		
		this.changeCategory();

		// this.bbs.getData(this, null);
		// this.changeCategory();
	}


	changeCategory(){
			$(document).on('click', '.categories',{theApp:this}, function(event){
			// event.data.theApp.bbs.getData(event.data.theApp, "pcmcat241600050001");
			// $("#productList").hide();
			// console.log(event.data.theApp);
			// console.log(this.id);
			event.data.theApp.productsPopulate(event.data.theApp.dataStorage.dataObject[this.id]);
			// console.log(event.data.theApp.dataStorage.dataObject[this.id]);
		});
	}

	// Populate data into the products section
	productsPopulate(productsArray) {
		this.productView.dataPopulate(productsArray);
		
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


	





