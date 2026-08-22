
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

  return(
  <>
   <section id="services-container" style={{color:props.mode === 'dark'?'black':'white'}}>
        <h1 className="h-primary center">Best Sellers </h1>
        <div id="bestsellers">
            <div className="card" >
                <img src={img1} alt="Food Ordering"/>
                <h3 className="food-title center">Chicken Biryani</h3>
                <button className="btn2">Add To Cart</button>
                
            </div>
            <div className="card">
                <img src={img2} alt="Food Catering"/>
                <h3 className="food-title center">Chicken Nahari</h3>
                <button className="btn2">Add To Cart</button>
               
            </div>
            <div className="card">
                <img src={img3} alt="Food Catering"/>
                <h3 className="food-title center">Tandoori Leg Piece</h3>
                <button className="btn2">Add To Cart</button>
               
            </div>
            
            <div className="card">
                <img src={img4} alt="Food Ordering"/>
                <h3 className="food-title center">Paneer Biryani</h3>
                <button className="btn2">Add To Cart</button>
                
            </div>
            <div className="card">
                <img src={img5} alt="Food Catering"/>
                <h3 className="food-title center">Tandoori Paneer Tikka</h3>
                <button className="btn2">Add To Cart</button>
               
            </div>
            <div className="card">
                <img src={img6} alt="Food Catering"/>
                <h3 className="food-title center">Pav Bhaji</h3>
                <button className="btn2">Add To Cart</button>
               
            </div>
            <div className="card">
                <img src={img7} alt="Food Ordering"/>
                <h3 className="food-title center">Shahi Tudka</h3>
                <button className="btn2">Add To Cart</button>
                
            </div>
            <div className="card">
                <img src={img8} alt="Food Catering"/>
                <h3 className="food-title center">Malai Kheer</h3>
                <button className="btn2">Add To Cart</button>
               
            </div>
        
        </div>
    </section>
  </>
    
  );    
}

export default Service;