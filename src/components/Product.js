// import { useState } from "react";

export default function Product(props){
    const  products = props.products;
    
    return(
        products.map((p) => (
            <div className="product-div">
                <div className="left-section">
                    <img 
                        alt="product-img"
                        src={p.img}
                    />
                </div>
                <div className="right-section">
                    <p className="title">{p.title}</p>
                    <p className="title">Price: {p.price}</p>
                    <div className="icons">
                        <span>
                            <img onClick={() => props.increaseQty(p)} src="https://cdn-icons-png.flaticon.com/128/9641/9641897.png" alt="addTocart" />
                            <span className="count"></span>
                        </span>
                        <span>
                            <img onClick={() => props.decreaseQty(p)} src="https://cdn-icons-png.flaticon.com/128/1665/1665765.png" alt="delete" />
                            <span className="count"></span>
                        </span>
                    </div>
                </div>
                </div>     
        ))
    );
}

                