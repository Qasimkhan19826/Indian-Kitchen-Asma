import React from "react";
// import HomeImg from '../assets/BG2.jpeg';


function Home(props) {

  return(
  <div>
    <section id="home">
        <h1 className="h-primary visible">{props.text[props.language].title}</h1>
        <p className="visible">Enjoy the rich taste of restaurant-style food, freshly prepared with homemade love, care, and hygiene </p>
        <button class="btn">Order Now</button>

    </section>
  </div>
    
  );
}

export default Home;