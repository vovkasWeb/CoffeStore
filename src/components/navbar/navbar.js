import  { Link } from "react-router-dom";
import { Component } from "react";
import coffeeLogo from './img/coffee-logo.svg';
 import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar">
			<img src={coffeeLogo} alt="Logo home-page" className="navbar-logo" />
        <ul className="navbar-list">
			<li className="navbar-item">
			Coffee house
			{/* <Link exact to="/">Coffee house</Link> */}
			</li>
			<li className="navbar-item">
			 Our Coffee
			{/* <Link exact to="/ourCoffee">Our Coffee</Link> */}
			</li>
			<li className="navbar-item">
			For you pleasure
			{/* <Link exact to="/goodsCoffe">For you pleasure</Link> */}
			</li>
		  </ul>
      </div>
    );
  }
}
export default Navbar;
