import React,{useState} from 'react';
// Card Images (Dishes) 
import img1 from '../assets/img1-removebg-preview.png';
import img2 from '../assets/img2-removebg-preview.png';
import img3 from '../assets/img3-removebg-preview.png';
import img4 from '../assets/img4-removebg-preview.png';
import img5 from '../assets/img5-removebg-preview.png';
import img6 from '../assets/img6-removebg-preview.png';
import img7 from '../assets/img7-removebg-preview.png';
import img8 from '../assets/cimg8.png';
import Productcart from './8.productcart';

function Service(props) {





  return(
  <div style={{color:props.mode === 'dark'?'white':'black'}}>
   <section id="services-container"  >
        <h1 className="h-primary center">Best Sellers </h1>
        <div id="bestsellers">
            <div className="card"  style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black'
            }}>
                <img src={img1} alt="Chicken Biryani"/>
                <h3 className="food-title center">Chicken Biryani<div>₹140 </div></h3>
                
                <Productcart/>
                
            </div>

            <div className="card"  style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img2} alt="Chicken Nahari"/>
                <h3 className="food-title center">Chicken Nahari<div>₹110 </div></h3>
                <Productcart/>

            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img3} alt=" 2 Tandoori Leg Piece"/>
                <h3 className="food-title center"> 2 Tandoori Leg Piece<div>₹120 </div></h3>
                <Productcart/>
               
            </div>
            
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img4} alt="Paneer Biryani"/>
                <h3 className="food-title center">Paneer Biryani<div>₹120 </div></h3>
               <Productcart/> 
            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img5} alt="Tandoori Paneer Tikka"/>
                <h3 className="food-title center">Tandoori Paneer Tikka<div>₹130 </div></h3>
               <Productcart/>
            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img6} alt="Pav Bhaji"/>
                <h3 className="food-title center">Pav Bhaji<div>₹100 </div></h3>
               <Productcart/>
            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img7} alt="Shahi Tudka"/>
                <h3 className="food-title center">Shahi Tudka<div>₹90 </div></h3>
                <Productcart/>
            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img8} alt="Malai Kheer"/>
                <h3 className="food-title center">Malai Kheer<div>₹90 </div></h3>
               <Productcart/>
            </div>
        
        </div>
    </section>
  </div>
    
  );    
}

export default Service;