
export default class ShoppingCart {

constructor(productsArray, theApp){
	this.productsArray = productsArray;
	this.showCartQty();
	this.shoppingCartData = theApp.dataStorage.dataObject;
}

generateCartView(e) {
	let productString = '';
	let total = 0;
		
	for(let key in this.shoppingCartData) {
		
		let singleCategory = this.shoppingCartData[key];
		
		for(let i = 0; i < sessionStorage.length; i++){
			
		let sku = sessionStorage.key(i);
		
			for(let j = 0; j < singleCategory.length; j++){
				
				if(sku == singleCategory[j].sku){

					let itemTotal = parseInt(sessionStorage.getItem(sku)) * parseFloat(singleCategory[j].regularPrice);
					itemTotal = parseFloat(itemTotal.toFixed(2));
					total += itemTotal;

					productString = `<div class="flex modal-body" id="cartList-${singleCategory[j].sku}">
									      <div class="shoppingCartColumn image">
									      <img src="${singleCategory[j].image}">
												</div>
									      <div class="shoppingCartColumn metadata">
												<p>Manufacturer: ${singleCategory[j].manufacturer}</p>
										  	<p>Model Number: ${singleCategory[j].modelNumber}</p>
									      </div>
									      <div class="shoppingCartColumn qty">
									        <input type="number" min="1" type="text" value=${sessionStorage.getItem(sku)} id="input-${singleCategory[j].sku}">
									      </div>

									      <p id="price-${singleCategory[j].sku}" class="shoppingCartColumn price">Price: $${singleCategory[j].regularPrice}</p>

									      <div class="shoppingCartColumn cta">
									          <button class="updateBtn" id="update-${singleCategory[j].sku}">Update</button>
									          <button class="deleteBtn" id="delete-${singleCategory[j].sku}">Remove</button>
									      </div>
										 	<div class="shoppingCartColumn sub">
												<p id="subtotal-${singleCategory[j].sku}">Subtotal: $${itemTotal}</p>
										 	</div>
									      `;	
							$('#popupWindow').append(productString);
							} // if Statement
					} // inner Loop		
				
		} // outer Loop

	} // Loop for all the categories
		$('#total').html("Total: $" + total.toFixed(2));
		$('#checkoutPrice').val(total.toFixed(2) * 100);
		
		$('#checkoutSubmit').click(function(){
					sessionStorage.clear();
				});
}

		showCartQty(){
					if(sessionStorage.getItem('quantity') > 0){
									$("#Qty").show();
					    		$("#Qty").val(sessionStorage.getItem('quantity'));	
					    	}
				}
}
		

$(document).on('click', '.addToCart', function(){
		
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
			let itemPrice = parseFloat($(`#price-${skuNumber}`).html().substring(8));

			let newSub = itemPrice * newValue;
			let oldSub = parseFloat($(`#subtotal-${skuNumber}`).html().substring(11));
			let diffSub = newSub - oldSub;
			$(`#subtotal-${skuNumber}`).html("Subtotal: $" + newSub.toFixed(2));

			// Total update
			let newTotal = parseFloat($("#total").html().substring(8)) + parseFloat(diffSub);	
			$('#total').html("Total: $" + newTotal.toFixed(2));
			$('#checkoutPrice').val(newTotal);
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
			
			let itemPrice = parseFloat($(`#price-${skuNumber}`).html().substring(8));			
			let changedPrice = itemPrice * removedQuantity;		
			let updateTotal = parseFloat($("#total").html().substring(8)) - changedPrice;
			
			$('#total').html("Total: $" + updateTotal.toFixed(2));
			$('#checkoutPrice').val(updateTotal);
			this.total = updateTotal;
			
			$(`#cartList-${skuNumber}`).remove();
		});

		// close Window
$(document).on('click', '#cartClose', function(){		
				$('#popupWindow').empty();
		});

	
