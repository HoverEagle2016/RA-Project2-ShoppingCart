
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
					console.log(sessionStorage);
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

constructor(productsArray){
	this.productsArray = productsArray;
}

generateCartView(e) {
	
	// let rawSku = e.target.id;
	// let sku = rawSku.replace(/\D/g, '');
	let cartViewString = "";
	for(let i = 0; i < sessionStorage.length; i++){
		let sku = sessionStorage.key[i];
		for(let j = 0; j < this.productsArray.length; j++){

		if(sku == this.productsArray[j].sku){

							let productString = `
							      <img src="">
							      <p>manufacturer:${this.productsArray[i].manufacturer}</p>
							      <p>modelNumber:${this.productsArray[i].modelNumber}</p>
							      <div>
							        <p>quantity:${sessionStorage.getItem(sku)}</p>
							        <input type="text" name="">
							      </div>
							      <p>price:${this.productsArray[i].price}</p>
							      <div>
							          <button>Update</button>
							          <button>Remove</button>
							      </div>`;
						


					} // if Statement

					break;
			} // inner Loop

		} // outer Loop


}


cartViewPop() {
		 cartViewString = `<div id="myModal" class="modal">
							  <div class="modal-content">
							    <div class="modal-header">
							      <span class="close">&times;</span>
							      <h1>Your Cart</h1>
							    </div>
								<div class="modal-body">



								</div>
							    <div class="modal-footer">
							      <h3>Check Out</h3>
							    </div>
							  </div>
							</div>`;
}

prepCartView(productsArray) {
	// let buttons = document.getElementsByClassName("addToCart");

	// for(var btn of buttons) {
	// 	btn.addEventListener("click", this.generateCartView, false);
	// }

	let cart = document.getElementById('cart');

	cart.addEventListener("click", this.generateCartView,false);

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
		




	