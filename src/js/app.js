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
    this.pageLoaded = false;

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
				$('.owl-carousel').trigger('destroy.owl.carousel');
				// After destory, the markup is still not the same with the initial.
// The differences are:
//   1. The initial content was wrapped by a 'div.owl-stage-outer';
//   2. The '.owl-carousel' itself has an '.owl-loaded' class attached;
//   We have to remove that before the new initialization.
// $('.owl-carousel').html($('.owl-carousel').find('.owl-stage-outer').html()).removeClass('owl-loaded');
		// $('.owl-carousel').trigger('refresh.owl.carousel');		
			event.data.theApp.productsPopulate(event.data.theApp.dataStorage.dataObject[this.id],
														event.data.theApp);
			
		});
	}

	// Populate data into the products section
	productsPopulate(productsArray, theApp) {
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
