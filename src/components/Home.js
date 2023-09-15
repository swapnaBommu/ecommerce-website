import { useState,useEffect } from "react";
import Product from "./Product";

export default function Home(props){
    const [products, setProducts] = useState([]);
    const cartCount = props.cartCount;
    console.log(cartCount,'cartcount in home')
    const fetchData = () => {
      return fetch("https://my-json-server.typicode.com/swapnaBommu/RestAPIcreation/appliances")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }
  
    useEffect(() => {
      fetchData();
     
    },[])
    return(   
        <div className="product-container">
        {
            products.map((product,index) => (
                <Product product={product} key={index} cartCount={props.cartCount}/>
            ))
        }
        
        </div>
    );
}