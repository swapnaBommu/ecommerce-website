import {Link} from 'react-router-dom';
import React from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import './Navbar.css';

const Navbar = ({count,products}) => {
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
        <Link to="/appliences">
          <img src="https://cdn-icons-png.flaticon.com/128/9604/9604309.png"
             alt="add"
             className='icon'
             data-tooltip-id="my-tooltip-3" 
          />
          <ReactTooltip
            id="my-tooltip-3"
            place="bottom"
            content="add product to list"
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