
export default class BestBuyWebService {

	constructor(){
		this.JSONData = null;
		this.baseURL = "https://api.bestbuy.com/v1/products((categoryPath.id=";
		this.defaultCat = "abcat0502000";
		this.endURL = "))?apiKey=8ccddf4rtjz5k5btqam84qak&format=json";
		this.url = this.baseURL + this.defaultCat + this.endURL;
	}


	processResults(theApp){

		let onResults = function(e){
			if(e.target.readyState==4 && e.target.status==200){
			
			this.JSONData = JSON.parse(e.target.responseText);
			theApp.productsArray = this.JSONData.products;
					
			theApp.productsPopulate(theApp.productsArray, theApp);
		}
	}; 

		return onResults;
}

	 getData(theApp, catId){
		let serviceChannel = new XMLHttpRequest();
		serviceChannel.addEventListener("readystatechange", this.processResults(theApp), false);
		//let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=" + "hvyYhEddqhvgs985eqvYEZQa" + "&format=json";
		
		if(catId !== null) {
			this.url = this.baseURL + catId + this.endURL;
		}
		
		serviceChannel.open("GET", this.url, true);
		serviceChannel.send();
		
	}
}



	
	






















