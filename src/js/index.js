import BestBuyWebService from './BestBuyWebService';

let bbws = new BestBuyWebService();

bbws.apiKey = "hvyYhEddqhvgs985eqvYEZQa";

bbws.url = "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=" 
+ bbws.apiKey + "&format=json";

