import React ,{ useState } from "react";



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
  return(
  <div>
 <section id="signin" style={{color:props.mode === 'dark'?'white':'black'}} >
        
        <h1 className="h-primary center">Sign In </h1>
        <div id="contact-box">
            <form action="no-php">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}} placeholder="Enter Your Name "/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your email "style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phno">Phone Number:</label>
                    <input type="number" name="phno" id="phno" placeholder="Enter Your Phone Number "style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="add">Address:</label>
                    <textarea name="add" id="add" value={text} onChange={handleOnChange} cols="30" rows="10"style={{backgroundColor:props.mode === 'light'?'white':'#232a3b',
                borderColor:props.mode === 'dark'?'white':'black',color:props.mode === 'dark'?'white':'black'}}>
                    </textarea>
                </div>
                <button className="btn2 center" type="submit">Submit</button>
                {/* Here we there is a bug when i am using this  {text.split(' ').length} it creates an empty array which is counted as a word ,also it is consider 1 space as a word .
                So here we will use filter method to solve this problem it takes 2 arguments ()=> arrow function and inside passing our array element like this (elements)=>(return element.length!=0) to filter elements of the array .It will remove the word 0 elements .
                   */}
                <p className="center">{text.split(' ').filter((element)=>{return element.length !=0}).length} and {text.length} Characters </p>

            </form>
        </div>
    </section>

  </div>
    
  );
}

export default Signin;