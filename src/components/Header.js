import React from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaCartPlus} from "react-icons/fa";


function Header() {

  return (
 
    <div className='header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand nav-item dropdown" to="/"><span><FaBars size={25} color="white"/>All Categories</span></Link>
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><FaBars size={25} color="white"/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">NEW ARRIVALS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">COLLECTIONS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">WOMEN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">MEN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">KIDS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">LINGERIES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">HOME LINES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">BRANDS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">FORWARD BOOKING</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">CUSTOM KURTAS!</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">SALE!</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">CAREER</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">BLOG</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>

  
    </div>
  )
}

export default Header