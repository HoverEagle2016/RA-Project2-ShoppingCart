
// export default class DataParse {

// 	outputToDiv(text){
//             var outputDiv = document.getElementById("productList");
//             var newTextNode = document.createTextNode(text);
//             var newElementNode = document.createElement("br");
//             outputDiv.appendChild(newTextNode);
//             outputDiv.appendChild(newElementNode);
//         }
	
// 	dataPopulate(theData){
// 	let JSONData = JSON.parse(theData);
// 		for(let i = 0; i < JSONData.length; i++) {

// 			let output = 
// 		`<div class="product${i}" data-sku="${JSONData[i].productID}" class="product text-center"> 						
// 				<img class="productImg" src="${JSONData[i].image}" alt="${JSONData[i].modelNumber}">
// 		  		<p class="manufacturer">"${JSONData[i].manufacturer}"</p>
// 		  		<h4 class="productName lineHeight-lrg">${JSONData[i].name}</h4>
// 		  		<p class="productPrice">$${JSONData[i].price}</p>
// 		  		<div>
// 		  			<button>Quick View</button>
// 		  			<button class="shopBtn color-white">Add to Cart</button>
// 		  		</div>	
// 		</div>`;
		
// 		}
// 		outputDiv(output);
// 	}

// 	getData(e) {
// 		let serviceChannel = new XMLHttpRequest();
// 		serviceChannel.addEventListener("readystatechange", onResults, false);
// 		//let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=" + "hvyYhEddqhvgs985eqvYEZQa" + "&format=json";
// 		let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=hvyYhEddqhvgs985eqvYEZQa&format=json";
// 		serviceChannel.open("GET", url, true);
// 		serviceChannel.send();

// 		if(e.target.readyState==4 && e.target.status==200){
// 			dataPopulate(e.target.responseText);
// 		}
// 		console.log("getData Function exucting");
// 	}

	
// }

// $("document").ready(function(){
    
//     $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:4
//         }
//     }
//     });

//  });
 

// window.addEventListener("load", getData, false);

	function outputToDiv(text){
            var outputDiv = document.getElementById("productList");
            var newTextNode = document.createTextNode(text);
            // var newElementNode = document.createElement("br");
            outputDiv.appendChild(newTextNode);
            // outputDiv.appendChild(newElementNode);
            console.log("test = " + text);
        }
	
	function dataPopulate(theData){
		let JSONData = JSON.parse(theData);
		let output = "";

		for(let i = 0; i < JSONData.products.length; i++) {
			 output += 
		`<div class="product text-center product${i}" data-sku="${JSONData.products[i].sku}"> 						
				<img class="productImg" src="${JSONData.products[i].image}" alt="${JSONData.products[i].modelNumber}">
		  		<p class="manufacturer">"${JSONData.products[i].manufacturer}"</p>
		  		<h4 class="productName lineHeight-lrg">${JSONData.products[i].name}</h4>
		  		<p class="productPrice">${JSONData.products[i].regularPrice}</p>
		  		<div>
		  			<button>Quick View</button>
		  			<button class="shopBtn color-white">Add to Cart</button>
		  		</div>	
		</div>`;

			if(i == JSONData.products.length-1){
				//console.log(output);
				// document.getElementById("productList").innerHTML = output;
				// owl.data('owl-Carousel').addItem(output);
				$('.owl-carousel').owlCarousel('add', output).owlCarousel('refresh');
				//owl.reinit();			
			}
		}		
	}

	function onResults(e) {
		if(e.target.readyState==4 && e.target.status==200){
			dataPopulate(e.target.responseText);
		}
	}

	function getData(e) {
		let serviceChannel = new XMLHttpRequest();
		serviceChannel.addEventListener("readystatechange", onResults, false);
		//let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=" + "hvyYhEddqhvgs985eqvYEZQa" + "&format=json";
		let url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=hvyYhEddqhvgs985eqvYEZQa&format=json";
		serviceChannel.open("GET", url, true);
		serviceChannel.send();
	}






















