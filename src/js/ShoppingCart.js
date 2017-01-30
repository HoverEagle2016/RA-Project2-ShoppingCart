	
function insertAction(object){
	var newSku = object.id.replace(/\D/g, '');
	if(sessionStorage.getItem(newSku) === null){
			sessionStorage.setItem(newSku, 1);
	} else {
		var quantity = sessionStorage.getItem(newSku);
		sessionStorage.setItem(newSku, parseInt(quantity)+1);
	}
	

	console.log(sessionStorage);

}

function deleteAction(object){
	var newSku = object.id.replace(/\D/g, '');
	var quantity = sessionStorage.getItem(newSku);
	sessionStorage.setItem(newSku, quantity-1);

	if(sessionStorage.getItem(newSku) <= 0){
		sessionStorage.removeItem(newSku);
	}
	
	console.log(sessionStorage.getItem(newSku));
}
