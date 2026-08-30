import NFood1 from '../assets/NFood1.webp';
import NFood2 from '../assets/NFood2.webp';
import DeliveryBoy from '../assets/DeliveryGuy.webp';


function Service(props) {

  return(
  <div>
   <section id="services-container" style={{color:props.mode === 'dark'?'white':'black'}} >
        <h1 className="h-primary center">{props.text[props.language].ourservices}</h1>
        <div id="services">
            <div className="box" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={NFood1} alt="Food Ordering"/>
                <h3 className="h-secondary center">{props.text[props.language].heading1}</h3>
                <p className="center">{props.text[props.language].description1}</p>
            </div>
            <div className="box" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={NFood2} alt="Food Catering"/>
                <h3 className="h-secondary center">{props.text[props.language].heading2}</h3>
                <p className="center">{props.text[props.language].description2}</p>
            </div>
            <div className="box" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={DeliveryBoy} alt="Free Delivery"/>
                <h3 className="h-secondary center">{props.text[props.language].heading3}</h3>
                <p className="center">{props.text[props.language].description3}</p>
            </div>
        </div>
    </section>
  </div>
    
  );
}

export default Service;