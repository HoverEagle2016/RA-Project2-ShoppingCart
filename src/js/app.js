import BestBuyWebService from './BestBuyWebService';
import View from './View';
import ShoppingCart from './ShoppingCart';
$("document").ready(function(){  $("#Qty").hide();   });


export default class App {

	constructor() {
		 this.productsArray = null;
		 this.view = new View();
		 this.initBestBuyService();		 
	}

	initBestBuyService() {
		this.bbs = new BestBuyWebService();
		this.bbs.getData(this);
	}

	// Populate data into the products section
	productsPopulate(productsArray, theApp) {
		this.view.dataPopulate(productsArray,this);
	}

	initShoppingCart(){
		this.shoppingCart = new ShoppingCart(this.productsArray);
	}

	prepCartView(productsArray, theApp){
		this.shoppingCart.prepCartView(this.productsArray, this);
	}

}






