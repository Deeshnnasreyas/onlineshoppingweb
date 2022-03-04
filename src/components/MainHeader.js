import React from 'react';

import { FaShoppingBag, FaUser, FaHeart } from "react-icons/fa";
function MainHeader() {
  return (
    <div className='mainheader'>
      <div className='logocontainer'>
        <img src='./shop.png' alt='blog' width="100px" height="80px" />
      </div>
      <div className='search'>
        <input class="form-control" type="text" placeholder="Search for products, brands & categories " aria-label="default input example" />
      </div>
      <div className='iconlist'>
        <div><FaUser size={25} color="black" /></div>
        <div> <FaShoppingBag size={25} color="black" /></div>
        <div>   <FaHeart size={25} color="black" /></div>
      </div>
    </div>
  )
}

export default MainHeader