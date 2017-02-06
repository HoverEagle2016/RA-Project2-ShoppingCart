export default class ShoppingCart {

constructor(productsArray, theApp){
	this.productsArray = productsArray;
	this.theApp = theApp;
	
	this.addToCart(".addToCart");
	this.updateCart();
}

generateCartView(e) {
	let productString = '';
	let total = 0;
	for(let i = 0; i < sessionStorage.length; i++){
		
		let sku = sessionStorage.key(i);
		
		for(let j = 0; j < this.productsArray.length; j++){
			
			if(sku == this.productsArray[j].sku){

				let itemTotal = parseInt(sessionStorage.getItem(sku)) * parseInt(this.productsArray[j].regularPrice);
				
				total += itemTotal;

				productString = ` <div class="flex modal-body" id="cartList-${this.productsArray[j].sku}">
								      
								      <img class="popImg" src="${this.productsArray[j].image}">

								      <div class="shoppingCartColumn">
										<p>manufacturer:${this.productsArray[j].manufacturer}</p>
									  	<p>modelNumber:${this.productsArray[j].modelNumber}</p>
								      </div>
								      <div class="shoppingCartColumn">
								        <input type="number" min="1" type="text" value=${sessionStorage.getItem(sku)} id="input-${this.productsArray[j].sku}">
								      </div>

								      <p id="price-${this.productsArray[j].sku}" class="shoppingCartColumn">price:${this.productsArray[j].regularPrice}</p>

								      <div class="shoppingCartColumn">
								          <button class="updateBtn" id="update-${this.productsArray[j].sku}">Update</button>
								          <button class="deleteBtn" id="delete-${this.productsArray[j].sku}">Remove</button>
								      </div>
									 	<div class="shoppingCartColumn">
											<p id="subtotal-${this.productsArray[j].sku}">Subtotal: ${itemTotal}</p>
									 	</div>
								      `;	
						$('#popupWindow').append(productString);
						} // if Statement
				} // inner Loop		
				
				$('#total').html("Total: " + total);
		} // outer Loop				
		
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
			
			//subTotal update
			let itemPrice = parseInt($(`#price-${skuNumber}`).html().slice(6));
			let newSub = itemPrice * newValue;
			let oldSub = parseInt($(`#subtotal-${skuNumber}`).html().slice(9));
			let diffSub = newSub - oldSub;
			$(`#subtotal-${skuNumber}`).html("Subtotal: " + newSub);

			// Total update
			let newTotal = parseInt($("#total").html().slice(6)) + diffSub;			
			$('#total').html("Total: " + newTotal);
			console.log(newTotal);
			this.total = newTotal;
			
		});

		// delete button function
		$(document).on("click", '.deleteBtn', function(){

			let skuNumber = $(this).attr("id").replace(/\D/g, '');
			let removedQuantity = parseInt(sessionStorage.getItem(skuNumber));
			let productQuantity = parseInt(sessionStorage.getItem('quantity'));

			sessionStorage.setItem('quantity', productQuantity-removedQuantity);
			sessionStorage.removeItem(skuNumber);

			if(sessionStorage.getItem('quantity') == 0){
				sessionStorage.removeItem('quantity');
				$("#Qty").hide();
				$("#cartWindow").hide();
			}

			$("#Qty").val(sessionStorage.getItem('quantity'));
			
			//update Total 
			// use str.replace instead of slice
			let itemPrice = parseInt($(`#price-${skuNumber}`).html().slice(6));			
			let changedPrice = itemPrice * removedQuantity;			
			let updateTotal = parseInt($("#total").html().slice(6)) - changedPrice;
			$('#total').html("Total: " + updateTotal);
			this.total = updateTotal;
			
			$(`#cartList-${skuNumber}`).remove();
		});

		// close Window
		$(document).on('click', '#cartClose', function(){
						
				$('#popupWindow').html('');
				
		});
}


addToCart(target){

	if(sessionStorage.getItem('quantity') > 0){
					$("#Qty").show();
	    		$("#Qty").val(sessionStorage.getItem('quantity'));	
	    	}

	$(document).on("click",target,function(){
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
		




	
