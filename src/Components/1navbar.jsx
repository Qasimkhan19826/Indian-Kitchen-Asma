import React from "react";
import Logo from '../assets/Indian_Kitchen_Logo.jpeg';
import light from '../assets/light.png';
import dark from '../assets/dark.png';



function Navbar(props) {

  return(
  <div>
      <nav id="navbar" style={{backgroundColor:props.mode === 'light'?'white':'#00010a'}}>
        <div id="logo">
            <img className="image" src={Logo} alt="Indian Kitchen Asma "/>
        </div>
        <ul>
            <li className="item"><a href="/">Home</a></li>
            <li className="item"><a href="/">Services</a></li>
            <li className="item"><a href="/">Contact Us</a></li>
            
        </ul>
        <div id="left">
        <button className="btn4">Login</button>
        <button className="btn4">Signin</button>
        <button className="btn3"><img className="imagemode" onClick={props.toggleMode} src={light}/></button>
        </div>
    </nav>
  </div>
    
  );
}

export default Navbar;