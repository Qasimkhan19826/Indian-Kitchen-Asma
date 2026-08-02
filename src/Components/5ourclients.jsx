import React from "react";
import Swiggy from '../assets/SwiggyL.png';
import Zomato from '../assets/ZomatoL.png';
import Youtube from '../assets/YoutubeL3.png';
import Gym from '../assets/Logo.jpeg';



function Ourclients() {

  return(
  <div>
<section id="client-section">
        <h1 className="h-primary center">Our Clients </h1>
        <div id="clients">
            <div className="client-items">
                <img src={Swiggy} alt="Our Client"/>
            </div>
            <div className="client-items">
                <img src={Zomato} alt="Our Client"/>
            </div>
            <div className="client-items">
                <img src={Youtube} alt="Our Client"/>
            </div>
            <div className="client-items">
                <img src={Gym} alt="Our Client"/>
            </div>
        </div>
    </section>
  </div>
    
  );
}

export default Ourclients;