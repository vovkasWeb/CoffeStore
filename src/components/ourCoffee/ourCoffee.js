/** @format */

import { Component } from "react";
import Footer from "../logo/footer/footer";
import Filter from "./filter/filter";
import Header from "./header/header";
import OurBeans from "./ourBeans/ourBeans";
import Products from '../products/products'
import "./ourCoffee.css";

class OurCoffee extends Component {
  render() {
	const {data,onUpdateSeacrch,filter,onFilterSelect} = this.props;
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
				<Filter onUpdateSeacrch={onUpdateSeacrch} filter={filter} onFilterSelect={onFilterSelect} />
				<Products data={data} />
			 </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default OurCoffee;
