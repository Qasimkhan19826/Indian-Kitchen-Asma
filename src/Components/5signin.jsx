import {useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Signin(props) {
// 1.Declaring or setting our state 
const[text,setText]= useState("");

// 2 To handle clicks ,(User Typing)
// const 

// 3.Creating function to take input from the user
const handleOnChange = (event)=>{
    // Using event to take the input, it will set the upadted values
    setText(event.target.value)

}
// Making our Form validation Faster (asychonrous) by using Ajax.
const login = (event)=>{

    // causes the browser to perform its default form submission.
    // We won't that the browser sends the information normally.
    event.preventDefault();
    
    // Ajax Object 
    var ob = new XMLHttpRequest();

    // Giving the filename in which we will pass the data.
    // Prepares the Ajax
    ob.open("POST","http://localhost/PHP/crud.php",true);

    // When the AJAX request finishes and the response comes back, execute this function
    ob.onload = function(){
    if(ob.responseText ==="The record has been inserted successfully")
    {
    let response = ob.responseText.trim();
    toast.success(response);
    }
    else
    {
    let response =ob.responseText;
    toast.error(response);
    }
    // responseText (whatever PHP sent back using echo.)
}
    // This tells PHP what format your sent data is in.
    ob.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    // Sending the actual data
    ob.send(
    "name=" + document.getElementById("name").value +
    "&password=" + document.getElementById("password").value +
    "&cpassword=" + document.getElementById("cpassword").value +
    "&email=" + document.getElementById("email").value +
    "&phno=" + document.getElementById("phno").value +
    "&add=" + document.getElementById("add").value
);
}



  return(
  <div>
 <section id="signin" style={{color:props.mode === 'dark'?'white':'black'}} >
        
        <h1 className="h-primary center">{props.text[props.language].signin}</h1>
        <div id="contact-box">
            {/* <form  action="http://localhost/PHP/form_validation.php" method="POST"> */}
            <form onSubmit={login}>

                <div className="form-group">
                    <label htmlFor="name">{props.text[props.language].name}</label>
                    <input type="text" name="name" id="name" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}} placeholder={props.text[props.language].namep}/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">{props.text[props.language].password}</label>
                    <input type="password" name="password" id="password" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}} placeholder={props.text[props.language].passwordp}/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">{props.text[props.language].cpassword}</label>
                    <input type="password" name="cpassword" id="cpassword" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}} placeholder={props.text[props.language].cpasswordp}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">{props.text[props.language].email}</label>
                    <input type="email" name="email" id="email" placeholder={props.text[props.language].emailp}style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="phno">{props.text[props.language].phno}</label>
                    <input type="number" name="phno" id="phno" placeholder={props.text[props.language].phnop}style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="add">{props.text[props.language].address}</label>
                    <textarea name="add" id="add" value={text} onChange={handleOnChange} cols="30" rows="5"style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}}>
                    </textarea>
                </div>

                <button className="btn2 center" type="submit">{props.text[props.language].submit}</button>
                {/* Here were there is a bug when i am using this  {text.split(' ').length} it creates an empty array which is counted as a word ,also it is consider 1 space as a word .
                So here we will use filter method to solve this problem it takes 2 arguments ()=> arrow function and inside passing our array element like this (elements)=>(return element.length!=0) to filter elements of the array .It will remove the word 0 elements .
                   */}
                <p className="center">{text.split(' ').filter((element)=>{return element.length !=0}).length} {props.text[props.language].and}{text.length} {props.text[props.language].char} </p>

            </form>
        </div>
    </section>
<ToastContainer/>
  </div>
    
  );
}

export default Signin;