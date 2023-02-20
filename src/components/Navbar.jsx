import React, { useEffect, useState } from 'react';
import "../styles/navbar.css"
import logonavbar from "../assets/LogoPink3.png"



const Navbar = () => {

  const [btnChange, setbtnChange] = useState(false)

  const [btnHide, setbtnHide] = useState(true)

  const btnClick = () => {
    setbtnChange(!btnChange)
  }

  const body = document.body.className = btnChange ? "dark" : "active"

  const hideClick = () => {
    setbtnHide(!btnHide)

  }

  return (

    <nav className='navbar-container' >
      <div className='navLogo' >
        <img src={logonavbar} alt="" />
      </div>
      
        <ul className={btnHide ? 'content-navbar hide' : 'content-navbar' } >
          <li className='items-navbar' >
            <a href='#about'>About me</a>
          </li>
          <li className='items-navbar'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='items-navbar'>
            <a href='#my abilities'>My abilities</a>
          </li>
          <li className='items-navbar'>
            <a href='#contact me'>Contact me</a>
          </li>
        </ul>
        
     
        <div className='navIcon'>
          <button onClick={btnClick} className={btnChange ? "switch active" : "switch"} id="switch">
            <span><i className="fa-solid fa-sun"></i></span>
            <span><i className="fa-solid fa-moon"></i></span>
          </button>
          <button onClick={hideClick} className='btn-menu'>
          <i className="fa-solid fa-bars"></i>

          </button>
      </div>


    </nav>
  );
};

export default Navbar;
