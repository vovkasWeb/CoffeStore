import { Component } from "react";
import Product from "../product/product";
import "./productBeans.css";

class ProductBeans extends Component {
  render() {
    return (
      <div className="productBeans__row">
        <Product />
		  <Product />
		  <Product />
		  <Product />
		  <Product />
	
      </div>
    );
  }
}

export default ProductBeans;
