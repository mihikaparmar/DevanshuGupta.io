import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-logo">
          <div className="tfSvg">
            <img
              src="/images/dev.png"
              alt="tantrafiesta-logo"
            />
          </div>
        
        </div>
        <div
          onClick={() => setShow((prevState) => !prevState)}
          className={`${show ? "hamburger-btn open" : "hamburger-btn"}`}
        >
          <div className="hamburger"></div>
        </div>
        <div className={`${show ? "nav-menu" : "nav-menu hide"}`}>
          <ul>
            <li className="menu-title">Menu</li>
            <li>
             
                Home
           
            </li>
            <li>
             
            About Me
                
              
            </li>
            <li>
                Contact Me
              

              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
