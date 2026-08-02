import React from "react";




function Signin() {

  return(
  <div>
 <section id="signin">
        
        <h1 className="h-primary center">Sign In </h1>
        <div id="contact-box">
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name "/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" placeholder="Enter Your email "/>
                </div>
                <div className="form-group">
                    <label htmlFor="phno">Phone Number:</label>
                    <input type="text" name="phno" id="phno" placeholder="Enter Your Phone Number "/>
                </div>
                <div className="form-group">
                    <label htmlFor="add">Address:</label>
                    <textarea name="add" id="add" cols="30" rows="10">
                    </textarea>
                </div>
            </form>
        </div>
    </section>

  </div>
    
  );
}

export default Signin;