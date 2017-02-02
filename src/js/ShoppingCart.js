export default class ShoppingCart {

constructor(productsArray, theApp){
	this.productsArray = productsArray;
	this.theApp = theApp;
	this.addToCart();
	this.updateCart();
	
}

generateCartView(e) {
	let productString = '';
	
	for(let i = 0; i < sessionStorage.length; i++){
		
		let sku = sessionStorage.key(i);
		
		for(let j = 0; j < this.productsArray.length; j++){
			
			if(sku == this.productsArray[j].sku){
				productString = ` <div class="modal-body" id="cartList-${this.productsArray[j].sku}">
								      <img src="${this.productsArray[i].imag}">
								      <p>manufacturer:${this.productsArray[j].manufacturer}</p>
									      <p>modelNumber:${this.productsArray[j].modelNumber}</p>
								      <div>
								        <p>quantity:${sessionStorage.getItem(sku)}</p>
								        <input type="text" value=${sessionStorage.getItem(sku)} id="input-${this.productsArray[j].sku}">
								      </div>
								      <p>price:${this.productsArray[j].regularPrice}</p>
								      <div>
								          <button class="updateBtn" id="update-${this.productsArray[j].sku}">Update</button>
								          <button class="deleteBtn" id="delete-${this.productsArray[j].sku}">Remove</button>
								      </div>`;

						$('#popupWindow').append(productString);
						} // if Statement
				} // inner Loop		

		} // outer Loop		
			
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

updateCart(){
		// update Button function

		$(document).on("click",".updateBtn",function(){
			let skuNumber = $(this).attr("id").replace(/\D/g, '');
		
			
			// update the quantiy property in session storage
			let oldValue = sessionStorage.getItem(skuNumber);
			let newValue = $(`#input-${skuNumber}`).val();
			let diff = parseInt(newValue) - parseInt(oldValue);

			let productQuantity = sessionStorage.getItem('quantity');
			sessionStorage.setItem('quantity', parseInt(productQuantity)+diff);
			sessionStorage.setItem(skuNumber, newValue);
			$("#Qty").val(sessionStorage.getItem('quantity'));
		});

		// delete button function
		$(document).on("click", '.deleteBtn', function(){
			let skuNumber = $(this).attr("id").replace(/\D/g, '');
			let removedQuantity = sessionStorage.getItem(skuNumber);
			let productQuantity = sessionStorage.getItem('quantity');
			sessionStorage.setItem('quantity', parseInt(productQuantity)-parseInt(removedQuantity));
			sessionStorage.removeItem(skuNumber);
			$(`#cartList-${skuNumber}`).remove();
			$("#Qty").val(sessionStorage.getItem('quantity'));
		});
	}

addToCart(){

	if(sessionStorage.getItem('quantity') > 0){
					$("#Qty").show();
	    		$("#Qty").val(sessionStorage.getItem('quantity'));	
	    	}

	$(document).on("click",".addToCart",function(){
					    	$("#Qty").show(); 	
		    if (typeof(Storage) !== "undefined") {
		    	
			    let newSku = this.id.replace(/\D/g, '');
			  	// check if sku number exists
				if(sessionStorage.getItem(newSku) === null){
						sessionStorage.setItem(newSku, 1);
					// Check if 'quantity' property exists
						if(sessionStorage.getItem('quantity') === null){
							sessionStorage.setItem('quantity',1);
						} else{
							let quantity = sessionStorage.getItem('quantity');
							sessionStorage.setItem('quantity', parseInt(quantity)+1);
						}
					// the sku number already exists
				} else {
					
					let productQuantity = sessionStorage.getItem(newSku);
					sessionStorage.setItem(newSku, parseInt(productQuantity)+1);

					let quantity = sessionStorage.getItem('quantity');
					sessionStorage.setItem('quantity', parseInt(quantity)+1);
				}
				// update little shopping cart icon quantity
					$("#Qty").val(sessionStorage.getItem('quantity'));	

				} else {
				    console.log("Sorry! No Web Storage support..");
				}
				
			});
	}
}
		




	
