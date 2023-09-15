
export default function Product(props){
    const title = props.product.title;
    const src = props.product.img;
    const price = props.product.price;
    console.log('pri',props.Product)
    return(
        <div className="product-div">
            <div className="left-section">
                <img 
                    alt="product-img"
                    src={src}
                />
            </div>
            <div className="right-section">
                <p className="title">{title}</p>
                <p className="title">Price: {price}</p>
                <div className="icons">
                    <span>
                        <img src="https://cdn-icons-png.flaticon.com/128/9641/9641897.png" alt="addTocart" />
                        <span className="count">{props.cartCount}</span>
                    </span>
                    <span>
                        <img src="https://cdn-icons-png.flaticon.com/128/1665/1665765.png" alt="delete" />
                        <span className="count">{props.cartCount}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}