import React ,{ useState } from "react";



function Signin() {
// 1.Declaring or setting our state 
const[text,setText]= useState("");

// 2 To handle clicks ,(User Typing)
// const 

// 3.Creating function to take input from the user
const handleOnChange = (event)=>{
    // Using event to take the input, it will set the upadted values
    setText(event.target.value)

}
  return(
  <div>
 <section id="signin">
        
        <h1 className="h-primary center">Sign In </h1>
        <div id="contact-box">
            <form action="no-php">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name "/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your email "/>
                </div>
                <div className="form-group">
                    <label htmlFor="phno">Phone Number:</label>
                    <input type="number" name="phno" id="phno" placeholder="Enter Your Phone Number "/>
                </div>
                <div className="form-group">
                    <label htmlFor="add">Address:</label>
                    <textarea name="add" id="add" value={text} onChange={handleOnChange} cols="30" rows="10">
                    </textarea>
                </div>
                <button className="btn2 center" type="submit">Submit</button>
                <p className="center">{text.split(' ').length} and {text.length} Characters </p>

            </form>
        </div>
    </section>

  </div>
    
  );
}

export default Signin;