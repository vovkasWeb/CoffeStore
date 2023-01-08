/** @format */

import { Component } from "react";
import ButtonsFillter from "../buttonsFillter/buttonsFillter";
import "./filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onUpdateSeacrch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSeacrch(term);
  };
 
  render() {
	const {onFilterSelect} = this.props;
    return (
      <div className="filter">
        <div className="fiter-search">
          <span className="fiter-search__title filter-title">Lookiing for</span>
          <input
            className="fiter-search__input"
            placeholder="start typing here..."
            onChange={this.onUpdateSeacrch}
            value={this.state.term}
            type="text"
          />
        </div>
        <div className="filter-buttons">
          <span className="filter-buttons__title filter-title">Or filter</span>
          <ButtonsFillter onFilterSelect={onFilterSelect}/>
        </div>
      </div>
    );
  }
}

export default Filter;
