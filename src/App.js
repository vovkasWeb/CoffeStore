/** @format */

import "./App.css";
import { Component } from "react";
import Home from "./components/home/home";
import OurCoffee from "./components/ourCoffee/ourCoffee";
import OurGoods from "./components/ourGoods/ourGoods";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
		{ name: "AROMISTICO Coffee 1 kg", type:"Brazil" ,price: "6.99$", top: false, goods: false, id: 1 },
		{ name: "AROMISTICO Coffee 4 kg", type:"Kenya" ,price: "6.99$", top: false, goods: true, id: 2 },
		{ name: "AROMISTICO Coffee 3 kg", type:"Columbia" ,price: "6.99$", top: false, goods: false, id: 3 },
		{ name: "AROMISTICO Coffee 4 kg", type:"Brazil" ,price: "6.99$", top: false, goods: true, id: 4 },
		{ name: "AROMISTICO Coffee 4 kg", type:"Brazil" ,price: "6.99$", top: false, goods: true, id: 5 },
		{ name: "AROMISTICO Coffee 5 kg", type:"Brazil" ,price: "6.99$", top: false, goods: false, id: 6 },],
      term: "",
      filter: "all",
    };
    this.maxId = 4;
  }
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  onUpdateSeacrch = (term) => {
    this.setState({ term });
  };
  filterPost = (items, filter) => {
    switch (filter) {
      case "Brazil":
        return items.filter((item) => (item.type === "Brazil"));
      case "Kenya":
        return items.filter((item) => (item.type ==="Kenya"));
      case "Columbia":
        return items.filter((item) => (item.type === "Columbia"));
		default :
		return items;
    }
  };
  onFilterSelect=(filter)=>{
this.setState({filter});
  }
  render() {
    const { data, term, filter } = this.state;
    const dataOurGoods = data.filter((item) => item.goods);
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route
              path="/ourCoffee"
              element={
                <OurCoffee
                  data={visibleData}
                  onUpdateSeacrch={this.onUpdateSeacrch}
						filter={filter}
						onFilterSelect={this.onFilterSelect}
                />
              }
            />
            <Route
              path="/goodsCoffe"
              element={<OurGoods data={dataOurGoods} />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
