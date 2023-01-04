import { Component } from "react";
import './logo.css'
import logo from './img/logo.svg';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
       <img className="logo-img" src={logo} alt="logo" />
      </div>
    );
  }
}

export default Logo ;
