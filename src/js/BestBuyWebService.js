
export default class BestBuyWebService {

	constructor(){
		this.JSONData = null;
	}



	processResults(theApp){

		let onResults = function(e){
			if(e.target.readyState==4 && e.target.status==200){
			
			this.JSONData = JSON.parse(e.target.responseText);
			theApp.productsArray = this.JSONData.products;
			
			theApp.productsPopulate(theApp.productsArray);
		}
	}; 

		return onResults;
}

	 getData(theApp){
		let serviceChannel = new XMLHttpRequest();
		serviceChannel.addEventListener("readystatechange", this.processResults(theApp), false);
		//let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=" + "hvyYhEddqhvgs985eqvYEZQa" + "&format=json";
		let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=8ccddf4rtjz5k5btqam84qak&format=json";
		serviceChannel.open("GET", url, true);
		serviceChannel.send();
		
	}
}



	
	






















