import {useState} from "react";


function Productcart()
{

// Creating our add to cart logic button 
const[add,setAdded] = useState(false);
// Creating ou increase / decrease button
const[quantity,setQuantity] = useState(1);


return(<div>
    {!add ? (<button className='btn2' onClick={()=> setAdded(true)}>Add To Cart</button>):
               (<div className="center">
                <button className="btn5" onClick={()=>setQuantity(quantity>1?quantity-1:1)}>-</button>
                <span>{quantity}</span>
                <button className="btn5" onClick={()=>setQuantity(quantity+1)}>+</button> 
                </div>
                )}
           </div> );
}                
               

export default Productcart;