import React from "react";
import NFood1 from '../assets/NFood1.png';
import NFood2 from '../assets/NFood2.png';
import DeliveryBoy from '../assets/DeliveryGuy.png';


function Service() {

  return(
  <>
   <section id="services-container">
        <h1 className="h-primary center">Best Sellers </h1>
        <div id="bestsellers">
            <div className="card">
                <img src={NFood1} alt="Food Ordering"/>
                <h3 className="h-secondary center">Food Ordering</h3>
                
            </div>
            <div className="card">
                <img src={NFood2} alt="Food Catering"/>
                <h3 className="h-secondary center">Food Catering</h3>
               
            </div>
            <div className="card">
                <img src={NFood2} alt="Food Catering"/>
                <h3 className="h-secondary center">Food Catering</h3>
               
            </div>
            
            <div className="card">
                <img src={NFood1} alt="Food Ordering"/>
                <h3 className="h-secondary center">Food Ordering</h3>
                
            </div>
            <div className="card">
                <img src={NFood2} alt="Food Catering"/>
                <h3 className="h-secondary center">Food Catering</h3>
               
            </div>
            <div className="card">
                <img src={NFood2} alt="Food Catering"/>
                <h3 className="h-secondary center">Food Catering</h3>
               
            </div>
            <div className="card">
                <img src={NFood1} alt="Food Ordering"/>
                <h3 className="h-secondary center">Food Ordering</h3>
                
            </div>
            <div className="card">
                <img src={NFood2} alt="Food Catering"/>
                <h3 className="h-secondary center">Food Catering</h3>
               
            </div>
        
        </div>
    </section>
  </>
    
  );
}

export default Service;