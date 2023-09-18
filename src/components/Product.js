import { Tooltip as ReactTooltip } from "react-tooltip";
export default function Product(props){
    const  products = props.products;
    
    return(
        products.map((p,index) => (
            <div className="product-div" key={index}>
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
                            <img 
                                onClick={() => props.increaseQty(p)} 
                                src="https://cdn-icons-png.flaticon.com/128/9641/9641897.png" 
                                alt="addTocart"
                                data-tooltip-id="my-tooltip-1" 
                            />
                            <ReactTooltip
                                    id="my-tooltip-1"
                                    place="bottom"
                                    content="add product to cart"
                            />
                           
                        </span>
                        <span>
                            <img 
                                onClick={() => props.decreaseQty(p)} 
                                src="https://cdn-icons-png.flaticon.com/128/1665/1665765.png"
                                alt="delete"
                                data-tooltip-id="my-tooltip-2" 
                            />
                            <ReactTooltip
                                    id="my-tooltip-2"
                                    place="bottom"
                                    content="Remove product from cart"
                            />
                           
                        </span>
                        <span>
                            <img 
                                onClick={() => props.delete(p)} 
                                src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png"
                                alt="delete"
                            />
                        </span>
                        <span>
                            <img 
                                src="https://cdn-icons-png.flaticon.com/128/1160/1160758.png"
                                alt="edit"
                            />
                        </span>
                    </div>
                </div>
                </div>     
        ))
    );
}

                