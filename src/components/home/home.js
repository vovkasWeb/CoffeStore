/** @format */

import { Component } from "react";
import Footer from "../logo/footer/footer";
import AboutUs from "./aboutUs/aboutUs";
import BestCoffee from "./bestCoffee/bestCoffee";
import Header from "./header/header";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }//bestCoffee-bd
  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <Header />
          </div>
        </header>
		  <section className="about">
			<div className="about-container">
          <AboutUs />
			 </div>
        </section>
        <section className="best">
			<div className="best-container">
          <BestCoffee />
			 </div>
        </section>
		  <Footer/>
      </>
    );
  }
}
export default Home;
