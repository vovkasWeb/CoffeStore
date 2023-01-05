/** @format */

import { Component } from "react";
import img from "./img/ourGood-img.jpg";
import Logo from "../../logo/logo";
import "./ourGood.css";
class OurGood extends Component {
  render() {
    return (
      <>
        <div className="ourGood__row">
          <div className="ourGood__item-img">
            <img
              src={img}
              alt="img ourGood"
            />
          </div>
          <div className="ourGood__item-body">
            <h3 className="ourGood__title">About our goods</h3>
            <Logo />
            <p className="ourGood__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
            </p>
            <p className="ourGood__text">
              Afraid at highly months do things on at. Situation recommend
              objection do intention so questions. As greatly removed calling
              pleased improve an. Last ask him cold feel met spot shy want.
              Children me laughing we prospect answered followed. At it went is
              song that held help face.
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default OurGood;
