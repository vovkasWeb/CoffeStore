import { Component } from "react";
import img from './img/815O9ktyfUL.png';
import './bestCoffee.css';
class BestCoffee extends Component{

	render(){
		return (
			<div className="best-block">
			 <h4 className="best-title">Our best</h4>
        <div className="best__list-coffee">
          <div className="best__item-coffee">
				<img className="best__img-item" src={img} alt="img product" />
				<h5 className="best__title-item">Solimo Coffee Beans 2 kg</h5>
				<span className="best__price-item">10.73$</span>
			 </div>
			 <div className="best__item-coffee">
				<img className="best__img-item" src={img} alt="img product" />
				<h5 className="best__title-item">Solimo Coffee Beans 2 kg</h5>
				<span className="best__price-item">10.73$</span>
			 </div>
			 <div className="best__item-coffee">
				<img className="best__img-item" src={img} alt="img product" />
				<h5 className="best__title-item">Solimo Coffee Beans 2 kg</h5>
				<span className="best__price-item">10.73$</span>
			 </div>
			 <div className="best__item-coffee">
				<img className="best__img-item" src={img} alt="img product" />
				<h5 className="best__title-item">Solimo Coffee Beans 2 kg</h5>
				<span className="best__price-item">10.73$</span>
			 </div>
        </div>
			</div>
		 );
	}
}

export default BestCoffee;