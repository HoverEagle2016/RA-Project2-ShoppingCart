import BestBuyWebService from './BestBuyWebService';
import View from './View';
import ShoppingCart from './ShoppingCart';

export default class App {

	constructor() {
		 
		 this.productsArray = null;
		 
		 this.view = new View();
		 this.shoppingCart = new ShoppingCart();
		 this.initBestBuyService();		 
	}

	initBestBuyService() {
		this.bbs = new BestBuyWebService();
		this.bbs.getData(this);
	}

	// Populate data into the products section
	productsPopulate(productsArray) {
		this.view.dataPopulate(productsArray);
	}

}