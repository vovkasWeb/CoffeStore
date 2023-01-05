import { Component } from "react";
import './filter.css';

class Filter extends Component {
  render() {
    return <div className="filter">
		<div className="fiter-search">
			<span className="fiter-search__title filter-title">Lookiing for</span>
			<input className="fiter-search__input" placeholder="start typing here..."  type="text" />
		</div>
		<div className="filter-buttons">
			<span className="filter-buttons__title filter-title">Or filter</span>
			<button className="filter-buttons__button">Brazil</button>
			<button className="filter-buttons__button">Kenya</button>
			<button className="filter-buttons__button">Columbia</button>
		</div>
	 </div>;
  }
}

export default Filter;