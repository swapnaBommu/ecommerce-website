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
  },[]);
 
  //post data 
  const PostData = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/appliences', {
      method: 'POST',
      body: 
        {
          "id":20,
          "title":e.title,
          "price":e.price,
          "qty":0,
          "img": e.image
        },
      
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log('',result);
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
//function to delete product
const handleDelete = (product) =>{

 let data = products.splice(products.indexOf(product),1);
 setProducts(data);
 fetchData();


  console.log('delete',products)
  addToast('product deleted',{appearance:'success'});
 
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
                            delete = {handleDelete}
                            />}
        ></Route>
        <Route exact path='/appliences' element={<AddProduct post={PostData}/>}></Route>      
        </Routes>
      </div>
    );
  
}

export default App;
