import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct(props){
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price,setPrice] = useState();
    const [image,setImage] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        let product = {
            "id":new Date().getTime(),
            "title":e.target[0].value,
            "price":e.target[1].value,
            "img":e.target[2].value
        }
        props.post(product);
        setTitle();
        setPrice();
        setImage();
        navigate('/home');
    };
    return(
        <div>
            <h1>AddProduct</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <input
                    type="text" 
                    placeholder="source image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                /><br />
                <button className="button"  type="submit">Add Product</button>
            </form>
        </div>
    );
}