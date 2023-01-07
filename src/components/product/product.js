/** @format */


import "./product.css";
import img from './img/product-img.png';
const Product =(props) =>{
	const {id,name,type,price} =props;
return(
  <div className="product">
		<img className="product-img" src={img} alt="img product"/>
		<h4 className="product-title">{name}</h4>
		<span className="product-type">{type}</span>
		<span className="product-prise">{price}</span>
	 </div>
)
}
export default Product;
