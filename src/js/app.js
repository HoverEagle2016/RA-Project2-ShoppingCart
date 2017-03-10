import BestBuyWebService from './BestBuyWebService';
import ProductView from './productView';
import ShoppingCart from './ShoppingCart';

import DataStorage from './dataStorage.js';
 
export default class App {

	constructor() {
		
		this.productsArray = null;
		this.dataStorage = new DataStorage();
	 	this.initBestBuyService();
	 	this.productView = new ProductView();
	 	this.initSite = true;

	 	$(document).on('click', '#cart', {theApp:this}, function(event){				
			if(sessionStorage.getItem('quantity') === null){
				return;
			} else {
				$('#cartWindow').show();
				event.data.theApp.shoppingCart.generateCartView();	
			}	
		});
	}

	initBestBuyService() {
		this.bbs = new BestBuyWebService();

		for(let key in this.dataStorage.categoryURL){
			this.bbs.getData(this, this.dataStorage.categoryURL[key], key);	
		}		
		this.changeCategory();		
	}


	changeCategory(){
			$(document).on('click', '.categories',{theApp:this}, function(event){		
			event.data.theApp.productsPopulate(event.data.theApp.dataStorage.dataObject[this.id],
														event.data.theApp);
		});
	}

	// Populate data into the products section
	productsPopulate(productsArray, theApp) {
		// $('.owl-carousel').owlCarousel('update');
		this.initShoppingCart();
		this.productView.dataPopulate(productsArray, theApp);			
	}

	initShoppingCart(){					
		this.shoppingCart = new ShoppingCart(this.productsArray, this);	
		$(document).on('click', '#cartClose', function(){
			$('#cartWindow').hide();				
		});	
	}

} // Close of the app







