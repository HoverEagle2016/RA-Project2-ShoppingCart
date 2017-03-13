import Product from './product.js';
import DataStorage from './dataStorage.js';

export default class BestBuyWebService {

	constructor(){
		this.JSONData = null;
		this.baseURL = "https://api.bestbuy.com/v1/products((categoryPath.id=";
		this.defaultCat = "abcat0502000";
		this.endURL = "))?apiKey=8ccddf4rtjz5k5btqam84qak&format=json";
		this.url = this.baseURL + this.defaultCat + this.endURL;
		
/**************************NEW DATA MODEL************************************/			
}

	processResults(theApp, category){

		let onResults = function(e){
			if(e.target.readyState==4 && e.target.status==200){
			
			this.JSONData = JSON.parse(e.target.responseText);
			theApp.productsArray = this.JSONData.products;	


/**************************NEW DATA MODEL************************************/
			
			for(let prod of this.JSONData.products){
				theApp.dataStorage.dataObject[category].push(new Product(
					prod.name,
					prod.sku,
					prod.regularPrice,
					prod.image,
					prod.manufacturer,
					prod.modelNumber,
					prod.width,
					prod.color,
					prod.longDescription
				));
			}

	
		
		if(theApp.initSite && theApp.dataStorage.dataObject.tv.length !== 0 ){
				theApp.productsPopulate(theApp.dataStorage.dataObject.tv, theApp, "tv");
				theApp.initSite = false;
		}	
	}
}; 

	return onResults;
}
	
	 getData(theApp, catURL, cat){

		let serviceChannel = new XMLHttpRequest();
		serviceChannel.addEventListener("readystatechange", this.processResults(theApp, cat), false);
		//let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=" + "hvyYhEddqhvgs985eqvYEZQa" + "&format=json";
				
		if(catURL !== null) {
			this.url = this.baseURL + catURL + this.endURL;
		}
		
		serviceChannel.open("GET", this.url, true);
		serviceChannel.send();		
	}
/**************************DEFAULT CATEGORY************************************/	
	

}



	
	






















