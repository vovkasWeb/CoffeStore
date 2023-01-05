/** @format */

import { Component } from "react";
import Logo from "../../logo/logo";
import "./ourBeans.css";
import img from "./img/img-ourBeans.jpg";
class OurBeans extends Component {
  render() {
    return (
      <div className="ourBeans__row">
        <div className="ourBeans__item-img">
          <img
            src={img}
            alt="img ourBeans"
          />
        </div>
        <div className="ourBeans__item-body">
          <h3 className="ourBeans__title">About our beans</h3>
          <Logo />
          <p className="ourBeans__text">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </p>
          <p className="ourBeans__text">
            Afraid at highly months do things on at. Situation recommend
            objection do intention so questions. As greatly removed calling
            pleased improve an. Last ask him cold feel met spot shy want.
            Children me laughing we prospect answered followed. At it went is
            song that held help face.
          </p>
        </div>
      </div>
    );
  }
}

export default OurBeans;
