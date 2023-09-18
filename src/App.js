import { useState, useEffect } from 'react';
import {Routes,Route} from'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import React from 'react';



function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] =useState(0);
  const { addToast} = useToasts();
  //fetching data from the url
  const fetchData = () => {
    return fetch("https://my-json-server.typicode.com/swapnaBommu/RestAPIcreation/appliances")
            .then((response) => response.json())
            .then((data) => setProducts(data));
  }

  useEffect(() => { 
    fetchData();
  },{products});
 
  //post data 
  const PostData =async (value) => {
   console.log('post data', value)
    const response = await fetch('https://my-json-server.typicode.com/swapnaBommu/RestAPIcreation/appliances', {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    setProducts([result,...products]);

  }
 
  function deleteData(removeData){
    fetch(`https://my-json-server.typicode.com/swapnaBommu/RestAPIcreation/appliances/${removeData.id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(removeData)
      })
      products.splice(products.indexOf(removeData),1);
      
      setProducts([...products]);
     
    }



  const handleCartCount = (id) =>{
    setCartCount(cartCount + 1);
    addToast('product added to the cart',{appearance:'success'});
   
}

const decreaseCartCount = (id) =>{
  if(cartCount > 0){
   setCartCount(cartCount - 1);
   addToast('product removed from cart',{appearance:'success'});
  }else{
    setCartCount(0)
  }
  
}


    return (
      <div className="App">
        <Navbar count = {cartCount} />
        <Routes>
        <Route exact path='/home' 
            element={<Home products = {products} 
                            cartCount={cartCount} 
                            increaseQty = {handleCartCount}
                            decreaseQty = {decreaseCartCount}
                            delete = {deleteData}
                            />}
        ></Route>
        <Route exact path='/appliences' element={<AddProduct post={PostData}/>}></Route>      
        </Routes>
      </div>
    );
  
}

export default App;
