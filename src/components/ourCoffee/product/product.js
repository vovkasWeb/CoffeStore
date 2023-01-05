/** @format */

import { Component } from "react";
import "./product.css";
import img from './img/product-img.png';
class Product extends Component {
  render() {
    return <div className="product">
		<img className="product-img" src={img} alt="img product"/>
		<h4 className="product-title">AROMISTICO Coffee 1 kg</h4>
		<span className="product-type">Brazil</span>
		<span className="product-prise">6.99$</span>
	 </div>;
  }
}
export default Product;
