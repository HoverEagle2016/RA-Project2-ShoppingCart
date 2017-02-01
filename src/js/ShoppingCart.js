
$(document).on("click",".addToCart",function(){
    	 	
    	 	$("#Qty").show();
    		let inputField = parseInt($("#Qty").val());
    		$("#Qty").val(inputField + 1);	
    		   		

/*****************************Insert Action**********************************/

	    if (typeof(Storage) !== "undefined") {
	    	
		    let newSku = this.id.replace(/\D/g, '');
		  
			if(sessionStorage.getItem(newSku) === null){
					sessionStorage.setItem(newSku, 1);
			} else {
				let quantity = sessionStorage.getItem(newSku);
				sessionStorage.setItem(newSku, parseInt(quantity)+1);
			}

			} else {
			    console.log("Sorry! No Web Storage support..");
			}
	
});



	
	




/*****************************Insert Action
**********************************/

/*****************************Generate Cart View 
**********************************/




/*****************************Generate Cart View 
**********************************/


/*****************************Delete Action
**********************************/


export default class ShoppingCart {

constructor(productsArray, theApp){
	this.productsArray = productsArray;
	this.theApp = theApp;
}

generateCartView(e) {
	let productString = '';
	// let rawSku = e.target.id;
	// let sku = rawSku.replace(/\D/g, '');

	for(let i = 0; i < sessionStorage.length; i++){
		
		let sku = sessionStorage.key(i);
		
		for(let j = 0; j < this.productsArray.length; j++){
			
			if(sku == this.productsArray[j].sku){
				productString = ` <div class="modal-body">
								      <img src="${this.productsArray[i].imag}">
								      <p>manufacturer:${this.productsArray[j].manufacturer}</p>
								      <p>modelNumber:${this.productsArray[j].modelNumber}</p>
								      <div>
								        <p>quantity:${sessionStorage.getItem(sku)}</p>
								        <input type="text" name="">
								      </div>
								      <p>price:${this.productsArray[j].regularPrice}</p>
								      <div>
								          <button id="update-${this.productsArray[j].sku}">Update</button>
								          <button>Remove</button>
								      </div>`;
						console.log("test");

						$('#cartWindow').append(productString);
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
}
		




	
