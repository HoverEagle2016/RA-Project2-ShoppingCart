export default class ShoppingCart {

	 insertAction(object){

	if (typeof(Storage) !== "undefined") {

    let newSku = object.id.replace(/\D/g, '');
	if(sessionStorage.getItem(newSku) === null){
			sessionStorage.setItem(newSku, 1);
	} else {
		let quantity = sessionStorage.getItem(newSku);
		sessionStorage.setItem(newSku, parseInt(quantity)+1);
	}
	} else {
	    console.log("Sorry! No Web Storage support..");
	}

}

 deleteAction(object){
	
	if (typeof(Storage) !== "undefined") {
  		let newSku = object.id.replace(/\D/g, '');
		let quantity = sessionStorage.getItem(newSku);
		sessionStorage.setItem(newSku, quantity-1);

		if(sessionStorage.getItem(newSku) <= 0){
			sessionStorage.removeItem(newSku);
		}		
	} 
	else {
	    console.log("Sorry! No Web Storage support..");
	}

	
}


}
	




	