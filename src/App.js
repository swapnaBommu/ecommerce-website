import { useState, useEffect } from 'react';
import {Routes,Route} from'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import React from 'react';



function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] =useState(0);
  
  const fetchData = () => {
    return fetch("https://my-json-server.typicode.com/swapnaBommu/RestAPIcreation/appliances")
            .then((response) => response.json())
            .then((data) => setProducts(data));
  }
  
  useEffect(() => { 
    fetchData();
  },[])
 
  const handleCartCount = (id) =>{
    setCartCount(cartCount + 1);
   
}
const decreaseCartCount = (id) =>{
  if(cartCount > 0){
   setCartCount(cartCount - 1);
  }else{
    setCartCount(0)
  }
  
}

    return (
      <div className="App">
        <Navbar count = {cartCount}/>
        <Routes>
        <Route exact path='/home' 
            element={<Home products = {products} 
                            cartCount={cartCount} 
                            increaseQty = {handleCartCount}
                            decreaseQty = {decreaseCartCount}
                            />}
        ></Route>
        <Route exact path='/add' element={<AddProduct />}></Route>      
        </Routes>
      </div>
    );
  
}

export default App;
