import { useState } from "react";

export default function AddProduct(props){
    console.log('props in addd',props)
    const [title, setTitle] = useState('');
    const [price,setPrice] = useState();
    const [image,setImage] = useState();
    return(
        <div>
            <h1>AddProduct</h1>
            <form onSubmit={() => props.post(title,price,image)}>
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