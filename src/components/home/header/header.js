import { Component } from "react";
import Navbar from '../../navbar/navbar';
import './header.css';
import logoCoffe from '../img/coffe-header.svg';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
	return(
		<>
	 <Navbar/>
	 <div className="header__block">
	 <h1 className="header-title">Everything You Love About Coffee</h1>
	 <span className="header__logo">
	 <img className="header__logo-img" src={logoCoffe} alt="Logo Coffee"/>
	 </span>
	 <h3 className="header-subtitle">
        <span>We makes every day full of energy and taste</span>
		  <span>Want to try our beans?</span>
	</h3>
	 <a className="header-btn" href="#">More</a>
	 </div>
	 </>
	);
  }
}
export default Header;