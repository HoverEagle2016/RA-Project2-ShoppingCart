

export default class DataPopulate {
	dataPopulate(theData){
		let JSONData = JSON.parse(theData);
		
		for(let i = 0; i < JSONData.length; i++) {
			
			let output = `<div class="product${i}" data-sku="${JSONData[i].productID}" class = 
			"product text-center"> 
				<img class="productImg" src="${JSONData[i].image}" alt="knit-dress">
		  		<p class="manufacturer">"${JSONData[i].manufacturer}"</p>
		  		
		  		<h4 class="productName lineHeight-lrg">${JSONData[i].name}</h4>
		  		<p class="productPrice">$${JSONData[i].price}</p>
		  		<div>
		  			<button>Quick View</button>
		  			<button class="shopBtn color-white">Add to Cart</button>
			</div>`;
		
		}
	}

}