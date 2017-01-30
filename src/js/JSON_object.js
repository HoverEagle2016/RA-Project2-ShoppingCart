		var shoppingCart = [{"skuNumber" :"221334", "quantity": "-1", "price": "10"}];

		var newSku = "221334";
		var price = "299";
/********************** INSERT ITEM **********************/
function insertItem(){

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
			var newString = `{"skuNumber" :"${newSku}", "quantity": 1, "price": "${price}"}`;
				var newObject = JSON.parse(newString);
				shoppingCart.push(newObject);
		}

		return shoppingCart;

}

/********************** DELETE ITEM **********************/

function deleteItem() {

	for(var i = 0; i < shoppingCart.length; i++) {
			
			if(newSku == shoppingCart[i].skuNumber){
				shoppingCart[i].quantity --;

				if(shoppingCart[i].quantity <= 0){
					shoppingCart.pop(shoppingCart[i]);
				}

				break;
			} 
	}

	return shoppingCart;
}









 