import { useState} from "react";


function Productcart(props)
{

// Creating our add to cart logic button 
const[add,setAdded] = useState(false);
// Creating ou increase / decrease button
const[quantity,setQuantity] = useState(1);


return(<div>
    {!add ? (<button className='btn2' onClick={()=> setAdded(true)}>{props.text[props.language].cart}</button>):
               (<div className="center">
                <button className="btn5" onClick={()=>setQuantity(quantity>1?quantity-1:1(setAdded(false)))}>-</button>
                <span>{quantity}</span>
                <button className="btn5" onClick={()=>setQuantity(quantity+1)}>+</button> 
                </div>
                )}
           </div> );
}                
               

export default Productcart;