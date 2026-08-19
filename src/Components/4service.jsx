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
                <p className="center">We provide delicious and hygienically prepared food for weddings, parties, family gatherings, and other special occasions, bringing quality taste and warm hospitality to every event.</p>
            </div>
            <div className="box">
                <img src={NFood2} alt="Food Catering"/>
                <h3 className="h-secondary center">Food Catering</h3>
                <p className="center">Enjoy freshly prepared meals made with quality ingredients, authentic flavors, and careful attention to taste, freshness, and hygiene for a satisfying dining experience.</p>
            </div>
            <div className="box">
                <img src={DeliveryBoy} alt="Free Delivery"/>
                <h3 className="h-secondary center">Free Delivery</h3>
                <p className="center">Enjoy your favorite meals delivered fresh and conveniently to your doorstep. Get free delivery on orders above ₹249.</p>
            </div>
        </div>
    </section>
  </div>
    
  );
}

export default Service;