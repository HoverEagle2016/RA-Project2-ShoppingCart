
export default class Product {
	constructor(name, sku, regularPrice, image, manufacturer, modelNumber,
		width, color, longDescription){
		this.name = name;
		this.sku = sku;
		this.regularPrice = regularPrice;
		this.image = image;
		this.manufacturer = manufacturer;
		this.modelNumber = modelNumber;
		this.width = width;
		this.color = color;
		this.longDescription = longDescription;
	}		
}