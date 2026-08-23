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

function Service(props) {
// Creating our add to cart logic button 
const[add,setAdded] = useState(false)
// Creating ou increase / decrease button
const[quantity,setQuantity] = useState(1)

// const addition = ()=>{
// if (add === true){
//     setQuantity(quantity +1)
// }   
// }
// const subtraction = ()=>{
// if (add === true){
//     setQuantity(quantity > 1?quantity-1:1)
// }   
// }


  return(
  <div style={{color:props.mode === 'dark'?'white':'black'}}>
   <section id="services-container"  >
        <h1 className="h-primary center">Best Sellers </h1>
        <div id="bestsellers">
            <div className="card"  style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black'
            }}>
                <img src={img1} alt="Food Ordering"/>
                <h3 className="food-title center">Chicken Biryani</h3>
                
            </div>

            <div className="card"  style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img2} alt="Food Catering"/>
                <h3 className="food-title center">Chicken Nahari</h3>
               {!add ? (<button className='btn2' onClick={()=> setAdded(true)}>Add To Cart</button>):
               (<div className="center">
                <button className="btn5" onClick={()=>setQuantity(quantity>1?quantity-1:1)}>-</button>
                <span>{quantity}</span>
                <button className="btn5" onClick={()=>setQuantity(quantity+1)}>+</button> 
                </div>
                )}
               
            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img3} alt="Food Catering"/>
                <h3 className="food-title center">Tandoori Leg Piece</h3>
                <button className="btn2">Add To Cart</button>
               
            </div>
            
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img4} alt="Food Ordering"/>
                <h3 className="food-title center">Paneer Biryani</h3>
                <button className="btn2">Add To Cart</button>
                
            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img5} alt="Food Catering"/>
                <h3 className="food-title center">Tandoori Paneer Tikka</h3>
                <button className="btn2">Add To Cart</button>
               
            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img6} alt="Food Catering"/>
                <h3 className="food-title center">Pav Bhaji</h3>
                <button className="btn2">Add To Cart</button>
               
            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img7} alt="Food Ordering"/>
                <h3 className="food-title center">Shahi Tudka</h3>
                <button className="btn2">Add To Cart</button>
                
            </div>
            <div className="card" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',borderColor:props.mode === 'dark'?'white':'black'}}>
                <img src={img8} alt="Food Catering"/>
                <h3 className="food-title center">Malai Kheer</h3>
                <button className="btn2">Add To Cart</button>
               
            </div>
        
        </div>
    </section>
  </div>
    
  );    
}

export default Service;