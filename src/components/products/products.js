/** @format */

import { Component } from "react";
import Product from "../product/product";
import "./products.css";
class Produts extends Component {
  render() {
    return <div className="product__row">
		<Product/>
		<Product/>
		<Product/>
		<Product/>
	 </div>;
  }
}
export default Produts;
