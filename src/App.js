import {Routes,Route} from'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
 import Home from './components/Home';
import AddProduct from './components/AddProduct';
import React from 'react';
// import AddProduct from './components/AddProduct';
class App extends React.Component {
  constructor(){
    super();
    this.state ={
      cartCount : 0
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <Routes>
        <Route exact path='/home' element={<Home cartCount={this.state.cartCount} />}></Route>
        <Route exact path='/add' element={<AddProduct />}></Route>      
        </Routes>
      </div>
    );
  }
}

export default App;
