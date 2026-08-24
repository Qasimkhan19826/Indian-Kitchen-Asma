import Logo from '../assets/Indian_Kitchen_Logo.jpeg';
import light from '../assets/light.png';
import dark from '../assets/dark.png';



function Navbar(props) {

  return(
  <div>
      <nav id="navbar" style={{backgroundColor:props.mode === 'light'?'silver':'#061625'}}>
        <div id="logo">
            <img className="image" src={Logo} alt="Indian Kitchen Asma "/>
        </div>
        <ul>
            <li className="item"><a href="#">{props.text[props.language].home}</a></li>
            <li className="item"><a href="#">Services</a></li>
            <li className="item"><a href="#">Contact Us</a></li>
            
        </ul>
        <div id="left">
        <button className="btn4">Login</button>
        <button className="btn4">Signin</button>
          <select className='btn4'
          value={props.language}
          onChange={(e)=>props.setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="gu">Gujarati</option>
          </select>
        <button id="btn3" onClick={props.toggleMode}> 
          <img className="imagemode"   src={props.mode === 'light'?light:dark} style={{backgroundColor:props.mode === 'light'?'white':'black'}}/></button>
        </div>
    </nav>
  </div>
    
  );
}

export default Navbar;