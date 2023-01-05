/** @format */

import { Component } from "react";
import Footer from "../logo/footer/footer";
import Filter from "./filter/filter";
import Header from "./header/header";
import OurBeans from "./ourBeans/ourBeans";
import "./ourCoffee.css";
import Produts from "./products/products";
class OurCoffee extends Component {
  render() {
    return (
      <>
        <header className="header-out">
          <div className="container">
            <Header />
          </div>
        </header>
        <section className="ourBeans">
          <div className="container-ourBeans">
            <OurBeans />
          </div>
        </section>
        <section className="produts">
          <div className="container-produts">
				<Filter/>
				<Produts/>
			 </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default OurCoffee;
