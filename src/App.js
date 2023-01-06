
import './App.css';
import Home from './components/home/home';
import OurCoffee from './components/ourCoffee/ourCoffee';
import OurGoods from './components/ourGoods/ourGoods';
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
 <Router>
	<Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/ourCoffee" element={<OurCoffee/>}/>
      <Route path="/goodsCoffe" element={<OurGoods />}/>
	</Routes>
   
   </Router>
	 </>
  );
}

export default App;
