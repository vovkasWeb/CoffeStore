/** @format */

import { Component } from "react";
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
        <section className="best">
			<div className="best-container">
          <BestCoffee />
			 </div>
        </section>
      </>
    );
  }
}
export default Home;
