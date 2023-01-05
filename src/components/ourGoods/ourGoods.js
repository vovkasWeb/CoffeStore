/** @format */

import { Component } from "react";
import Footer from "../logo/footer/footer";
import Header from "./header/header";
import "./ourGoods.css";
import OurGood from "./ourGood/ourGood";
import ProductBeans from "../productsBeans/productBeans";
class OurGoods extends Component {
  render() {
    return (
      <>
        <header className="ourGoods-header">
          <div className="container">
            <Header />
          </div>
        </header>
        <section className="ourGoods">
          <div className="contsiner-ourGoods">
            <OurGood />
          </div>
        </section>
		  <section className="produts">
		  <div className="container-produts">
			<ProductBeans/>
		  </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default OurGoods;
