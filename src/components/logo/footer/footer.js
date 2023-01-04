/** @format */

import { Component } from "react";
import Navbar from "../../navbar/navbar";
import Logo from "../logo";
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Navbar />
		  <Logo/>
      </footer>
    );
  }
}

export default Footer;
