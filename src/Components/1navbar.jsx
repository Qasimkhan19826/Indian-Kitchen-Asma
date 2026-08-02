import React from "react";
import Logo from '../assets/Indian_Kitchen_Logo.jpeg';



function Navbar() {

  return(
  <div>
<nav id="navbar">
        <div id="logo">
            <img id="image" src={Logo} alt="Indian Kitchen Asma "/>
        </div>
        <ul>
            <li className="item"><a href="/">Home</a></li>
            <li className="item"><a href="/">Services</a></li>
            <li className="item"><a href="/">Our Clients</a></li>
            <li className="item"><a href="/">Sign In</a></li>
        </ul>
    </nav>
  </div>
    
  );
}

export default Navbar;