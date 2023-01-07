
import './App.css';
import { Component } from 'react';
import Home from './components/home/home';
import OurCoffee from './components/ourCoffee/ourCoffee';
import OurGoods from './components/ourGoods/ourGoods';
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  data: [
			 { name: "AROMISTICO Coffee 1 kg", type:"Brazil" ,price: "6.99$", top: false, goods: false, id: 1 },
			 { name: "AROMISTICO Coffee 1 kg", type:"Kenya" ,price: "6.99$", top: false, goods: true, id: 2 },
			 { name: "AROMISTICO Coffee 1 kg", type:"Columbia" ,price: "6.99$", top: false, goods: false, id: 3 },
			 { name: "AROMISTICO Coffee 1 kg", type:"Brazil" ,price: "6.99$", top: false, goods: true, id: 4 },
			 { name: "AROMISTICO Coffee 1 kg", type:"Brazil" ,price: "6.99$", top: false, goods: true, id: 5 },
			 { name: "AROMISTICO Coffee 1 kg", type:"Brazil" ,price: "6.99$", top: false, goods: false, id: 6 },
		  ],
		  term: "",
      filter: "all",
		}
		this.maxId = 4;
	}

 render(){
	
	const { data, term, filter } = this.state;
	const dataOurGoods = data.filter(item=> item.goods);
	return(
		<>
		<Router>
		  <Routes>
			  <Route exact path="/" element={<Home/>}/>
				<Route path="/ourCoffee" element={<OurCoffee data={data} />}/>
			  <Route path="/goodsCoffe"  element={<OurGoods data={dataOurGoods}/>}/>
		  </Routes>
		  
		  </Router>
			</>
	);
 }
}

export default App;
