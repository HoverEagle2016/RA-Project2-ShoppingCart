

export default class BestBuyWebService {

	 onResults(e) {
		if(e.target.readyState==4 && e.target.status==200){
			dataPopulate(e.target.responseText);
		}

		console.log("e.target.readyState=" + e.target.readyState);
		console.log("e.target.status=" + e.target.status);
	}

	 getData(){
		let serviceChannel = new XMLHttpRequest();
		serviceChannel.addEventListener("readystatechange", this.onResults, false);
		//let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=" + "hvyYhEddqhvgs985eqvYEZQa" + "&format=json";
		let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=8ccddf4rtjz5k5btqam84qak&format=json";
		serviceChannel.open("GET", url, true);
		serviceChannel.send();
		
	}
}



	
	






















