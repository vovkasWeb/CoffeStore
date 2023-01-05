import { Component } from "react";
import Navbar from "../../navbar/navbar";
import './header.css';
class Header extends Component{
	render(){
		return(
			<>
			 <Navbar/>
			 <h1 className="header-out__title">Our Coffee</h1>
			</>
		)
	}
}

export default Header;