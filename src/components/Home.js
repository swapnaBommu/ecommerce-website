import Product from "./Product";

export default function Home(props){
    
    return(   
        <div className="product-container">
        
            <Product 
                products={props.products} 
                increaseQty = {props.increaseQty}
                decreaseQty = {props.decreaseQty}
                cartcount = {props.cartCount}
            />
        
        </div>
    );
}