import { useState} from "react";


function Productcart(props)
{

// Creating our add to cart logic button 
const[add,setAdded] = useState(false);
// Creating our increase / decrease button
const[quantity,setQuantity] = useState(1);
// Creating warning logic
const [warning, setWarning] = useState(false);

const[warntext,setWarnText]= useState(" ");
const warn = ()=>{
    setWarnText(props.text[props.language].warn)
    setWarning(true)


    setTimeout(()=>{
        setWarning(false);
    },2000);


}
return(<>
    {!add ? (<button className='btn2' onClick={()=> setAdded(true)  }>{props.text[props.language].cart}</button>):
               (<div className="center">
                <button className="btn5" 
                onClick={()=>setQuantity(quantity>1?quantity-1:1(setAdded(false)))}>-</button>
                <span>{quantity}</span>
                <button className="btn5"  
                // onClick={()=>setQuantity(quantity+1) } Old Logic 
                onClick={()=>(quantity<3?setQuantity(quantity+1):(warn())) }
                // Here we are using ternary opertor else Warn() calling the function means showing the warning 
                >+</button> 
                </div>
                )}
                {/* SHOW WARNING */}
                {warning && <div className="cart-warning">{warntext}</div>}

           </> );
}                
               

export default Productcart;