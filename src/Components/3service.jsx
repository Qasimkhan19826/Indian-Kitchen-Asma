import React from "react";
import NFood1 from '../assets/NFood1.png';
import NFood2 from '../assets/NFood2.png';
import DeliveryBoy from '../assets/DeliveryGuy.png';


function Service() {

  return(
  <div>
   <section id="services-container">
        <h1 className="h-primary center">Our Services</h1>
        <div id="services">
            <div className="box">
                <img src={NFood1} alt="Food Ordering"/>
                <h3 className="h-secondary center">Food Ordering</h3>
                <p className="center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quia aspernatur esse
                    possimus libero consequuntur maxime magnam a, cum temporibu</p>
            </div>
            <div className="box">
                <img src={NFood2} alt="Food Catering"/>
                <h3 className="h-secondary center">Food Catering</h3>
                <p className="center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quia aspernatur esse
                    possimus libero consequuntur maxime magnam a, cum temporibu</p>
            </div>
            <div className="box">
                <img src={DeliveryBoy} alt="Free Delivery"/>
                <h3 className="h-secondary center">Free Delivery</h3>
                <p className="center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quia aspernatur esse
                    possimus libero consequuntur maxime magnam a, cum temporibu</p>
            </div>
        </div>
    </section>
  </div>
    
  );
}

export default Service;