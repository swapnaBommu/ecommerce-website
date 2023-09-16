import {Link} from 'react-router-dom';
import React from 'react';
import './Navbar.css';

const Navbar = ({count}) => {
  return (
    <>
      <div className="nav">
       <h1 className='logo'>Ecommerce App</h1>
      <div className='links'>
        <Link to="/home">
          <img src="https://cdn-icons-png.flaticon.com/128/553/553416.png"
              alt="home"
              className='icon'
          />
        </Link>
        <Link to="/add">
          <img src="https://cdn-icons-png.flaticon.com/128/9604/9604309.png"
             alt="add"
             className='icon'
          />
        </Link> 
      </div>
      </div>
      <div className="cartIconContainer">
        <img 
            alt="img" 
            src="https://cdn-icons-png.flaticon.com/128/2203/2203239.png" 
            className="cartIcon" 
        />
        <span className="cartCount">{count}</span>
      </div>
    </>
  );
}


export default Navbar;