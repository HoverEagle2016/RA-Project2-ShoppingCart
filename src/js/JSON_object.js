		var shoppingCart = [{"skuNumber" :"221334", "quantity": "2", "price": "10"}];
		var newSku = "221334";
		var price = "299";
/********************** INSERT ITEM **********************/
function insertAction(object){
		newSku = object.id.replace(/\D/g, '');
		price = object.getAttribute('data-price');

		if(shoppingCart.length === 0) {

			addNewObject();

		} else {
			for(var i = 0; i < shoppingCart.length; i++) {
			if(newSku == shoppingCart[i].skuNumber){
				shoppingCart[i].quantity ++;
				break;
			} 

			if(i == shoppingCart.length - 1) {
				addNewObject();
				break;
				}
			}
		}

		function addNewObject() {
			var newString = `{"skuNumber":"${newSku}", "quantity": 1, "price": "${price}"}`;
				var newObject = JSON.parse(newString);
				shoppingCart.push(newObject);
		}

		console.log(shoppingCart);

}

/********************** DELETE ITEM **********************/

function deleteAction(object) {
	newSku = object.id.replace(/\D/g, '');
		price = object.getAttribute('data-price');

	for(var i = 0; i < shoppingCart.length; i++) {
			
			if(newSku == shoppingCart[i].skuNumber){
				shoppingCart[i].quantity --;

				if(shoppingCart[i].quantity <= 0){
					shoppingCart.pop(shoppingCart[i]);
				}

				break;
			} 
	}

	console.log(shoppingCart);
}









 